import GeoService from '../services/geo-service';
import { setLoadedActionCreator, setRequstedActionCreator } from './action-creators';
import {
    DATA_REQUESTED,
    CRDS_REQUESTED,
    CRDS_LOADED,
    DATA_ERROR,
    LOCATION_REQUESTED,
    LOCATION_LOADED,
    DATA_LOADED
} from './action-types';


const geoService = new GeoService();

export const getCrds = () => (dispatch) => {
  dispatch(setRequstedActionCreator(DATA_REQUESTED));
  dispatch(setRequstedActionCreator(CRDS_REQUESTED));
  geoService.getLocation()
    .then((data) => {
      const res = data.split(',');
      const crds = {
        lat: res[0],
        lon: res[1],
      };
      dispatch(setLoadedActionCreator(CRDS_LOADED, crds));
    })
    .catch((err) => {
      dispatch(setLoadedActionCreator(DATA_ERROR, err.message));
    });
};

export const getLocation = (crds, lang) => (dispatch) => {
  dispatch(setRequstedActionCreator(DATA_REQUESTED));
  dispatch(setRequstedActionCreator(LOCATION_REQUESTED));
  geoService.getLocationTitle(crds, lang)
    .then((data) => {
      dispatch(setLoadedActionCreator(LOCATION_LOADED, data));
    })
    .catch((err) => {
      dispatch(setLoadedActionCreator(DATA_ERROR, err.message));
    });
};

export const setCrdsFromInput = (lang, text) => (dispatch) => {
  dispatch(setRequstedActionCreator(DATA_REQUESTED));
  geoService.setCrdsFromInput(text, lang)
    .then((data) => {
      dispatch(setRequstedActionCreator(DATA_LOADED));
      const crds = {
        lat: data.lat,
        lon: data.lng,
      };
      dispatch(setLoadedActionCreator(CRDS_LOADED, crds));
    })
    .catch(() => {
      dispatch(setLoadedActionCreator(DATA_ERROR, 'Enter a valid city'));
    });
};

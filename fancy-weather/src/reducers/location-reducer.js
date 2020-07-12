import {
  LOCATION_REQUESTED,
  LOCATION_LOADED,
  LOCATION_ERROR,
  CRDS_REQUESTED,
  CRDS_LOADED,
} from '../actions/action-types';
const initialState = {
  crds: {
    lat: null,
    lon: null,
  },
  location: null,
  isLoading: false,
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOCATION_LOADED:
      return {
        ...state,
        location: action.payload,
        isLoading: false,
      };
    case LOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CRDS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case CRDS_LOADED:
      return {
        ...state,
        crds: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default locationReducer;

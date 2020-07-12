import GeoService from '../services/geo-service';
import { setRequstedActionCreator, setLoadedActionCreator } from './action-creators';
import {
  DATA_REQUESTED,
  DATA_LOADED,
  CONDITION_LOADED,
  WEATHER_INFO_LOADED,
  NEXT_DAYS_TEMP_LOADED,
  WEATHER_LOADED,
  DAYTIME_LOADED,
  DATE_LOADED,
  DATA_ERROR,
} from './action-types';
import { deleteAllNumbers } from '../utils/utils';

const weatherService = new GeoService();

export const fetchWeather = (lat, lon, lang) => (dispatch) => {
  dispatch(setRequstedActionCreator(DATA_REQUESTED));
  weatherService.getWeather(lat, lon, lang)
    .then((data) => {
      dispatch(setRequstedActionCreator(DATA_LOADED));
      const nextDaysTemp = [];
      const infoWeather = {
        feelsLike: Math.floor(data.current.feels_like),
        wind: Math.floor(data.current.wind_speed),
        id: data.current.weather[0].id,
        humidity: data.current.humidity,
        date: data.timezone,
      };
      const days = 4;
      for (let i = 1; i < days; i += 1) {
        const res = {};
        res.contidion = data.daily[i].weather[0].description;
        res.id = data.daily[i].weather[0].id;
        res.temp = Math.floor(data.daily[i].temp.day);
        res.dt = data.daily[i].dt * 1000;
        nextDaysTemp.push(res);
      }
      dispatch(setLoadedActionCreator(CONDITION_LOADED, data.current.weather[0].description));
      dispatch(setLoadedActionCreator(WEATHER_INFO_LOADED, infoWeather));
      dispatch(setLoadedActionCreator(NEXT_DAYS_TEMP_LOADED, nextDaysTemp));
      dispatch(setLoadedActionCreator(WEATHER_LOADED, Math.floor(data.current.temp)));
      dispatch(setLoadedActionCreator(DAYTIME_LOADED,
        deleteAllNumbers(data.current.weather[0].icon)));
      dispatch(setLoadedActionCreator(DATE_LOADED, data.current.dt * 1000));
    })
    .catch((err) => {
      dispatch(setLoadedActionCreator(DATA_ERROR, err));
    });
};

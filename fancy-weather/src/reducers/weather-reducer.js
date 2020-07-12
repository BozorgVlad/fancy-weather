import { seasons } from '../data/data';
import {
  WEATHER_REQUESTED,
  WEATHER_LOADED,
  WEATHER_ERROR,
  CONDITION_LOADED,
  NEXT_DAYS_TEMP_LOADED,
  WEATHER_INFO_LOADED,
  DAYTIME_LOADED,
  DATE_LOADED,
} from '../actions/action-types';

const initialState = {
  todayTemp: null,
  info: [],
  condition: '',
  nextDaysTemp: [],
  isLoading: false,
  error: null,
  season: null,
  dayTime: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case WEATHER_LOADED:
      return {
        ...state,
        todayTemp: action.payload,
        isLoading: false,
      };
    case WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CONDITION_LOADED:
      return {
        ...state,
        condition: action.payload,
      };
    case NEXT_DAYS_TEMP_LOADED:
      return {
        ...state,
        nextDaysTemp: action.payload,
      };
    case WEATHER_INFO_LOADED: {
      return {
        ...state,
        info: action.payload,
      };
    }
    case DAYTIME_LOADED: {
      return {
        ...state,
        dayTime: action.payload,
      };
    }
    case DATE_LOADED: {
      return {
        ...state,
        season: seasons[new Date(action.payload).getMonth()],
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;

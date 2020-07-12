import {
  SET_TEMPRETURE,
  SET_LANGUAGE,
  SET_INPUT_TEXT,
  DATA_REQUESTED,
  DATA_LOADED,
  DATA_ERROR,
  SET_VOICE,
} from '../actions/action-types';

const initialState = {
  scaleTemp: localStorage.getItem('temp') || 'celsius',
  language: localStorage.getItem('lang') || 'en',
  inputText: null,
  isFetching: false,
  error: null,
  voice: 'off',
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPRETURE:
      return {
        ...state,
        scaleTemp: action.payload,
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload,
      };
    case DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        isFetching: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case SET_VOICE:
      return {
        ...state,
        voice: action.payload,
      };
    default:
      return state;
  }
};

export default controlReducer;

import { IMAGE_REQUESTED, IMAGE_LOADED, IMAGE_ERROR } from '../actions/action-types';

const initialState = {
  isLoading: false,
  image: '',
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case IMAGE_LOADED:
      return {
        ...state,
        isLoading: false,
        image: action.payload,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;

import { ARTICLES_LOADED } from '../actions/action-types';

const initialState = {
  articles: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_LOADED:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;

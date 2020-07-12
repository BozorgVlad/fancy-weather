import { combineReducers } from 'redux';
import controlReducer from './control-reducer';
import locationReducer from './location-reducer';
import weatherReducer from './weather-reducer';
import imageReducer from './image-reducer';
import newsReducer from './news-reducer';

const rootReducer = combineReducers({
  control: controlReducer,
  weather: weatherReducer,
  location: locationReducer,
  image: imageReducer,
  news: newsReducer,
});

export default rootReducer;

import weatherReducer from './weather-reducer';
import {
  weatherRequested,
  weatherInfoLoaded,
  nextDaysTempLoaded,
} from '../actions/weather-actions';

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

it('should set isLoading to true', () => {
  const action = weatherRequested();
  const newState = weatherReducer(initialState, action);
  expect(newState.isLoading).toBeTruthy();
});

it('should return correct length of item', () => {
  const action = weatherInfoLoaded([
    { condition: 'rain', id: 23 },
    { condition: 'snow', id: 200 },
    { condition: 'clear', id: 283 },
  ]);
  const newState = weatherReducer(initialState, action);
  expect(newState.info).toHaveLength(3);
});

it('shoul return correct keys in entire object', () => {
  const action = nextDaysTempLoaded([
    { feelsLike: 10, wind: 4, humidity: 60 },
    { feelsLike: 23, wind: 8, humidity: 65 },
    { feelsLike: -17, wind: 12, humidity: 72 },
  ]);
  const newState = weatherReducer(initialState, action);
  expect(newState.nextDaysTemp).toEqual(expect.arrayContaining([
    { feelsLike: 10, wind: 4, humidity: 60 },
    { feelsLike: 23, wind: 8, humidity: 65 },
    { feelsLike: -17, wind: 12, humidity: 72 },
  ]));
});

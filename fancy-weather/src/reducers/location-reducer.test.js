import { crdsLoaded, locationLoaded, locationError } from '../actions/location-actions';
import locationReducer from './location-reducer';


const initialState = {
  crds: {
    lat: null,
    lon: null,
  },
  location: null,
  isLoading: false,
  error: null,
};

it('should return correct object', () => {
  const action = crdsLoaded({
    lat: '53.25',
    lon: '21.7654',
  });
  const newState = locationReducer(initialState, action);
  expect(newState.crds).toEqual(expect.objectContaining({
    lat: '53.25',
    lon: '21.7654',
  }));
});

it('should set correct location', () => {
  const action = locationLoaded('Kiev, Ucraine');
  const newState = locationReducer(initialState, action);
  expect(newState.location).toBe('Kiev, Ucraine');
  expect(newState.location).toBeDefined();
});

it('should set an Error', () => {
  const action = locationError('not found');
  const newState = locationReducer(initialState, action);
  expect(newState.error).toBe('not found');
})
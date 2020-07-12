import controlReducer from './control-reducer';
import { setLanguage, setInputText, setTempreture } from '../actions';

const initialState = {
  scaleTemp: localStorage.getItem('temp') || 'celsius',
  language: localStorage.getItem('lang') || 'en',
  inputText: null,
  isFetching: false,
  error: undefined,
  voice: 'off',
};

it('should return correct language', () => {
  const action = setLanguage('be');
  const newState = controlReducer(initialState, action);
  expect(newState.language).toBe('be');
});

it('it should set correct text', () => {
  const action = setInputText('moscow');
  const newState = controlReducer(initialState, action);
  expect(newState.inputText).toBe('moscow');
  expect(newState.inputText).toBeDefined();
});

it('should set correct scale temp', () => {
  const action = setTempreture('faren');
  const newState = controlReducer(initialState, action);
  expect(newState.scaleTemp).toBe('faren');
});

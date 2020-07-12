import newsReducer from './news-reducer';
import { articleLoaded } from '../actions/ news-actions';

const initialState = {
  articles: [],
};

it('should have length', () => {
  const action = articleLoaded([
    { url: '', title: 'new', id: 213 },
    { url: '', title: 'new', id: 213 },
    { url: '', title: 'new', id: 213 },
    { url: '', title: 'new', id: 213 },
  ]);
  const newState = newsReducer(initialState, action);
  expect(newState.articles).toHaveLength(4);
});

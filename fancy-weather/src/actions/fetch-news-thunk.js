import getNews from '../services/news-service';
import { setRequstedActionCreator, setLoadedActionCreator } from './action-creators';
import { DATA_REQUESTED, ARTICLES_LOADED, DATA_ERROR } from './action-types';

const fetchNews = (querie, lang) => (dispatch) => {
  dispatch(setRequstedActionCreator(DATA_REQUESTED));
  getNews(querie, lang)
    .then((data) => {
      const numberOfTopics = data.articles.length;
      const idGenerator = 103;
      const articles = [];
      for (let i = 0; i < numberOfTopics; i += 1) {
        const topic = {};
        topic.title = data.articles[i].title;
        topic.content = data.articles[i].description;
        topic.link = data.articles[i].url;
        topic.image = data.articles[i].image;
        topic.id = i + idGenerator;
        articles.push(topic);
      }
      dispatch(setLoadedActionCreator(ARTICLES_LOADED, articles));
    })
    .catch(() => {
      dispatch(setLoadedActionCreator(DATA_ERROR, 'Request limit is reached(news)'));
    });
};

export default fetchNews;

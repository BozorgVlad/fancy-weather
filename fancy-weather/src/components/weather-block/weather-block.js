import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TimeBlock from './weather-header/clock';
import LocationTitle from './weather-header/location-title';
import TodayWeather from './today-weather/today-weather';
import ForecastBlock from './forecast-block/forecast-block';
import NewsBlock from './news-block/news-block';
import Map from '../map/map';
import { MainBlock, WeatherBlockStyled } from '../styled-components/weather-block-styled';
import { fetchWeather } from '../../actions/fetch-weather-thunk';
import fetchImage from '../../actions/fetch-image-thunk';
import { getCrds, getLocation, setCrdsFromInput } from '../../actions/fetch-location-thunk';
import fetchNews from '../../actions/fetch-news-thunk';

const WeatherBlock = (props) => {
  const {
    location, language, weather, getCrds, getLocation, fetchWeather, inputText,
    setCrdsFromInput, fetchImage, scaleTemp, fetchNews, articles,
  } = props;
  const { location: { crds } } = props;
  const { date } = weather.info;
  const { season, dayTime } = weather;

  useEffect(() => {
    if (inputText === null) {
      getCrds();
    }
  }, [getCrds]);

  useEffect(() => {
    if (inputText !== null) {
      setCrdsFromInput(language, inputText);
    }
  }, [inputText, setCrdsFromInput, language]);

  useEffect(() => {
    if (inputText === null) {
      if (language === 'en') {
        fetchNews('world', 'en');
      } else {
        fetchNews('мир', 'ru');
      }
    } else {
      fetchNews(inputText, language);
    }
  }, [inputText, language]);

  useEffect(() => {
    fetchImage(`${season},${dayTime}`);
  }, [inputText, fetchImage, crds]);
  return (
    <MainBlock>
      <WeatherBlockStyled>
        <LocationTitle
          language={language}
          getLocation={getLocation}
          location={location}
        />
        <TimeBlock
          language={language}
          date={date}
        />
        <TodayWeather
          fetchWeather={fetchWeather}
          weather={weather}
          crds={crds}
          language={language}
          temp={scaleTemp}
        />
        <ForecastBlock
          info={weather.nextDaysTemp}
          language={language}
          temp={scaleTemp}
        />
      </WeatherBlockStyled>
      <NewsBlock
        articles={articles}
        lang={language}
      />
      <Map
        crds={crds}
        lang={language}
      />
    </MainBlock>
  );
};

const mapStateToProps = (({
  location, weather, control: { language, inputText, scaleTemp }, news: { articles },
}) => ({
  location,
  language,
  weather,
  inputText,
  scaleTemp,
  articles,
}));

const mapDispatchToProps = {
  getLocation,
  getCrds,
  fetchWeather,
  setCrdsFromInput,
  fetchImage,
  fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock);

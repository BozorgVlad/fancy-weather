import React, { useEffect } from 'react';
import {
  weatherInfoRu, weatherInfoEn, weatherInfoBe, conditionBe,
} from '../../../data/data';
import { displayWeatherIcon, convertToFarenh } from '../../../utils/utils';
import Icon, {
  WeatherInfoItem,
  WeatherWrapper,
  TempToday,
  WeatherInfo,
} from '../../styled-components/weather-block-styled';

const TodayWeather = (props) => {
  const {
    weather: {
      todayTemp, info, condition,
    }, crds: { lat, lon }, fetchWeather, language, temp,
  } = props;
  useEffect(() => {
    if (lat || lon) {
      fetchWeather(lat, lon, language);
    }
  }, [lat, lon, fetchWeather, language]);

  const renderInfoItems = (arr) => arr.map((item) => {
    switch (item.id) {
      case 1:
        return (<WeatherInfoItem key={item.id}>{`${item.name} ${temp !== 'celsius' ? convertToFarenh(info.feelsLike) : info.feelsLike}°`}</WeatherInfoItem>);
      case 2:
        return (<WeatherInfoItem key={item.id}>{`${item.name} ${info.wind} m/s`}</WeatherInfoItem>);
      default:
        return (<WeatherInfoItem key={item.id}>{`${item.name} ${info.humidity}%`}</WeatherInfoItem>);
    }
  });

  const infoItems = (lang) => {
    switch (lang) {
      case 'ru':
        return renderInfoItems(weatherInfoRu);
      case 'be':
        return renderInfoItems(weatherInfoBe);
      default:
        return renderInfoItems(weatherInfoEn);
    }
  };
  return (
    <WeatherWrapper>
      <TempToday>
        {temp !== 'celsius' ? convertToFarenh(todayTemp) : todayTemp}
      </TempToday>
      <Icon url={displayWeatherIcon(info.id)} />
      <WeatherInfo>
        {language === 'be' ? <WeatherInfoItem>{conditionBe[info.id]}</WeatherInfoItem>
          : <WeatherInfoItem>{condition}</WeatherInfoItem>}
        {infoItems(language)}
      </WeatherInfo>
    </WeatherWrapper>
  );
};

export default TodayWeather;

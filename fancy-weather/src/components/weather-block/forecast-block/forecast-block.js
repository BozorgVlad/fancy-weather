import React from 'react';
import { displayWeatherIcon, convertToFarenh } from '../../../utils/utils';
import { weekDaysEnFull, weekDaysBeFull, weekDaysRuFull } from '../../../data/data';
import {
  ForecastWrapper,
  DaysTitle,
  NextDayTemp,
  DayWrapper,
  IconMini,
} from '../../styled-components/forecast-block-styled';

const ForecastBlock = (props) => {
  const { info, language, temp } = props;

  const getDayWeek = (lang = 'en', dt) => {
    if (lang === 'ru') {
      return weekDaysRuFull[new Date(dt).getDay()];
    }
    if (lang === 'be') {
      return weekDaysBeFull[new Date(dt).getDay()];
    }
    return weekDaysEnFull[new Date(dt).getDay()];
  };
  const forecastItems = info.map((item) => (
    <DayWrapper key={item.dt}>
      <DaysTitle>{getDayWeek(language, item.dt)}</DaysTitle>
      <NextDayTemp>
        {temp !== 'celsius' ? convertToFarenh(item.temp) : item.temp}
      </NextDayTemp>
      <IconMini url={displayWeatherIcon(item.id)} />
    </DayWrapper>
  ));

  return (
    <ForecastWrapper>
      {forecastItems}
    </ForecastWrapper>
  );
};

export default ForecastBlock;

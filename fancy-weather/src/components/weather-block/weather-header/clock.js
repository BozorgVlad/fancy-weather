import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  monthesRu,
  monthesEn,
  weekDaysRu,
  weekDaysEn,
  monthesBe,
  weekDaysBe,
} from '../../../data/data';
import { mq } from '../../styled-components/media-queries';

const TimeItem = styled.span`
  color: white;
  margin: 5px;
  font-size: 27px;
  font-weight: 400;
  user-select: none;
  ${mq('m', 'ml')(css`
    font-size: 20px;
     margin: 2px;
`)}
`;

const Clock = (props) => {
  const { language, date } = props;
  const [data, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [date]);

  const getDay = (lang = 'en') => {
    if (lang === 'ru') {
      return weekDaysRu[data.getDay()];
    }
    if (lang === 'be') {
      return weekDaysBe[data.getDay()];
    }
    return weekDaysEn[data.getDay()];
  };

  const getMonth = (lang = 'en') => {
    if (lang === 'ru') {
      return monthesRu[data.getMonth()];
    }
    if (lang === 'be') {
      return monthesBe[data.getMonth()];
    }
    return monthesEn[data.getMonth()];
  };

  const day = getDay(language);
  const month = getMonth(language);
  return (
    <div>
      <TimeItem>{day}</TimeItem>
      <TimeItem>{data.getDate()}</TimeItem>
      <TimeItem>{month}</TimeItem>
      <TimeItem>{data.toLocaleTimeString('en-US', { hour12: false, timeZone: date })}</TimeItem>
    </div>
  );
};

export default Clock;

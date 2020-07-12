import styled, { css } from 'styled-components';
import { mq } from './media-queries';

export const WeatherBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  ${mq('sl', 'm')(css`
    margin: 0 auto;
  `)}
  ${mq('s', 'sl')(css`
    margin: 0 auto;
  `)}
`;

export const MainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TempToday = styled.h2`
  z-index: 4;
  user-select: none;
  margin: 0px;
  font-size: 312px;
  position: relative;
  &::after {
    content: '°';
    display: block;
    font-size: 140px;
    position: absolute;
    top: 34px;
    right: -40px;
  }
  ${mq('l', 'xl')(css`
    font-size: 250px;
  `)}
  ${mq('m', 'ml')(css`
    font-size: 200px;
    &::after {
      font-size: 100px;
      top: 0;
    }
  `)}
  ${mq('sl', 'm')(css`
    font-size: 200px;
    &::after {
      font-size: 75px;
      top: 0;
    }
  `)}
  ${mq('s', 'sl')(css`
    font-size: 200px;
    &::after {
      font-size: 75px;
      top: 0;
    }
  `)}
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  position: relative;
  ${mq('sl', 'm')(css`
    justify-content: center;
  `)}
  ${mq('s', 'sl')(css`
    justify-content: center;
  `)}
`;

export const WeatherInfoItem = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  margin: 5px;
  ${mq('l', 'xl')(css`
    font-size: 17px;
    margin: 3px;
  `)}
  ${mq('m', 'ml')(css`
    font-size: 15px;
    margin: 0;
  `)}
  ${mq('sl', 'm')(css`
    font-size: 15px;
    margin: 0;
  `)}
  ${mq('s', 'sl')(css`
    font-size: 15px;
    margin: 0;
  `)}
`;

const Icon = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 270px;
  top: -80px;
  background-image: url(${(props) => (props.url ? props.url : '')});
  ${mq('l', 'xl')(css`
    left: 235px;
    width: 265px;
    height: 265px;
`)}
  ${mq('m', 'ml')(css`
      width: 190px;
      height: 190px;
      left: 200px;
      top: -57px;
  `)}
  ${mq('sl', 'm')(css`
    width: 190px;
    height: 190px;
    left: 170px;
    top: -57px;
  `)}
  ${mq('s', 'sl')(css`
    width: 170px;
    height: 170px;
    left: 150px;
    top: -57px;
  `)}
`;

export default Icon;

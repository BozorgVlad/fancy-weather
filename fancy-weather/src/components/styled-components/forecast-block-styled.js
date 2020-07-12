import styled, { css } from 'styled-components';
import { mq } from './media-queries';
import Icon, { TempToday } from './weather-block-styled';


export const ForecastWrapper = styled.div`
display: flex;
`;

export const DayWrapper = styled.div`
position: relative;
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 30px;
z-index: 4;
${mq('l', 'xl')(css`
  width: 150px;
  margin-right: 20px;
`)}
${mq('m', 'ml')(css`
  width: 120px;
  margin-right: 17px;
`)}
${mq('sl', 'm')(css`
  width: 120px;
  margin-right: 17px;
`)}
${mq('s', 'sl')(css`
  width: 90px;
  margin-right: 13px;
`)}
`;

export const IconMini = styled(Icon)`
width: 100px;
height: 100px;
top: 52px;
left: 125px;
${mq('l', 'xl')(css`
  left: 110px;
  width: 85px;
  height: 85px;
`)}
${mq('m', 'ml')(css`
  width: 70px;
  height: 70px;
  left: 80px;
  top: 37px;
`)}
${mq('sl', 'm')(css`
  width: 75px;
  height: 75px;
  left: 80px;
  top: 30px;
`)}
${mq('s', 'sl')(css`
  width: 60px;
  height: 60px;
  left: 60px;
  top: 25px;
`)}
`;

export const DaysTitle = styled.h3`
margin: 0px;
font-size: 25px;
${mq('m', 'ml')(css`
  font-size: 20px;
`)}
${mq('sl', 'm')(css`
  font-size: 20px;
`)}
${mq('s', 'sl')(css`
  font-size: 15px;
`)}
`;

export const NextDayTemp = styled(TempToday)`
font-size: 120px;
z-index: 4;
&::after {
  font-size: 70px;
  left: 100px;
  top: 10px;
}
${mq('l', 'xl')(css`
font-size: 100px;
`)}
${mq('m', 'ml')(css`
  font-size: 80px;
  &::after {
    font-size: 50px;
    left: 70px;
    top: 0px;
  }
`)}
${mq('sl', 'm')(css`
  font-size: 80px;
  &::after {
    font-size: 50px;
    left: 70px;
    top: 0px;
  }
`)}
${mq('s', 'sl')(css`
  font-size: 60px;
  &::after {
    font-size: 50px;
    left: 50px;
    top: 0px;
}
`)}
`;

import styled, { css } from 'styled-components';
import { mq } from './media-queries';
import background from '../../assets/images/background.jpg';

export const Wrapper = styled.div`
  min-width: 100vw;
  min-hegiht: 100vh;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  background: url(${(props) => props.background || background});
  background-attachment: fixed ;
  background-size: cover;
  background-position: top center;
  transition: background-image 1s ease;
`;

export const OpacityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%);
`;

export const ContentWrapper = styled.div`
  width: 1400px;
  ${mq('xxl')(css`
    width: 2000px;
    max-width: 2550px;
  `)}
  ${mq('xl', 'xxl')(css`
    max-width: 1440px;
  `)}
  ${mq('l', 'xl')(css`
    width: 1180px;
    max-width: 1200px;
  `)}
  ${mq('ml', 'l')(css`
    max-width: 1024px;
    width: 1000px;
  `)}
  ${mq('m', 'ml')(css`
    width: 750px;
    max-width: 768px;
  `)}
  ${mq('sl', 'm')(css`
  width: 418px;
  max-width: 425px;
  `)}
  ${mq('s', 'sl')(css`
  width: 418px;
  max-width: 425px;
  `)}
`;

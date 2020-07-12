import styled, { css } from 'styled-components';
import { mq } from './media-queries';

export const MapWrapper = styled.div`
width: 250px;
height: 250px;
position: relative;
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 100% 44%, 100% 100%, 87% 94%, 0 94%);
${mq('sl', 'm')(css`
  width: 300px;
  height: 300px;
`)}
${mq('s', 'sl')(css`
  width: 290px;
  height: 290px;
`)}
`;

export const CrdsStyled = styled.p`
text-align: end;
`;

export const MapInner = styled.div`
order: 3;
${mq('ml', 'l')(css`
  order: 2;
`)}
${mq('m', 'ml')(css`
  order: 2;
`)}
${mq('sl', 'm')(css`
  order: 2;
  margin: 0 auto;
  margin-top: 15px;
`)}
${mq('s', 'sl')(css`
  order: 2;
  margin: 0 auto;
  margin-top: 15px;
`)}
`;

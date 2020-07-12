import styled, { css } from 'styled-components';
import { mq } from './media-queries';

export const NewsBlockStyled = styled.div`
  display:flex;
  flex-direction: column;
  height: 75vh;
  width: 300px;
  overflow: auto;
  padding: 0 10px;
  ${mq('ml', 'l')(css`
    margin-top: 15px;
    flex-direction: row;
    height: 232px;
    width: 95%;
`)}
  ${mq('m', 'ml')(css`
    margin-top: 15px;
    flex-direction: row;
    height: 232px;
    width: 95%;
  `)}
  ${mq('sl', 'm')(css`
    margin-top: 15px;
    flex-direction: row;
    height: 232px;
    width: 95%;
  `)}
  ${mq('s', 'sl')(css`
    margin-top: 15px;
    flex-direction: row;
    height: 232px;
    width: 270px;
`)}
`;

export const NewsBlockWrapper = styled.div`
  height: 100%;
  dispaly: flex;
  flex-direction: column;
  margin: 0 10px;
  order: 2;
  ${mq('ml', 'l')(css`
    order: 3;
    width: 100%;
`)}
  ${mq('m', 'ml')(css`
    order: 3;
    width: 100%;
  `)}
  ${mq('sl', 'm')(css`
    order: 3;
    width: 100%;
  `)}
  ${mq('s', 'sl')(css`
    order: 3;
    width: 100%;
  `)}
`;

export const NewsBlockTitle = styled.h2`
  text-align: center;
  margin: 0px;
  font-size: 40px;
  margin-bottom: 15px;
`;

export const ArticleTitle = styled.h3`
  text-align: center;
  margin: 0 0 15px 0;
  color: #cecb69;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 2px solid white;
  ${mq('ml', 'l')(css`
    min-width: 350px;
    min-height: 200px;
    margin-right: 100px;
    border-bottom: 0px;
`)}
  ${mq('m', 'ml')(css`
    min-width: 350px;
    min-height: 200px;
    margin-right: 100px;
    border-bottom: 0px;
  `)}
  ${mq('sl', 'm')(css`
    min-width: 350px;
    min-height: 200px;
    margin-right: 100px;
    border-bottom: 0px;
  `)}
  ${mq('s', 'sl')(css`
    min-width: 315px;
    min-height: 200px;
    margin-right: 100px;
    border-bottom: 0px;
  `)}
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 2px;
  ${mq('ml', 'l')(css`
    display: none;
`)}
${mq('m', 'ml')(css`
  display: none;
`)}
${mq('sl', 'm')(css`
  display: none;
`)}
${mq('s', 'sl')(css`
  display: none;
`)}
`;

export const ArticleContent = styled.p`
  margin: 0px;
`;

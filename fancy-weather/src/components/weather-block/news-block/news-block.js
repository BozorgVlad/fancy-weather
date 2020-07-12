import React from 'react';
import ImageError from '../../../assets/images/image_error.png';
import { langNews } from '../../../data/data';
import { translateWord } from '../../../utils/utils';
import {
  Article,
  ArticleTitle,
  ArticleImg,
  ArticleContent,
  NewsBlockWrapper,
  NewsBlockStyled,
  NewsBlockTitle,
} from '../../styled-components/news-block-styled';

const NewsBlock = (props) => {
  const { articles, lang } = props;
  const topics = articles.map((item) => (
    <Article key={item.id}>
      <ArticleTitle>{item.title}</ArticleTitle>
      <ArticleImg src={item.image === null ? ImageError : item.image} alt="topic" />
      <ArticleContent>{item.content}</ArticleContent>
      <a href={item.link} target="_blank" rel="noopener noreferrer">Read more...</a>
    </Article>
  ));

  return (
    <NewsBlockWrapper>
      <NewsBlockTitle>{translateWord(lang, langNews)}</NewsBlockTitle>
      <NewsBlockStyled>
        {topics}
      </NewsBlockStyled>
    </NewsBlockWrapper>
  );
};

export default NewsBlock;

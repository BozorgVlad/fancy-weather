/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { mq } from './media-queries';

export const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  border: 0;
  outline: 0;
  width: 50px;
  height: 50px;
  z-index: 11;
  font-size: 10px;
  color: white;
  background-color: ${(props) => (props.active ? '#4C5255' : 'rgba(180,184,187,.7)')};
  &:hover {
    background-color: #4C5255;
    transition: .2s;
  }
  ${mq('m', 'ml')(css`
    width: 40px;
    height: 40px;
  `)}
  ${mq('sl', 'm')(css`
    width: 43px;
    height: 43px;
`)}
`;

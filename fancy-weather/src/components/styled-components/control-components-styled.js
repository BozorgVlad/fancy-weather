import styled, { css, keyframes } from 'styled-components';
import { mq } from './media-queries';
import { Button } from './styled-components';
import MicroActive from '../../assets/images/microActive.svg';
import Micro from '../../assets/images/micro.svg';
import Search from '../../assets/images/search.svg';
import Vector from '../../assets/images/Vector.png';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const style = css`
animation: ${rotate} 1s linear infinite
`;

export const ButtonRefreshStyled = styled.span`
display: block;
width: 37px;
height: 18px;
background-image: url(${Vector});
background-size: initial;
background-repeat: no-repeat;
background-position: center;
${(props) => (props.load ? style : ' ')};
${mq('sl', 'm')(css`
  width: 23px;
`)}
`;

export const DropDownBtn = styled(Button)`
  margin: 0 10px;
  &:hover {
    background-color: #4C5255;
  }
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display:block;
  }
  &:hover .dropbtn {
    background-color: #4C5255;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  left: 10px;
  min-width: 50px;
  z-index: 1;
  & button:hover {
    background-color: #4C5255;
  }
`;

export const TempButtonWrapper = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${mq('sl', 'm')(css`
    flex-wrap: wrap;
    justify-content: center;
  `)}
  ${mq('s', 'sl')(css`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  z-index: 10;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  outline: 0;
  border: 0;
  font-size: 16px;
  height: 50px;
  color: white;
  padding-left: 10px;
  background-color: rgba(76,82,85,.7);
  &::placeholder {
    color: white;
  }
  ${mq('sl', 'm')(css`
    height: 45px;
    width: 95%;
    font-size: 15px;
    padding-left: 5px;
  `)}
  ${mq('s', 'sl')(css`
    height: 45px;
    width: 95%;
    font-size: 15px;
    padding-left: 5px;
  `)}
`;

export const Microphone = styled.span`
  display: block;
  position: absolute;
  background-image: url(${(props) => (props.active ? MicroActive : Micro)});
  background-size: cover;
  width: 30px;
  height: 30px;
  right: 50px;
  cursor: pointer;
  :hover {
    filter: invert(1);
  }
  ${mq('sl', 'm')(css`
    width: 25px;
    height: 25px;
    right: 50px;
  `)}
  ${mq('s', 'sl')(css`
    width: 25px;
    height: 25px;
    right: 50px;
  `)}
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 9;
  ${mq('sl', 'm')(css`
    margin-top: 10px;
    width: 95vw;
  `)}
  ${mq('s', 'sl')(css`
    margin-top: 10px;
    width: 95vw;
  `)}
`;

export const Warning = styled.p`
  color: #f4304e;
  width: 245px;
`;

export const ButtonSearch = styled(Button)`
  background-image: url(${Search});
  background-size: contain;
  background-repeat: no-repeat;
`;

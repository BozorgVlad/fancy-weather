import styled, { css } from 'styled-components';
import { mq } from './media-queries';
import { Button } from './styled-components';
import Speaker from '../../assets/images/speaker.svg';

export const VoiceWrapper = styled.div`
display:flex
`;

export const Hints = styled.div`
margin-top: 0px;
font-size: 15px;
${mq('m', 'ml')(css`
  font-size: 12px;
  margin: 0;
`)}
${mq('sl', 'm')(css`
    font-size: 10px;
    margin: 0;
`)}
${mq('s', 'sl')(css`
  font-size: 10px;
  margin: 0;
`)}
`;

export const VoiceControlTitle = styled.h4`
margin-right: 10px;
${mq('sl', 'm')(css`
  font-size: 13px;
`)}
${mq('s', 'sl')(css`
  font-size: 13px;
`)}
`;

export const VoiceInner = styled.div`
dispaly: flex;
flex-direction: column;
`;

export const ButtonSpeechStyled = styled(Button)`
  background-image: url(${Speaker});
  background-size: contain;
  background-position: center;
  margin-left: 7px;
`;

export const SpeechControlBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: -112px;
  margin-top: 10px;
  ${mq('sl', 'm')(css`
      display: none;
  `)}
  ${mq('s', 'sl')(css`
    display: none;
  `)}
`;

export const VolumeControlTitle = styled.p`
  margin: 0 5px;
  user-select: none;
  ${mq('sl', 'm')(css`
    font-size: 13px;
  `)}
`;

export const ButtonVolume = styled(Button)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  user-select: none;
  ${mq('m', 'ml')(css`
    width: 20px;
    height: 20px;
`)}
`;

import React, { useEffect, useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import speak from '../../../speechRecognition/speechSynthesis';
import { translateWord } from '../../../utils/utils';
import { volumeLang } from '../../../data/data';
import {
  ButtonSpeechStyled,
  SpeechControlBlock,
  VolumeControlTitle,
  ButtonVolume,
} from '../../styled-components/speech-components-styled';

const ButtonSpeech = (props) => {
  const {
    info: { feelsLike, humidity, wind }, lang,
    condition, todayTemp, voice, resetTranscript, stopListening,
    startListening, finalTranscript, recognition,
  } = props;

  const textEn = `Now is ${todayTemp} degrees, ${condition}, feels like ${feelsLike} degrees, wind is ${wind} metres/sec, humidity ${humidity} %`;
  const textRu = `Сейчас ${todayTemp} градусов, ${condition}, ощущается как ${feelsLike} градусов, ветер ${wind} метров в секунду, влажность ${humidity} %`;
  const [volume, setVolume] = useState(0.5);

  const handleClick = () => {
    if (lang === 'en') {
      return speak(textEn, 'en-Us', volume);
    }
    return speak(textRu, 'ru-Ru', volume);
  };

  const increaseVolume = () => {
    if (volume > 0.9 || volume === 1) {
      setVolume(1);
    } else {
      setVolume(volume + 0.1);
    }
  };

  const decreaseVolume = () => {
    if (volume < 0.1 || volume === 0) {
      setVolume(0);
    } else {
      setVolume(volume - 0.1);
    }
  };

  useEffect(() => {
    recognition.lang = 'en';
    if (voice === 'on') {
      startListening();
      if (finalTranscript === 'go') {
        speak(textEn, 'en-Us', volume);
        resetTranscript();
      }
      if (finalTranscript === 'up' || finalTranscript === 'app') {
        setVolume(volume + 0.1);
        resetTranscript();
      }
      if (finalTranscript === 'down') {
        setVolume(volume - 0.1);
      }
      resetTranscript();
    } else {
      stopListening();
    }
  }, [voice, finalTranscript]);

  return (
    <div>
      <ButtonSpeechStyled
        onClick={() => handleClick()}
      />
      <SpeechControlBlock>
        <VolumeControlTitle>
          {translateWord(lang, volumeLang)}
          {volume.toFixed(1) * 100}
        </VolumeControlTitle>
        <ButtonVolume type="button" onClick={() => decreaseVolume()}>-</ButtonVolume>
        <ButtonVolume type="button" onClick={() => increaseVolume()}>+</ButtonVolume>
      </SpeechControlBlock>
    </div>
  );
};
export default SpeechRecognition(ButtonSpeech);

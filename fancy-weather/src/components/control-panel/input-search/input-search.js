import React, { useState, useRef, useEffect } from 'react';
import SpeechRecognition from '../../../speechRecognition/speech-recognition';
import { placeholderLang, warningLang } from '../../../data/data';
import { translateWord } from '../../../utils/utils';
import {
  Warning,
  FormStyled,
  InputStyled,
  Microphone,
  ButtonSearch,
} from '../../styled-components/control-components-styled';
import { SET_INPUT_TEXT } from '../../../actions/action-types';

const InputSearch = (props) => {
  const {
    setInputText, lang, error, voice,
  } = props;
  const buttonSubmit = useRef(null);
  const [value, setValue] = useState('');
  const [voiceWarn, setVoiceWarn] = useState('');
  const [inputError, setInputError] = useState(error);
  const [isRec, setRec] = useState(false);

  const isValidate = (text) => {
    if (!text) {
      setInputError('Please, enter the city');
      return false;
    }
    setInputError('');
    return true;
  };

  const onRec = () => {
    const recognition = new SpeechRecognition(lang);
    recognition.recognition.start();
    setRec(true);
    recognition.recognition.onresult = (e) => {
      setValue(SpeechRecognition.setTextToInput(e));
      for (let i = 0; i < e.results.length; i += 1) {
        const { transcript } = e.results[i][0];
        if (e.results[i].isFinal) {
          setValue(transcript);
        }
      }
    };
    recognition.recognition.onend = () => {
      setRec(false);
      buttonSubmit.current.click();
      recognition.recognition.stop();
    };
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
    setInputError('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!isValidate(value)) {
      isValidate(value);
    } else {
      setInputText(SET_INPUT_TEXT, value);
      setValue('');
    }
  };

  useEffect(() => {
    setInputError(error);
  }, [error]);

  useEffect(() => {
    if (voice === 'on') {
      setVoiceWarn(
        <Warning>
          {translateWord(lang, warningLang)}
        </Warning>,
      );
    } else {
      setVoiceWarn('');
    }
  }, [voice]);

  return (
    <div>
      <FormStyled>
        <InputStyled
          type="text"
          placeholder={translateWord(lang, placeholderLang)}
          value={value}
          onChange={(e) => onInputChange(e)}
        />
        {isRec ? <Microphone onClick={() => onRec()} active />
          : <Microphone onClick={() => onRec()} />}
        <ButtonSearch
          onClick={(e) => handleClick(e)}
          ref={buttonSubmit}
        />
      </FormStyled>
      {voiceWarn}
      <Warning>{inputError}</Warning>
    </div>
  );
};

export default InputSearch;

import React from 'react';
import { connect } from 'react-redux';
import LangSwitcher from './lang-swithcer/lang-switcher';
import TempretureSwitcher from './temp-switcher/temp-switcher';
import ButtonRefresh from './refresh-button/button-refresh';
import InputSearch from './input-search/input-search';
import ButtonSpeech from './button-speech/button-speech';
import VoiceControl from './voice-control/voice-control';
import { Header, ButtonsWrapper } from '../styled-components/control-components-styled';
import fetchImage from '../../actions/fetch-image-thunk';
import { setValueActionCreator } from '../../actions/action-creators';

const ControlPanel = (props) => {
  const {
    scaleTemp, language, setTempreture, setLanguage, setInputText, fetchImage,
    image, isLoading, todayTemp, info, condition, dayTime, season, error, setVoice, voice,
  } = props;
  return (
    <Header>
      <ButtonsWrapper>
        <ButtonRefresh
          fetchImage={fetchImage}
          image={image}
          isLoading={isLoading}
          dayTime={dayTime}
          season={season}
        />
        <LangSwitcher
          language={language}
          setLang={setValueActionCreator}
        />
        <TempretureSwitcher
          tempreture={scaleTemp}
          setTempreture={setValueActionCreator}
        />
        <ButtonSpeech
          lang={language}
          todayTemp={todayTemp}
          condition={condition}
          info={info}
          voice={voice}
        />
      </ButtonsWrapper>
      <VoiceControl
        setVoice={setValueActionCreator}
        voice={voice}
        lang={language}
      />
      <InputSearch
        setInputText={setValueActionCreator}
        lang={language}
        error={error}
        voice={voice}
      />
    </Header>
  );
};

const mapStateToProps = (({
  control: {
    scaleTemp, language, error, voice,
  }, image: { image, isLoading }, location: { crds },
  weather: {
    todayTemp, condition, info, dayTime, season,
  },
}) => ({
  scaleTemp,
  language,
  image,
  isLoading,
  crds,
  todayTemp,
  condition,
  info,
  dayTime,
  season,
  error,
  voice,
}));

const mapDispatchToProps = {
  fetchImage,
  setValueActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

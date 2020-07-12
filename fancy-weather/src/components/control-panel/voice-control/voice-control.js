import React, { useState, useEffect } from 'react';
import { Button } from '../../styled-components/styled-components';
import { translateWord } from '../../../utils/utils';
import { voiceLang } from '../../../data/data';
import {
  Hints,
  VoiceInner,
  VoiceWrapper,
  VoiceControlTitle,
} from '../../styled-components/speech-components-styled';
import { SET_VOICE } from '../../../actions/action-types';


const VoiceControl = (props) => {
  const { setVoice, voice, lang } = props;
  const [hint, setHint] = useState('');
  const buttons = [
    { name: 'on', id: 23 },
    { name: 'off', id: 24 },
  ];

  const voiceButtons = buttons.map(({ name, id }) => {
    const isActive = name === voice;
    return (
      <Button type="button" key={id} onClick={() => setVoice(SET_VOICE, name)} active={isActive}>{name}</Button>
    );
  });

  useEffect(() => {
    if (voice === 'on') {
      setHint(
        <div>
          <Hints>
            <li>to start say GO</li>
            <li>+ volume say UP</li>
            <li>- volume say DOWN</li>
          </Hints>
        </div>,
      );
    } else {
      setHint('');
    }
  }, [voice]);

  return (
    <VoiceInner>
      <VoiceWrapper>
        <VoiceControlTitle>{translateWord(lang, voiceLang)}</VoiceControlTitle>
        {voiceButtons}
      </VoiceWrapper>
      {hint}
    </VoiceInner>
  );
};

export default VoiceControl;

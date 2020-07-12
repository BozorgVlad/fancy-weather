import React from 'react';
import { Button } from '../../styled-components/styled-components';
import { TempButtonWrapper } from '../../styled-components/control-components-styled';
import { SET_TEMPRETURE } from '../../../actions/action-types';

const TempretureSwitcher = (props) => {
  const { tempreture, setTempreture } = props;
  const buttonsState = [
    { name: 'C', label: 'celsius' },
    { name: 'F', label: 'faren' },
  ];

  const handleClick = (scale) => {
    localStorage.setItem('temp', scale);
    setTempreture(SET_TEMPRETURE, scale);
  };

  const buttons = buttonsState.map(({ name, label }) => {
    const isActive = label === tempreture;
    return (
      <Button active={isActive} key={name} onClick={() => handleClick(label)}>{name}</Button>
    );
  });

  return (
    <TempButtonWrapper>
      {buttons}
    </TempButtonWrapper>
  );
};

export default TempretureSwitcher;

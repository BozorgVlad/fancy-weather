import React from 'react';
import { Button } from '../../styled-components/styled-components';
import {
  DropDown,
  DropDownBtn,
  DropDownContent,
} from '../../styled-components/control-components-styled';
import { SET_LANGUAGE } from '../../../actions/action-types';

const LangSwitcher = (props) => {
  const { language, setLang } = props;
  const buttons = [
    { name: 'en', id: 1 },
    { name: 'ru', id: 2 },
    { name: 'be', id: 3 },
  ];

  const handleClick = (lang) => {
    localStorage.setItem('lang', lang);
    setLang(SET_LANGUAGE, lang);
  };

  const dropButton = buttons.map(({ name, id }) => (
    <Button key={id} onClick={() => handleClick(name)}>{name}</Button>
  ));
  return (
    <DropDown>
      <DropDownBtn className="dropbtn">{language}</DropDownBtn>
      <DropDownContent className="dropdown-content">
        {dropButton}
      </DropDownContent>
    </DropDown>
  );
};

export default LangSwitcher;

import React from 'react';
import styled from 'styled-components';
import preloader from '../../assets/images/preloader.svg';

const SpinnerStyled = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #59595A;
  z-index: 5;
  background-image: url(${preloader});
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
`;

const Spinner = () => <SpinnerStyled />;

export default Spinner;

import React from 'react';
import { Button } from '../../styled-components/styled-components';
import { ButtonRefreshStyled } from '../../styled-components/control-components-styled';

const ButtonRefresh = (props) => {
  const {
    fetchImage, isLoading, season, dayTime,
  } = props;
  const button = isLoading ? <ButtonRefreshStyled load /> : <ButtonRefreshStyled />;
  return (
    <Button onClick={() => fetchImage(`${season},${dayTime}`)}>
      {button}
    </Button>
  );
};

export default ButtonRefresh;

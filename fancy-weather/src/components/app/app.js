import React from 'react';
import { connect } from 'react-redux';
import 'normalize.css';
import ControlPanel from '../control-panel/control-panel';
import WeatherBlock from '../weather-block/weather-block';
import Spinner from '../spinner/spinner';
import ErrorBoundary from '../error-boundary/error-boundary';
import {
  Wrapper,
  OpacityWrapper,
  ContentWrapper,
} from '../styled-components/app-components-styled';
import fetchImage from '../../actions/fetch-image-thunk';

const App = (props) => {
  const { scaleTemp, image, isFetching } = props;

  return (
    <ErrorBoundary>
      <Wrapper background={image}>
        {isFetching ? <Spinner /> : ''}
        <OpacityWrapper>
          <ContentWrapper>
            <ControlPanel tempreture={scaleTemp} />
            <WeatherBlock />
          </ContentWrapper>
        </OpacityWrapper>
      </Wrapper>
    </ErrorBoundary>
  );
};

const mapStateToProps = ({ control: { isFetching, scaleTemp, language }, image: { image } }) => ({
  scaleTemp, language, image, isFetching,
});

const mapDispatchToProps = {
  fetchImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

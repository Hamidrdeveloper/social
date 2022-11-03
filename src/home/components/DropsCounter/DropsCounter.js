//React & React Native
import React from 'react';

//Logo
import {Drop} from '../../../shared/Icons';

//Styled components
import {CounterContainer, CounterText} from './DropsCounter.styles';

const DropsCounter = () => {
  return (
    <CounterContainer>
      <Drop />
      <CounterText>150</CounterText>
    </CounterContainer>
  );
};

export default DropsCounter;

import React from 'react';
import {Text} from 'react-native';

// Styled Componetnes
import {
  ButtonsContainer,
  CounterMainContainer,
  CounterText,
  CounterTitleText,
  InternalButtonContainer,
} from './Counter.styles';

//Icons
import FeatherIcons from 'react-native-vector-icons/Feather';
import colorSchema from '../../../constants/colorSchema';

const Counter = ({count, setCount, title, increment = 1}) => {
  const iconSize = 30;
  return (
    <CounterMainContainer>
      <CounterTitleText>{title}</CounterTitleText>
      <InternalButtonContainer>
        <ButtonsContainer>
          <FeatherIcons
            name={'minus-circle'}
            size={iconSize}
            color={colorSchema.general.lightBlue}
            onPress={() => {
              count ? setCount(count - increment) : null;
            }}
          />
          <CounterText>{count}</CounterText>
          <FeatherIcons
            name={'plus-circle'}
            size={iconSize}
            color={colorSchema.general.lightBlue}
            onPress={() => {
              setCount(count + increment);
            }}
          />
        </ButtonsContainer>
      </InternalButtonContainer>
    </CounterMainContainer>
  );
};

export default Counter;

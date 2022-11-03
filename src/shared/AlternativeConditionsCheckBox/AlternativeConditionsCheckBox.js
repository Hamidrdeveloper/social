//React & React Native
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//React Native Elements
import {Text, CheckBox} from 'react-native-elements';

//Styled components
import {
  ComponentContainer,
  ConditionText,
} from './AlternativeConditionsCheckBox.styles';

//i18n
import Translation from '../../constants/i18n';

const AlternativeConditionsCheckBox = ({
  value,
  setValue,
  text,
  circleStyle = false,
}) => {
  return (
    <ComponentContainer>
      {circleStyle ? (
        <CheckBox
          checked={value}
          onPress={() => setValue(!value)}
          size={30}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
      ) : (
        <CheckBox checked={value} onPress={() => setValue(!value)} size={30} />
      )}
      <ConditionText>{text}</ConditionText>
    </ComponentContainer>
  );
};

export default AlternativeConditionsCheckBox;

//React & React Native
import React from 'react';
import {Text, View} from 'react-native';

//Libraries
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import colorSchema from '../../constants/colorSchema';

//Styles Component
import {ContainerView} from './RadioButton.styles';

const RadioButton = ({selected, onPress, label, style}) => {
  return (
    <ContainerView style={style}>
      <TouchableWithoutFeedback
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colorSchema.general.line.border,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        onPress={onPress}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: colorSchema.general.lightBlue,
            }}
            onPress={onPress}
          />
        ) : null}
      </TouchableWithoutFeedback>
      <Text
        style={{
          fontSize: widthPercentageToDP('5%'),
          marginLeft: widthPercentageToDP('2%'),
        }}
      >
        {label}
      </Text>
    </ContainerView>
  );
};

export default RadioButton;

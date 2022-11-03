import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContext} from '@react-navigation/native';
import {Back} from '../../../shared/Icons';

export const ButtonGoBack = () => {
  const navigation = useContext(NavigationContext);
  const widthIcons = 20;
  const heightIcons = 20;
  return (
    <TouchableOpacity onPress={() => navigation.pop()}>
      <View style={{marginLeft: 14}}>
        <Back width={widthIcons} height={heightIcons} />
      </View>
    </TouchableOpacity>
  );
};

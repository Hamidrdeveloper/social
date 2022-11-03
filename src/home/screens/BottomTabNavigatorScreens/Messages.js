//React & React Native
import React from 'react';
import {View, Text} from 'react-native';

//i18n
import Translation from '../../../constants/i18n';

const Messages = () => {
  return (
    <View>
      <Text>{Translation.t(`socialApp.ScreenTitles.Messages`)}</Text>
    </View>
  );
};

export default Messages;

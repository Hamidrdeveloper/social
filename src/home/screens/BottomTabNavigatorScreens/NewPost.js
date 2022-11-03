//React & React Native
import React from 'react';
import {View, Text} from 'react-native';

//i18n
import Translation from '../../../constants/i18n';

const NewPost = () => {
  return (
    <View>
      <Text>{Translation.t(`socialApp.ScreenTitles.NewPost`)}</Text>
    </View>
  );
};

export default NewPost;

//React & React Native
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';

//React Native Elements
import {Button} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';

const NewPostButton = ({title, onPress}) => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  return (
    <Button
      title={title}
      titleStyle={{fontFamily, fontWeight: 'bold'}}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#2975B5', '#53ADDB'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 0},
      }}
      style={{marginVertical: 20}}
      onPress={onPress}
    />
  );
};

export default NewPostButton;

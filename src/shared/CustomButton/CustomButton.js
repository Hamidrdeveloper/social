//React & React Native
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';

//React Native Elements
import {Button} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({
  title,
  onPress,
  style = {},
  fontColor = 'white',
  loading = false,
}) => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  return (
    <Button
      title={title}
      titleStyle={{fontFamily, fontWeight: 'bold', color: fontColor}}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#2975B5', '#53ADDB'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 0},
      }}
      containerStyle={[{marginTop: 10, width: `96%`}, style]}
      onPress={onPress}
      loading={loading}
    />
  );
};

export default CustomButton;

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

const CustomButton = ({title, onPress, style = {}}) => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  return (
    <Button
      title={title}
      titleStyle={{fontFamily, fontWeight: 'bold'}}
      type="outline"
      style={[{marginTop: 10, width: wp('75%'), marginLeft: wp('2.5%')}, style]}
      onPress={onPress}
    />
  );
};

export default CustomButton;

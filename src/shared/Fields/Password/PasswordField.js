//React & React Native
import React, {useState, useContext} from 'react';
import { View } from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

//React Native Elements
import {Input, Icon} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';

//i18n
import Translation from '../../../constants/i18n';

const PasswordField = ({
  setValue,
  value,
  setValidValue,
  needsValidation = true,
  label = Translation.t(`socialApp.Authentification.Password.label`),
}) => {
  const [showPassord, setShowPassord] = useState(false);

  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  const ShowHidePassword = ({showPassord, toggle}) => {
    return (
      <TouchableOpacity onPress={() => toggle(!showPassord)}>
        {showPassord ? (
          <Icon
            name="eye"
            type="font-awesome-5"
            color="black"
            size={15}
            style={{marginRight: 10}}
          />
        ) : (
          <Icon
            name="eye-slash"
            type="font-awesome-5"
            color="black"
            size={15}
            style={{marginRight: 10}}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Input
        label={label}
        labelStyle={{fontFamily}}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={!showPassord}
        onChangeText={password => {
          needsValidation ? setValidValue(password ? true : false) : null;
          setValue(password);
        }}
        onEndEditing={password => {
          needsValidation ? setValidValue(password ? true : false) : null;
          setValue(password.nativeEvent.text);
        }}
        rightIcon={
          <ShowHidePassword toggle={setShowPassord} showPassord={showPassord} />
        }
      />
      <Text style={{color: 'red'}}>
        {
          '  Your password must be 8 digits long\nand use !,@ or ... and uppercase letters'
        }
      </Text>
      <View style={{height:8}}/>
    </>
  );
};

export default PasswordField;

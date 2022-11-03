//React & React Native
import React, {useState, useContext} from 'react';

//React Native Elements
import {Input} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';

//Utils
import {EmailValidation} from '../../../utils';

//i18n
import Translation from '../../../constants/i18n';

const EmailField = ({setValue, setValidValue, value, validValue}) => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  const [showError, setShowError] = useState(false);

  const validateEmail = EmailValidation();

  const getInputStyle = val => {
    return val && !validValue && showError
      ? {borderColor: '#D0021B', color: '#D0021B', fontSize: 15, fontFamily}
      : {fontFamily};
  };

  const getErrorMessage = value => {
    return value && !validValue && showError
      ? Translation.t(`socialApp.Authentification.Email.errorMessage`)
      : null;
  };

  return (
    <Input
      label={Translation.t(`socialApp.Authentification.Email.label`)}
      textContentType="emailAddress"
      labelStyle={[getInputStyle(value)]}
      errorMessage={[getErrorMessage(value)]}
      errorStyle={[getInputStyle(value)]}
      inputContainerStyle={[getInputStyle(value)]}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={false}
      onChangeText={email => {
        setValue(email);
        setValidValue(validateEmail(value));
      }}
      onEndEditing={email => {
        setShowError(true);
        setValidValue(validateEmail(email.nativeEvent.text));
      }}
    />
  );
};

export default EmailField;

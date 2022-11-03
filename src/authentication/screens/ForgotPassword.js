//React % React Native
import React, {useState, useEffect, useContext} from 'react';
import {NavigationContext} from '@react-navigation/native';

//Context
import {Context as AuthContext} from '../../contexts/AuthContext';

//Component
import {EmailField, CustomButton, ErrorMessage} from '../../shared';

//Styled components
import {InfoMessage, ScrollableScreenContainer} from './Screens.styles';

//i18n
import Translation from '../../constants/i18n';

const ForgotPassword = () => {
  //Context usage
  const navigation = useContext(NavigationContext);
  const {state, recoverPassword, updateErrorMessage} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  //Deletes Previous error messages
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      updateErrorMessage({message: ''});
    });
    return unsubscribe;
  }, [navigation]);

  const handleOnPress = () => {
    isValidEmail
      ? recoverPassword({email})
      : updateErrorMessage({message: 'Enter a valid Email.'});
  };

  return (
    <ScrollableScreenContainer>
      <InfoMessage>
        {Translation.t(
          `socialApp.Authentification.ForgotPassword.explanationText`,
        )}
      </InfoMessage>
      <EmailField
        setValue={setEmail}
        setValidValue={setIsValidEmail}
        value={email}
        validValue={isValidEmail}
      />
      <ErrorMessage
        available={state.errorMessage}
        message={state.errorMessage}
      />
      <CustomButton
        title={Translation.t(
          `socialApp.Authentification.Button.forgotPassword`,
        )}
        onPress={handleOnPress}
      />
    </ScrollableScreenContainer>
  );
};

export default ForgotPassword;

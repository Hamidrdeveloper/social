//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

//Libraries
import {Button} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

//Components
import {PasswordField} from '../../../../shared';
import {Context as AuthContext} from '../../../../contexts/AuthContext';

//API
import Api from '../../../../api/authentication';

//Translation
import Translation from '../../../../constants/i18n';
import {
  Container,
  ContainerPasswordField,
  ErrorMessageText,
} from './PasswordScreen.styles';
import {NavigationContext} from '@react-navigation/native';

//Styles component

export const PasswordScreen = ({}) => {
  const {state, changePassword, signOut} = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigation = useContext(NavigationContext);
  const handleOnPress = async ({}) => {
    if (currentPassword.length && newPassword.length) {
      setShowError(false);
      const {error, data} = await new Api()
        .changePassword({
          oldPassword: currentPassword,
          newPassword: newPassword,
        })
        .then(res => {
          if (res) {
            signOut();
          } else {
            Toast.show({
              type: 'error',
              text1: Translation.t(
                'socialApp.Options.password.label.changePasswordError',
              ),
            });
          }
        });
      if (error) {
        Toast.show({
          type: 'error',
          text1: Translation.t(
            'socialApp.Options.password.label.changePasswordError',
          ),
          text2: data?.errorMessage,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: Translation.t('socialApp.Options.password.label.success'),
          text2: '',
        });
        //Navigate back to Options

        await navigation.navigate('User Account');
      }
    } else {
      setShowError(true);
    }
  };

  const handlerSetValue = (setPassword, password) => {
    setPassword(password);
  };

  return (
    <Container>
      <ContainerPasswordField>
        <PasswordField
          label={Translation.t(
            'socialApp.Options.password.label.currentPassword',
          )}
          value={currentPassword}
          setValue={password => {
            handlerSetValue(setCurrentPassword, password);
          }}
          needsValidation={false}
        />
        <PasswordField
          label={Translation.t('socialApp.Options.password.label.newPassword')}
          value={newPassword}
          setValue={password => {
            handlerSetValue(setNewPassword, password);
          }}
          needsValidation={false}
        />
      </ContainerPasswordField>
      <View>
        {showError && (
          <ErrorMessageText>
            {Translation.t('socialApp.Options.password.error')}
          </ErrorMessageText>
        )}
        <Button
          buttonStyle={{marginTop: hp('4%')}}
          title={Translation.t('socialApp.Options.password.button.title')}
          titleStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
          onPress={handleOnPress}
        />
      </View>
    </Container>
  );
};

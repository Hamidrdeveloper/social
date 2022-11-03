//React & React Native
import React, {useState, useContext} from 'react';

//Libraries
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

//Components
import {CustomButton, EmailField} from '../../../../shared';

//API
import * as API from '../../../../api/index';

//Translations
import Translation from '../../../../constants/i18n';

//Styles
import {
  EmailAndButtonView,
  ViewBotton,
  ViewContainer,
} from './EmailScreen.styles';

//Contexts
import {Context as AuthContext} from '../../../../contexts/AuthContext';
import {NavigationContext} from '@react-navigation/native';

export const EmailScreen = () => {
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const navigation = useContext(NavigationContext);
  const {updateUser} = useContext(AuthContext);

  const handleSubmit = async () => {
    if (emailIsValid) {
      const {error, data} = await API.Profile.changeEmail({
        email: email,
      });

      if (error) {
        Toast.show({
          type: 'error',
          text1: Translation.t(
            'socialApp.Options.email.label.changeEmailError',
          ),
          text2: data?.errorMessage,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: Translation.t(
            'socialApp.Options.email.label.changeEmailSuccess',
          ),
        });

        const {error, data} = await API.Profile.myProfile();

        if (!error) {
          updateUser(data.user);
        }

        //Navigate back to Options
        navigation.navigate('User Account');
      }
    }
  };

  return (
    <ViewContainer>
      <EmailAndButtonView>
        <EmailField
          value={email}
          setValue={setEmail}
          setValidValue={setEmailIsValid}
          validValue={emailIsValid}
        />
        <ViewBotton>
          <CustomButton
            style={{width: wp('90%')}}
            title={Translation.t('socialApp.UserAccount.save')}
            onPress={handleSubmit}
          />
        </ViewBotton>
      </EmailAndButtonView>
    </ViewContainer>
  );
};

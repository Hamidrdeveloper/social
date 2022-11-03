//React & React Native
import React, {useState, useContext, useEffect} from 'react';

//Libraries
import Toast from 'react-native-toast-message';

//Components
import {CustomButton} from '../../../../shared';

//API
import * as API from '../../../../api/index';

//Translations
import Translation from '../../../../constants/i18n';

//React Native Elements
import {Input} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';
import {Context as AuthContext} from '../../../../contexts/AuthContext';

//Styles
import {
  PhoneNumberAndButtonView,
  ViewBotton,
  ViewContainer,
} from './PhoneNumberScreen.styles';

import {NavigationContext} from '@react-navigation/native';

export const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useContext(NavigationContext);
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;
  const {updateUser} = useContext(AuthContext);
  const handleSubmit = async () => {
    let phone = phoneNumber.substring(0, 1).replace('0', '+');
    let phone2 = phoneNumber.substring(1, phoneNumber.length);
  
    if (phoneNumber.length > 10) {
      
      const {error, data} = await API.Profile.changePhone({
        phone: phone + phone2,
      });
  
    if (error) {
      Toast.show({
        type: 'error',
        text1: Translation.t(
          'socialApp.Options.phoneNumber.label.changePhoneNumberError',
        ),
        text2: data?.errorMessage,
      });
    } else {
      Toast.show({
        type: 'success',
        text1: Translation.t(
          'socialApp.Options.phoneNumber.label.changePhoneNumberSuccess',
        ),
      });

      const {error, data} = await API.Profile.myProfile();
      console.log('Profile', data);

      updateUser(data.user);

      //Navigate back to Options
      navigation.navigate('User Account');
    }
  }
  };

  return (
    <ViewContainer>
      <PhoneNumberAndButtonView>
        <Input
          label={Translation.t('socialApp.Options.phoneNumber.label.label')}
          textContentType="telephoneNumber"
          inputContainerStyle={{fontFamily}}
          placeholder={Translation.t('socialApp.UserAccount.phone')}
          value={phoneNumber}
          autoCorrect={false}
          secureTextEntry={false}
          onChangeText={setPhoneNumber}
        />
        <ViewBotton>
          <CustomButton
            title={Translation.t('socialApp.UserAccount.save')}
            onPress={handleSubmit}
          />
        </ViewBotton>
      </PhoneNumberAndButtonView>
    </ViewContainer>
  );
};

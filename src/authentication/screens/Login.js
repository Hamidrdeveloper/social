//React & React Native
import React, {useEffect, useContext, useState} from 'react';

//React Native Elements
import {SocialIcon} from 'react-native-elements';

//Context
import {Context as AuthContext} from '../../contexts/AuthContext';
import {NavigationContext} from '@react-navigation/native';

//components
import {LoginForm} from '../components';

//Library
import axios from 'axios';
import Toast from 'react-native-toast-message';

//Styled components
import {
  SocialIconContainer,
  SocialIconTitleContainer,
  ScrollableScreenContainer,
  IconsTitleLines,
  IconsTitle,
} from './Screens.styles';

//i18n
import Translation from '../../constants/i18n';
import {apiResponseWrapper} from '../../utils/Api/Api.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Profile} from '../../api';
import {BACKEND_URL} from '../../constants/constants';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
const App = () => {
  //Context usage
  const [loading, setLoading] = useState(false);
  const {state, dispatch, updateErrorMessage} = useContext(AuthContext);
  const navigation = useContext(NavigationContext);

  //Deletes error messages when leaving the screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      updateErrorMessage({message: ''});
    });
    return unsubscribe;
  }, [navigation]);

  const login = async ({username, password,fbId}) => {
    setLoading(true);
    const body = {
      username,
      password,
      fbId,
    };
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, body, {
        header: {},
      });
      
      let {error, data} = apiResponseWrapper(response);
      setLoading(false);
      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${data?.errorMessage}`,
        });
      } else {
        await AsyncStorage.setItem('refreshToken', data.refresh_token);
        await AsyncStorage.setItem('token', data.access_token);
        dispatch({type: 'LOG_IN', payload: data.access_token});
        let {error, data: myProfileData} = await Profile.myProfile();
        if (!error) {
          data = myProfileData;
        }
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        dispatch({type: 'SET_USER', user: data.user});
      }
    } catch (e) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${e}`,
      });
    }
    setLoading(false);
  };

  return (
    <ScrollableScreenContainer showsVerticalScrollIndicator={false}>
       <StatusBar
        hidden={true} />
      <LoginForm
        onSubmit={login}
        onNotValidSubmit={updateErrorMessage}
        errorMessage={state.errorMessage}
        loading={loading}
      />
     
      {/* <SocialIconTitleContainer>
        <IconsTitleLines>____</IconsTitleLines>
        <IconsTitle>
          {Translation.t(`socialApp.Authentification.SocialLogin.title`)}
        </IconsTitle>
        <IconsTitleLines>____</IconsTitleLines>
      </SocialIconTitleContainer>

      <SocialIconContainer>
        <SocialIcon raised={false} type="facebook" />
        <SocialIcon raised={false} type="google" />
        <SocialIcon raised={false} type="twitter" />
      </SocialIconContainer> */}
    </ScrollableScreenContainer>
  );
};

export default App;

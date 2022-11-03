//React & React Native
import React, {useEffect, useContext, useState} from 'react';

//Context
import {Context as AuthContext} from '../../contexts/AuthContext';
import {NavigationContext} from '@react-navigation/native';

//Libraries
import axios from 'axios';
import Toast from 'react-native-toast-message';

//components
import {RegisterForm} from '../components';

//Styled components
import {ScrollableScreenContainer} from './Screens.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiResponseWrapper} from '../../utils/Api/Api.utils';
import {Profile} from '../../api';
import {BACKEND_URL} from '../../constants/constants';

const App = () => {
  const [loading, setLoading] = useState(false);
  //Context usage
  const {state, updateErrorMessage, dispatch} = useContext(AuthContext);
  const navigation = useContext(NavigationContext);

  //Deletes Previous error messages
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      updateErrorMessage({message: ''});
    });
    return unsubscribe;
  }, [navigation]);

  const register = async ({username, email, password, birthdate, fbId}) => {
    console.log('e');
    setLoading(true);
    let data = new Date(birthdate).getTime() / 1000;
    const body = {
      username,
      email,
      password,
      birthdate: data,
      fullname: username,
      fbId: fbId,
    };
    console.log(body);
    try {
      console.log('try');
      const response = await axios.post(`${BACKEND_URL}/user/register`, body);
      let {error, data} = apiResponseWrapper(response);
      setLoading(false);
      if (error) {
        dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: data?.errorMessage});
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
      console.log('catch', e);
      console.log(e);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${e}`,
      });
    }
  };

  return (
    <ScrollableScreenContainer showsVerticalScrollIndicator={false}>
      <RegisterForm
        onSubmit={register}
        onNotValidSubmit={updateErrorMessage}
        errorMessage={state.errorMessage}
        loading={loading}
      />
    </ScrollableScreenContainer>
  );
};

export default App;

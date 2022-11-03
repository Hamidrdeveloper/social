//React & React Native
import React, {createContext, useEffect, useReducer} from 'react';

//Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import Toast from 'react-native-toast-message';

//API
import Api from '../api/authentication';
import {Profile} from '../api/index';
import {myProfile} from '../api/profile';
import {GoogleSignin} from 'react-native-google-signin';

const initialState = {};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, token: action.payload};

    case 'REGISTER':
      return {...state, token: action.payload};

    case 'RECOVER_PASSWORD':
      return {...state, token: action.payload};

    case 'SIGN_OUT':
      return {...state, token: action.payload};

    case 'UPDATE_ERROR_MESSAGE':
      return {...state, errorMessage: action.payload};

    case 'SET_USER':
      return {...state, user: action.user};

    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      let user = JSON.parse(value);
      console.log('AsyncStorage', user);

      dispatch({type: 'SET_USER', user});
    });
  }, []);

  //Functions
  const login = async ({username, password}) => {
    console.tron.log('\nTrying to login\n');
    clearErrorMessage();
    //Make API Call
    let {error, data} = await new Api().apiLogin({username, password});
    if (error) {
      console.log('\nLogin failed.\n');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: data?.errorMessage,
      });
      dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: data?.errorMessage});
    } else {
      await AsyncStorage.setItem('refreshToken', data.refresh_token);
      await AsyncStorage.setItem('token', data.access_token);
      dispatch({type: 'LOG_IN', payload: data.access_token});
      const {error, data: myProfileData} = await Profile.myProfile();
      if (!error) {
        data = myProfileData;
      }
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      dispatch({type: 'SET_USER', user: data.user});
      //navigation to Home Screen
    }

    console.log('\nLogin successful\n');
  };

  const updateUser = async user => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    dispatch({type: 'SET_USER', user: user});
  };

  const register = async ({email, password, username, birthdate}) => {
    console.log('\nAttempting register.\n');

    clearErrorMessage();
    const {error, data} = await new Api().register({
      username,
      email,
      password,
      birthdate,
    });
    if (error) {
      dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: data?.errorMessage});
      console.tron.log('Register failed.\n');
    } else {
      await AsyncStorage.setItem('refreshToken', data.refresh_token);
      await AsyncStorage.setItem('token', data.access_token);
      dispatch({type: 'REGISTER', payload: data.access_token});
      console.tron.log('Register successful');
    }
  };

  const recoverPassword = async ({email}) => {
    try {
      if (email == 'error@email.com') {
        throw new Error('Email not valid.');
      }
      const token = null;
      dispatch({type: 'RECOVER_PASSWORD', payload: token});
      clearErrorMessage();
      console.log('Recover Password succesfull.\n');
    } catch (error) {
      dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
    try {
      await AsyncStorage.clear();
      dispatch({type: 'SIGN_OUT', payload: null});
    } catch (error) {
      console.error(error);
    }
  };

  const localLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      dispatch({type: 'LOG_IN', payload: token});
    }
  };

  const updateErrorMessage = ({message}) => {
    dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: message});
  };

  const clearErrorMessage = () => {
    dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: ''});
  };

  return (
    <Context.Provider
      value={{
        state,
        login,
        register,
        signOut,
        recoverPassword,
        localLogin,
        updateErrorMessage,
        clearErrorMessage,
        updateUser,
        dispatch,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export {Context, Provider};

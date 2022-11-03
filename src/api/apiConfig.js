//Libraries
import axios from 'axios';

//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Utils
import {configAuthorization} from '../utils/Api/Api.utils';

//Constants
import {BACKEND_URL} from '../constants/constants';

const instance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

instance.interceptors.request.use(
  async config => {
    config.headers.Authorization = await configAuthorization();
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('error axios instance', error);
    const originalRequest = error.config;

    //If the refreshToken request was unsuccessful, then it stop trying to obtain the refreshToken
    if (
      error.response.status === 401 &&
      originalRequest.url === `${BACKEND_URL}/user/refreshToken`
    ) {
      return Promise.reject(error);
    }

    //Try obtain a new token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      return instance
        .post('/user/refreshToken', {
          token: refreshToken,
        })
        .then(async res => {
          if (res.status === 201) {
            await AsyncStorage.setItem('token', res.data?.accessToken);
            await AsyncStorage.setItem('refreshToken', res.data?.refreshToken);
            instance.defaults.headers.common['Authorization'] =
              configAuthorization();
            return instance(originalRequest);
          }
        });
    }
    return error.response;
  },
);

export default instance;

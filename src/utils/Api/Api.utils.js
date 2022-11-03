//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiResponseWrapper = response => {
  let error = false;
  let data = {};
  if (response?.status.toString()[0] === '2') {
    data = response?.data;
  } else {
    error = true;
    data = {
      errorMessage: response?.data?.error,
      response: response?.data,
    };
  }
  return {error, data};
};

export const configAuthorization = async () => {
  const token = await AsyncStorage.getItem('token');
  console.log(token,token);
  return `Bearer ${token}`;
};

import AxiosInstance from './apiConfig';
import {apiResponseWrapper} from '../utils/Api/Api.utils';

import AsyncStorage from '@react-native-async-storage/async-storage';
import notifications from '../assets/notifications';

export const getNotifications = async (page, per_page) => {
  const response = await AxiosInstance.get(
    `/user/getNotifications/?page=${page}&per_page=${per_page}`,
  );
  return apiResponseWrapper(response);
};

export const saveNotificationSettings = async data => {
  const response = await AxiosInstance.post(
    '/user/saveNotificationSettings',
    data,
  );
  return apiResponseWrapper(response);
};

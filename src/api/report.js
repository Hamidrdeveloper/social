import {apiResponseWrapper} from '../utils/Api/Api.utils';
import AxiosInstance from './apiConfig';

export const profileReport = async username => {
  const userResponse = await AxiosInstance.get(
    `/user/search?username=${username}`,
  );
  const userId = userResponse.data.user.id;
  const url = `/user/report/${userId}`;
  const data = {reason_id: 1};
  const response = await AxiosInstance.post(url, data);
  return apiResponseWrapper(response);
};

export const searchReport = async searchId => {
  const url = `/searchRequest/report/${searchId}`;
  const data = {reason_id: 2};
  const response = await AxiosInstance.post(url, data);
  return apiResponseWrapper(response);
};

export const postReport = async postId => {
  const url = `/post/report/${postId}`;
  const data = {reason_id: 1};
  const response = await AxiosInstance.post(url, data);
  return apiResponseWrapper(response);
};

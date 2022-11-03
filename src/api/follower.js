import {apiResponseWrapper} from '../utils/Api/Api.utils';
import AxiosInstance from './apiConfig';

export const follow = async ({userId}) => {
  return AxiosInstance.post(`/user/follow/${userId}`).then(res => {
    console.log(res);
    return res;
  });
};

export const myFollowRequest = async () => {
  //here I set a totalPage bigger than currentPage so that it loops at least once
  let totalPage = 2;
  let nextPage = 1;
  let followRequests = [];
  let error = false;
  let followersData = {};

  for (let currentPage = 1; currentPage < totalPage; currentPage++) {
    const response = await AxiosInstance.get(
      `/user/myFollowRequests?per_page=32&page=${nextPage}`,
    );
    const {error: _error, data} = apiResponseWrapper(response);
    if (_error) {
      //I set this to stop the loop
      totalPage = 0;
      currentPage = 1;
      error = true;
      followersData = data;
    } else {
      totalPage = data?.total_page;
      currentPage = data?.current_page;
      followRequests = followRequests.concat(data?.follow_requests);
    }
    nextPage = currentPage + 1;
  }

  if (!error) {
    followersData = followRequests;
  }

  return {error, data: followersData};
};

export const acceptFollower = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/acceptFollower/${userId}`);
  return apiResponseWrapper(response);
};

export const removeFollower = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/removeFollower/${userId}`);
  return apiResponseWrapper(response);
};

export const unFollow = async ({userId}) => {
  return AxiosInstance.post(`/user/unFollow/${userId}`).then(res => {
    return res;
  });
};

export const myFollowing = async ({perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/myFollowing?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

export const myFollowers = async ({perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/myFollowers?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

export const getFollowing = async ({userId, perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/getFollowing/${userId}?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

export const getFollowers = async ({userId, perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/getFollowers/${userId}?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

import AxiosInstance from './apiConfig';

import {EVENTS_DATA} from '../assets/searches/events';
import {HASHTAG_SEARCH} from '../assets/searches/hashtags';
import {USER_DATA} from '../assets/users';
import {POST_DATA} from '../assets/posts';
import {apiResponseWrapper} from '../utils/Api/Api.utils';

export const searchEventsTwo = keyword => {
  return EVENTS_DATA;
};

export const searchEvents = async (keyword, params, isFilter) => {
  let parm = {};
  let obj = params;
  if (isFilter) {
    Object.keys(params).forEach(key => {
      if (params[key] === null) {
        delete params[key];
      }
    });
    parm = obj;
  }
  const response = await AxiosInstance.get(
    `searchRequest/search?keyword=${keyword}&per_page=32&page=1`,
    {params: parm},
  );
  const {error, data} = apiResponseWrapper(response);
  if (error) {
    return {error};
  }

  let array = [];
  if (data.ok) {
    array = data.search_requests.filter(x => {
      if (x?.user?.is_public == true) {
        return x;
      } else {
        if (
          x?.user?.follows_you.accepted == true &&
          x?.user?.follows_you.check == true
        ) {
          return x;
        }
      }
    });
  }

  return {search_requests: array};
};

export const searchPosts = async keyword => {
  const response = await AxiosInstance.get(
    `post/search?keyword=${keyword}&per_page=32&page=1`,
  );
  const {error, data} = apiResponseWrapper(response);
  if (error) {
    return {error, data};
  }
  let array = [];
  if (data) {
    array = data.posts.filter(x => {
      if (x?.user?.is_public == true) {
        return x;
      } else {
        if (
          x?.user?.follows_you.accepted == true &&
          x?.user?.follows_you.check == true
        ) {
          return x;
        }
      }
    });
  }
  return {posts: array};
};

export const searchUsers = async keyword => {
  const response = await AxiosInstance.get(
    `user/search?keyword=${keyword}&per_page=32&page=1`,
  );
  const {error, data} = apiResponseWrapper(response);
  if (error) {
    return {error, data};
  }
  return data;
};

export const searchHashtag = async keyword => {
  const response = await AxiosInstance.get(
    `post/search?tag=${keyword}&per_page=32&page=1`,
  );
  const {error, data} = apiResponseWrapper(response);
  if (error) {
    return {error, data};
  }
  let array = [];
  if (data) {
    array = data.posts.filter(x => {
      if (x?.user?.is_public == true) {
        return x;
      } else {
        if (
          x?.user?.follows_you.accepted == true &&
          x?.user?.follows_you.check == true
        ) {
          return x;
        }
      }
    });
  }
  return {posts: array};
};
export const deleteSearch = async keyword => {
  const response = await AxiosInstance.post(`/searchRequest/delete/${keyword}`);
  const {error, data} = apiResponseWrapper(response);
  if (error) {
    return {error, data};
  }
  return data;
};

//Axios
import AxiosInstance from './apiConfig';

//Utils
import {apiResponseWrapper, configAuthorization} from '../utils/Api/Api.utils';
import { log } from 'react-native-reanimated';

export const createSearchRequest = ({
  title,
  content,
  status,
  category_id = 1,
  required_people = 1,
  folder_id = null,
  mentioned_users,
  imageUri,
  publication_date,
  search_request_price,
  is_virtual,
  search_request_at,
  options,
}) => {
  //Search Request data
  const SearchRequestData = {
    title,
    content,
    category_id,
    required_people,
    folder_id,
    mentioned_users,
    publication_date,
    search_request_at,
    is_virtual,
    search_request_price,
    options,
  };

  //Create Search Request
  return AxiosInstance.post('/searchRequest/submit', SearchRequestData)
    .then(res => {
      console.log('/searchRequest/submit', res.data);
      const imageData = new FormData();
      imageUri.forEach((element, index) => {
        console.log('image/jpg',element);
        imageData.append('file', {
          uri: element?.uri,
          type: 'image/jpg',
          name: element?.uri,
        });
      });

      //Add photo to Post
      if (imageUri != null) {
        return AxiosInstance.post(
          `/searchRequest/uploadMedia/${res.data?.id}`,
          imageData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `${configAuthorization()}`,
            },
          },
        )
          .then(res => {
            console.log('/searchRequest/uploadMedia', res);
            return true;
          })
          .catch(() => {
            return false;
          });
      } else {
        return true;
      }
    })
    .catch(() => {
      return false;
    });
};

export const getSearchRequest = async ({userId}) => {
  //here I set a totalPage bigger than currentPage so that it loops at least once
  let totalPage = 2;
  let nextPage = 1;
  let searchRequests = [];
  let error = false;
  let searchRequestData = {};

  for (let currentPage = 1; currentPage < totalPage; currentPage++) {
    const response = await AxiosInstance.get(
      `/searchRequest/search?user_id=${userId}&per_page=32&page=${nextPage}`,
    );
    const {error, data} = apiResponseWrapper(response);
    if (error) {
      //I set this to stop the loop
      totalPage = 0;
      currentPage = 1;
      error = true;
      searchRequestData = data;
    } else {
      totalPage = data?.total_page;
      currentPage = data?.current_page;
      searchRequests = searchRequests.concat(data?.search_requests);
    }
    nextPage = currentPage + 1;
  }

  if (!error) {
    searchRequestData = searchRequests;
  }

  let array = [];
  if (searchRequestData) {
    array = searchRequestData.filter(x => {
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
  return {error, data: array};
};

export const getSearchRequestById = async ({searchRequestId}) => {
  const response = await AxiosInstance.get(
    `/searchRequest/search?id=${searchRequestId}`,
  );
  return apiResponseWrapper(response);
};

export const like = async ({searchRequestId}) => {
  const response = await AxiosInstance.post(
    `/searchRequest/like/${searchRequestId}`,
  );
  return apiResponseWrapper(response);
};

export const dislike = async ({searchRequestId}) => {
  const response = await AxiosInstance.post(
    `/searchRequest/dislike/${searchRequestId}`,
  );
  return apiResponseWrapper(response);
};

export const deleteSearchRequest = async searchRequestId => {
  const response = await AxiosInstance.post(
    `/searchRequest/delete/${searchRequestId}`,
  );
  return apiResponseWrapper(response);
};

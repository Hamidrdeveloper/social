import AxiosInstance from './apiConfig';
import {apiResponseWrapper, configAuthorization} from '../utils/Api/Api.utils';

export const createPost = async ({
  title,
  content,
  status,
  mentioned_users,
  imageUri,
  publication_date,
  options,
}) => {
  //Post data
  const postData = {
    title,
    content,
    status,
    mentioned_users,
    publication_date,
    options,
  };

  //Create Post
  return await AxiosInstance.post('/post/submit', postData)
    .then(res => {
      console.log('/post/submit', res);
      const imageData = new FormData();
      imageUri.forEach((element, index) => {
        imageData.append('file', {
          uri: element.uri,
          type: 'image/jpg', 
          name: element.uri,
        });
      });

      //Add photo to Post
      if (imageData == null) {
        return true;
      } else {
        return AxiosInstance.post(
          `/post/uploadMedia/${res.data?.id}`,
          imageData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `${configAuthorization()}`,
            },
          },
        )
          .then(res => {
            console.log('/post/submit', res);
            return true;
          })
          .catch(() => {
            return false;
          });
      }
    })
    .catch(() => {
      return false;
    });

  //Image Data
};

export const getPostByUserId = async ({userId}) => {
  //here I set a totalPage bigger than currentPage so that it loops at least once
  let totalPage = 2;
  let nextPage = 1;
  let posts = [];
  let error = false;
  let postsData = {};

  for (let currentPage = 1; currentPage < totalPage; currentPage++) {
    const response = await AxiosInstance.get(
      `/post/search?user_id=${userId}&per_page=${32}&page=${nextPage}`,
    );
    const {error: _error, data} = apiResponseWrapper(response);
    if (_error) {
      //I set this to stop the loop
      totalPage = 0;
      currentPage = 1;
      error = true;
      postsData = data;
    } else {
      totalPage = data?.total_page;
      currentPage = data?.current_page;
      posts = posts.concat(data?.posts);
    }
    nextPage = currentPage + 1;
  }

  if (!error) {
    postsData = posts;
  }

  return {error, data: postsData};
};

export const deletePost = async ({postId}) => {
  const response = await AxiosInstance.post(`/post/delete/${postId}`);
  return apiResponseWrapper(response);
};
export const getNotifications =  ({postId}) => {
  return AxiosInstance.post(`user/getNotifications`).then(res=>{
    return res.data;
  });
 
};
export const like = async ({postId}) => {
  const response = await AxiosInstance.post(`/post/like/${postId}`).catch(
    err => {
      console.log('err', err.message);
    },
  );
  return apiResponseWrapper(response);
};

export const dislike = async ({postId}) => {
  const response = await AxiosInstance.post(`/post/dislike/${postId}`).catch(
    err => {
      console.log('err', err.message);
    },
  );
  return apiResponseWrapper(response);
};
export const full = async () => {
  return AxiosInstance.get('/feed/get?per_page=32&page=1').then(
    res => {
      // let array = [];
      // if (res.data.posts) {
      //   array = res.data.posts.reverse().filter(x => {
      //     if (x?.user?.is_public == true) {
      //       return x;
      //     } else {
      //       if (
      //         x?.user?.follows_you.accepted == true &&
      //         x?.user?.follows_you.check == true
      //       ) {
      //         return x;
      //       }
      //     }
      //   });
      // }
      return res?.data?.items;
    },
  );
};

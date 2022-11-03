import {apiResponseWrapper} from '../utils/Api/Api.utils';
import AxiosInstance from './apiConfig';

export const Comment = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/Comment/${userId}`);
  return apiResponseWrapper(response);
};

export const myCommentRequest = async () => {
  //here I set a totalPage bigger than currentPage so that it loops at least once
  let totalPage = 2;
  let nextPage = 1;
  let CommentRequests = [];
  let error = false;
  let CommentersData = {};

  for (let currentPage = 1; currentPage < totalPage; currentPage++) {
    const response = await AxiosInstance.get(
      `/user/myCommentRequests?per_page=32&page=${nextPage}`,
    );
    const {error: _error, data} = apiResponseWrapper(response);
    if (_error) {
      //I set this to stop the loop
      totalPage = 0;
      currentPage = 1;
      error = true;
      CommentersData = data;
    } else {
      totalPage = data?.total_page;
      currentPage = data?.current_page;
      CommentRequests = CommentRequests.concat(data?.Comment_requests);
    }
    nextPage = currentPage + 1;
  }

  if (!error) {
    CommentersData = CommentRequests;
  }

  return {error, data: CommentersData};
};

export const acceptCommenter = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/acceptCommenter/${userId}`);
  return apiResponseWrapper(response);
};

export const removeCommenter = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/removeCommenter/${userId}`);
  return apiResponseWrapper(response);
};

export const unComment = async ({userId}) => {
  const response = await AxiosInstance.post(`/user/unComment/${userId}`);
  return apiResponseWrapper(response);
};

export const myCommenting = async ({perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/myCommenting?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

export const myCommenters = async ({perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/myCommenters?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};
export const createCommenters = async (id, newComment) => {
  var data = JSON.stringify({
    content: newComment,
  });
 
  return AxiosInstance.post(`/comment/submit/${id}?`, data).then(res => {
    console.log('createCommenters', res);
    return res.data.comments;
  });
};
export const createCommentersReply = async (id, newComment) => {
  var data = JSON.stringify({
    content: newComment,
  });
 
  return AxiosInstance.post(`/comment/reply/${id}?`, data).then(res => {
    console.log('createCommenters', res);
    return res.data.comments;
  });
};

export const getCommenting = async ({userId, perPage = 32, page}) => {
  const response = await AxiosInstance.get(
    `user/getCommenting/${userId}?per_page=${perPage}&page=${page}`,
  );
  return apiResponseWrapper(response);
};

export const getCommenters = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getComments/${userId}?per_page=${perPage}&page=${page}`,
  ).then(res => {
    return res.data.comments;
  });
};
export const getCommentersUPV = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getComments/${userId}?per_page=${perPage}&page=${page}&sort_by=up_votes&sort_dir=desc`,
  ).then(res => {
    return res.data.comments;
  });
};
export const getCommentersDownV = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getComments/${userId}?per_page=${perPage}&page=${page}&sort_by=up_votes&sort_dir=asc`,
  ).then(res => {
    return res.data.comments;
  });
};
export const getCommentersUPD = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getComments/${userId}?per_page=${perPage}&page=${page}&sort_dir=desc&sort_by=comments_created_at`,
  ).then(res => {
    return res.data.comments;
  });
};
export const getCommentersDownD = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getComments/${userId}?per_page=${perPage}&page=${page}&sort_dir=asc&sort_by=comments_created_at`,
  ).then(res => {
    return res.data.comments;
  });
};
export const downApiComment = async id => {
  return AxiosInstance.post(`comment/vote/down/${id}`).then(res => {
    console.log(res);
    return res.data.comment;
  });
};
export const upApiComment = async id => {
  return AxiosInstance.post(`comment/vote/up/${id}`).then(res => {
    console.log(res);
    return res.data.comment;
  });
};
export const deleteApiComment = async id => {
  return AxiosInstance.post(`comment/delete/${id}`).then(res => {
    console.log(res);
    return res.data.comment;
  });
};
export const deleteVoteApi = async id => {
  return AxiosInstance.post(`comment/deleteVote/${id}`).then(res => {
    console.log(res);
    return res.data.comment;
  });
};

export const getCommentersReplay = async (userId, perPage = 100, page = 1) => {
  return AxiosInstance.get(
    `comment/getReplies/${userId}?per_page=${perPage}&page=${page}`,
  ).then(res => {
    return res.data.replies;
  });
};

import AxiosInstance from './apiConfig';
import {apiResponseWrapper, configAuthorization} from '../utils/Api/Api.utils';

export const createFolder = async ({
  title,
  parent_id,
  description,
  mentioned_users,
  imageUri,
}) => {
  //Folder data
  const FolderData = {
    title,
    parent_id,
    description,
  };
  console.log('/folder/add', FolderData);
  //Create Folder
  return AxiosInstance.post('/folder/add', FolderData).then(res => {
    console.log('/folder/add', res);
    return res;
  });

  // if (error) {
  //   return {error, data};
  // }

  // //Image Data
  // const imageData = new FormData();
  // imageData.append('file', {
  //   uri: imageUri,
  //   type: 'image/jpg',
  //   name: 'test',
  // });

  // //Add photo to Folder
  // const response = await AxiosInstance.Folder(
  //   `/Folder/uploadMedia/${data?.id}`,
  //   imageData,
  //   {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: `${await configAuthorization()}`,
  //     },
  //   },
  // );
  // return apiResponseWrapper(response);
};

export const getFolderByUserId = async ({userId}) => {
  //here I set a totalPage bigger than currentPage so that it loops at least once
  let totalPage = 2;
  let nextPage = 1;
  let Folders = [];
  let error = false;
  let FoldersData = {};

  for (let currentPage = 1; currentPage < totalPage; currentPage++) {
    const response = await AxiosInstance.get(
      `/Folder/search?user_id=${userId}&per_page=${32}&page=${nextPage}`,
    );
    const {error: _error, data} = apiResponseWrapper(response);
    if (_error) {
      //I set this to stop the loop
      totalPage = 0;
      currentPage = 1;
      error = true;
      FoldersData = data;
    } else {
      totalPage = data?.total_page;
      currentPage = data?.current_page;
      Folders = Folders.concat(data?.Folders);
    }
    nextPage = currentPage + 1;
  }

  if (!error) {
    FoldersData = Folders;
  }

  return {error, data: FoldersData};
};

export const deleteFolder = async ({FolderId}) => {
  const response = await AxiosInstance.Folder(`/Folder/delete/${FolderId}`);
  return apiResponseWrapper(response);
};

export const like = async ({FolderId}) => {
  const response = await AxiosInstance.Folder(`/Folder/like/${FolderId}`);
  return apiResponseWrapper(response);
};

export const dislike = async ({FolderId}) => {
  const response = await AxiosInstance.Folder(`/Folder/dislike/${FolderId}`);
  return apiResponseWrapper(response);
};
export const fullFolder = async () => {
  const response = await AxiosInstance.get(
    '/folder/getList?page=1&per_page=32',
  );
  return apiResponseWrapper(response);
};

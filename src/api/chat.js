import AxiosInstance from './apiConfig';
import SocketIO from 'react-native-socket-io-wrapper';
import {configAuthorization} from '../utils/Api/Api.utils';
import {IdChat} from '../home/screens/BottomTabNavigatorScreens/HomeFeed';

export const chatData = async () => {
  //Post data

  //Create Post
  return AxiosInstance.get('chat/get?page=1&per_page=32').then(res => {
    console.log('chat/get?page=1&per_page=32', res.data);
    return res.data.chats;
    //Add photo to Post
  });

  //Image Data
};
export const chatDataId = async (id: number) => {
  //Post data

  //Create Post
  return AxiosInstance.get(`chat/getChatMessages/${id}`).then(res => {
    console.log(`chat/get/${id}`, res.data);
    return res.data;
    //Add photo to Post
  });

  //Image Data
};
export const chatDataIdUploadDocument = (imageUri, id, onClick) => {
  //Post data
  const imageData = new FormData();
  imageData.append('file', {
    uri: imageUri.uri,
    type: 'image/jpg',
    name: imageUri.uri,
  });
  imageData.append('chat_id', IdChat.chatId);

  //Create Post
  return AxiosInstance.post(`chat/uploadDocument`, imageData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${configAuthorization()}`,
    },
  }).then(res => {
    console.log(`chat/uploadDocument`, res.data);
    onClick(res.data.document.id);
    return res.data;
    //Add photo to Post
  });

  //Image Data
};
export const socketIO = new SocketIO('https://78.47.211.241');

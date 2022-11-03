//React
import React, {createContext, useState} from 'react';
import {useEffect} from 'react';
import {chatData, chatDataId} from '../api/chat';
import io from 'socket.io-client';
import {configAuthorization} from '../utils/Api/Api.utils';
import {AsyncStorage} from 'react-native';
import {IdChat} from '../home/screens/BottomTabNavigatorScreens/HomeFeed';

const initialState = {
  chatList: [
    {
      profileImage: 1,
      nickname: 'johnwilson',
      message:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      messageDate: new Date('Janary 27, 2022 11:13:00'),
    },
    {
      profileImage: 2,
      nickname: 'benjamin34',
      message:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      messageDate: new Date('Janary 27, 2022 11:13:00'),
    },
    {
      profileImage: 3,
      nickname: 'ferfarandato',
      message:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      messageDate: new Date('Janary 27, 2022 11:13:00'),
    },
    {
      profileImage: 3,
      nickname: 'fedeFerreyra',
      message:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      messageDate: new Date('Janary 27, 2022 11:13:00'),
    },
  ],
  searchChat: '',
  currentChat: {
    nickname: '',
  },
};
const ChatContext = createContext(initialState);

const ChatProvider = ({children}) => {
  const [chatList, setChatList] = useState([]);
  const [chatListId, setChatListId] = useState([]);
  const [selectId, setSelectId] = useState(0);
  const [userId, setUserId] = useState();

  const [searchChat, setSearchChat] = useState(initialState.searchChat);
  const [currentChat, setCurrentChat] = useState(initialState.currentChat);
  const connection_url = 'http://78.47.211.241'; // process.env.REACT_APP_SOCKET_API;
  useEffect(() => {
    if (IdChat.chatId == '' && IdChat.idUser != '' && chatList.length > 0) {
      IdChat.chatId = chatList[0].id;
      reGetChatId();
      setSelectId(chatList[0].id);
    }
  }, [chatList]);
  useEffect(() => {
    const socket = io(connection_url, {
      extraHeaders: {
        Authorization: configAuthorization(),
      },
    });
    socket.connect();

    socket.on('disconnect', () => {
      socket.connect();
      console.log('disconnect', socket.id); // "G5p5..."
    });
    socket.on('connect', () => {
      console.log('connect', socket.id); // "G5p5...

      console.log('connect', socket.connected); // undefined
    });
    socket.on('connection', () => {
      socket.emit('message', 'world');
    });
    socket.io.on('reconnect', attempt => {
      console.log('reconnect', socket.id); // "G5p5..."
    });
    socket.io.on('error', error => {
      console.log('error', error); // "G5p5..."
    });
    socket.on('message', function (message) {
      console.log('message', 'message');
      console.log('message', message);
    });
  }, []);
  const sendMessageImage = idFile => {
    const token = AsyncStorage.getItem('token').then(res => {
      console.log('token', res);
      const socket = io(connection_url, {
        extraHeaders: {
          Authorization: `Bearer ${res}`,
        },
      });
      socket.disconnect();
      socket.connect();

      socket.on('connect', () => {
        console.log('connect', socket.id); // "G5p5...
        const message = {
          chat_id: null,
          user_id: IdChat.idUser,
          type: 'document',
          document_id: idFile,
        };
        socket.emit('message', message, response => {
          console.log(response.status); // ok
        });
        IdChat.chatId = 0;
        setTimeout(() => {
          getChat();
          
          chatList.forEach(res => {
         
            if (
              res?.user_ids[0] == IdChat.idUser ||
              res?.user_ids[1] == IdChat.idUser
            ) {
              IdChat.chatId = res.id;
            }
          });
        }, 1000);
        console.log('connect', socket.connected); // undefined
        setTimeout(() => {
    
          if (IdChat.chatId == 0) {
            getChat();
          } else {
            reGetChatId();
          }
        }, 1000);

        // getChatId(selectId);
      });

      socket.io.on('reconnect', attempt => {
        console.log('reconnect', socket.id); // "G5p5..."
      });
      socket.io.on('error', error => {
        console.log('error', error); // "G5p5..."
      });
      socket.on('message', function (message) {
        console.log('message', 'message');
        console.log('message', message);
      });
    });
  };
  const getChat = () => {
    chatData().then(res => {
      setChatList(res);
    });
  };
  const sendMessage = me => {
    const token = AsyncStorage.getItem('token').then(res => {
      console.log('token', res);
      const socket = io(connection_url, {
        extraHeaders: {
          Authorization: `Bearer ${res}`,
        },
      });
      socket.disconnect();
      socket.connect();

      socket.on('connect', () => {
        console.log('connect', socket.id); // "G5p5...
        const message = {
          chat_id: null,
          user_id: userId,
          type: 'text',
          text: me[0].text,
        };
        socket.emit('message', message, response => {
          console.log(response.status); // ok
        });
        IdChat.chatId = 0;
        setTimeout(() => {
          getChat();
          chatList.forEach(res => {
            if (
              res?.user_ids[0] == IdChat.idUser ||
              res?.user_ids[1] == IdChat.idUser
            ) {
              IdChat.chatId = res.id;
            }
          });
        }, 1000);
        console.log('connect', socket.connected); // undefined
        setTimeout(() => {
   
          if (IdChat.chatId == 0) {
            getChat();
          } else {
            reGetChatId();
          }
        }, 1000);
        // getChatId(selectId);
      });

      socket.io.on('reconnect', attempt => {
        console.log('reconnect', socket.id); // "G5p5..."
      });
      socket.io.on('error', error => {
        console.log('error', error); // "G5p5..."
      });
      socket.on('message', function (message) {
        console.log('message', 'message');
        console.log('message', message);
      });
    });
  };
  const getChatId = (id, userId) => {
    chatDataId(id).then(res => {
      console.log('getChatId', res);
      let value = res?.messages?.map(e => {
        if (e.type == 'image') {
          return {
            _id: e?.chat_id,
            text: 'image',
            createdAt: new Date(e.updated_at),
            image: e?.document.file_url?.replace(/https/g, 'http'),
            user: {
              _id: e?.user_id,
              name: e?.user?.fullname,
              avatar: e?.user?.profile_pic?.replace(/https/g, 'http'),
            },
          };
        } else {
          return {
            _id: e?.chat_id,
            text: e?.content,
            createdAt: new Date(e.updated_at),
            user: {
              _id: e?.user_id,
              name: e?.user?.fullname,
              avatar: e?.user?.profile_pic?.replace(/https/g, 'http'),
            },
          };
        }
      });
      console.log('getChatId', value);
      setChatListId(value);
    });
  };
  const reGetChatId = () => {
    chatDataId(IdChat.chatId).then(res => {
      console.log('getChatId', res);
      let value = res?.messages?.map(e => {
        if (e.type == 'image') {
          return {
            _id: e?.chat_id,
            text: 'image',
            createdAt: new Date(e.updated_at),
            image: e?.document.file_url?.replace(/https/g, 'http'),
            user: {
              _id: e?.user_id,
              name: e?.user?.fullname,
              avatar: e?.user?.profile_pic?.replace(/https/g, 'http'),
            },
          };
        } else {
          return {
            _id: e?.chat_id,
            text: e?.content,
            createdAt: new Date(e.updated_at),
            user: {
              _id: e?.user_id,
              name: e?.user?.fullname,
              avatar: e?.user?.profile_pic?.replace(/https/g, 'http'),
            },
          };
        }
      });
      console.log('getChatId', value);
      setChatListId(value);
    });
  };
  const clearSearchChat = () => {
    setSearchChat('');
  };

  return (
    <ChatContext.Provider
      value={{
        chatList,
        setChatList,
        searchChat,
        setSearchChat,
        currentChat,
        getChat,
        setCurrentChat,
        clearSearchChat,
        chatListId,
        getChatId,
        selectId,
        sendMessage,
        setSelectId,
        setUserId,
        reGetChatId,
        sendMessageImage,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export {ChatContext, ChatProvider};

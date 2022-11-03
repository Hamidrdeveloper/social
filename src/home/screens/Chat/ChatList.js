//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Images
import {profileImages} from '../../../assets/Images/ProfileImages/Images';

//Context
import ChatPreview from './Components/ChatPreview';

//Context
import {ChatContext} from '../../../contexts/ChatContext';
import {Context as AuthContext} from '../../../contexts/AuthContext';

//Translation
import Translation from '../../../constants/i18n';

//Styles
const styles = StyleSheet.create({
  sectionTitle: {
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
//TODO Add a Plus Icon that shows opens the emoticon keyboard
const ChatList = () => {
  const {chatList, searchChat, clearSearchChat, getChat} =
    useContext(ChatContext);
  const {state} = useContext(AuthContext);

  const [chatListData, setChatListData] = useState([], () => {
    clearSearchChat();
  });
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    getChat();
  }, []);
  useEffect(() => {
    setChatListData(chatList);
  }, [chatList]);
  const renderChatPreview = () => {
    if (searchChat.length && !filter) {
      const newChatList = chatListData.filter(
        chat => chat.nickname === searchChat,
      );
      if (newChatList.length) {
        setChatListData(newChatList);
        setFilter(true);
      }
    } else if (searchChat.length === 0 && filter) {
      setChatListData(chatList);
      setFilter(false);
    }
    return chatList.map(chat => {
      console.log('chatListData', chat?.creator_user);
      return (
        <>
          {/* {filter && (
            <Text style={styles.sectionTitle}>
              {Translation.t('socialApp.Chat.chatList.user')}
            </Text>
          )} */}
          {chat?.creator_user.id != state.user.id ? 
            <ChatPreview
              profileImage={chat?.creator_user?.profile_pic}
              nickname={chat?.creator_user.fullname}
              message={chat?.creator_user.username}
              messageDate={''}
              id={chat?.id}
              created_at={chat?.created_at}
              userId={chat?.creator_user.id}
            />
           : 
            <ChatPreview
              profileImage={chat?.target_user?.profile_pic}
              nickname={chat?.target_user?.fullname}
              message={chat?.target_user?.username}
              messageDate={''}
              id={chat?.id}
              created_at={chat?.created_at}
              userId={chat?.target_user?.id}
            />
          }
          {/* {filter && (
            <Text style={styles.sectionTitle}>
              {Translation.t('socialApp.Chat.chatList.message')}
            </Text>
          )} */}
        </>
      );
    });
  };

  return <ScrollView>{renderChatPreview()}</ScrollView>;
};

export default ChatList;

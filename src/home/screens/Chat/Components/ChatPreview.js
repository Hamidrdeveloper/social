//React & React Native
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Context
import {ChatContext} from '../../../../contexts/ChatContext';

//Utils
import {diffDate} from '../../../../utils/DateFormatter/DateFormatter';

//Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: wp('5%'),
    paddingTop: wp('5%'),
  },
  informationMessage: {
    width: wp('68%'),
    marginLeft: wp('3%'),
  },
  nickname: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
  },
  message: {
    fontSize: wp('3.5%'),
  },
  timeContainer: {
    marginTop: hp('3%'),
  },
});
import firebase from '@react-native-firebase/app';
import PushNotification from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {
  Notifications,
  NotificationAction,
  NotificationCategory,
} from 'react-native-notifications';

import messaging from '@react-native-firebase/messaging';
import { IdChat } from '../../BottomTabNavigatorScreens/HomeFeed';

const ChatPreview = ({
  profileImage,
  nickname,
  message,
  id,
  created_at,
  userId,
  messageDate = new Date(),
}) => {
  const navigation = useNavigation();
  const [idUser, setIdUser] = useState(0);
  const [idChat, setIdChat] = useState(0);
  const {setCurrentChat, getChatId, setSelectId, setUserId, getChat} =
    useContext(ChatContext);
  // useEffect(() => {
  //   if (idUser != 0) {
  //     firebase.messaging().onMessage(response => {
  //       console.log('messaging', response.data.type);
  //       if (response.data.type == 'chat' && idChat != 0) {
  //         getChatId(idChat, idUser);
  //         getChat();
  //       }
  //     });
  //   }
  // }, [idUser]);
  const redirectToChat = () => {
    IdChat.chatId=id;
    IdChat.idUser=userId;
    setSelectId(id);
    setUserId(userId);
    getChatId(id, userId);
    setCurrentChat({nickname, avatar: profileImage});
    navigation.navigate('Chat');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => redirectToChat()}>
      <Avatar
        size={wp('13%')}
        rounded
        title="MD"
        source={
          profileImage
            ? {
                uri: profileImage?.replace(/https/g, 'http'),
              }
            : {uri: 'https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png'}
        }
      />
      <View style={styles.informationMessage}>
        <Text style={styles.nickname}>@{nickname}</Text>
        <Text style={styles.message}>{`${message?.substr(0, 82)}...`}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text>{diffDate(created_at)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatPreview;

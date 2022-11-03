//React & React Native
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';

import PostList from '../../components/PostList/PostList';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import firebase from '@react-native-firebase/app';
import PushNotification from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {
  Notifications,
  NotificationAction,
  NotificationCategory,
} from 'react-native-notifications';

import {socketIO} from '../../../api/chat';
import {useContext} from 'react';
import {ChatContext} from '../../../contexts/ChatContext';
import {Button, Input} from 'react-native-elements';
import {ContainerButtonSection} from '../CreateSearchRequest/Styles/CreateSearchRequestStepOne.styles';
export const IdChat = {
  idUser: 0,
  chatId: 0,
};
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';
import {Context as PostContext} from '../../../contexts/PostContext';
import {ViewBotton} from '../OptionScreen/ImageProfile/ImageProfileScreen.styles';
import {CustomButton} from '../../../shared';
import {sendCode, vCode} from '../../../api/profile';
import {Context as AuthContext} from '../../../contexts/AuthContext';
import {translations} from 'i18n-js';
import Toast from 'react-native-toast-message';

const HomeFeed = () => {
  const [showAlert, setShowAlert] = useState(false);
  const broadcastButton = useRef(null);
  const {selectId, getChat, reGetChatId} = useContext(ChatContext);
  const {loadPosts} = useContext(PostContext);
  const {state} = useContext(AuthContext);
  const [userVar, setUserVar] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    setTimeout(() => {
     
      if (state?.user?.email_is_verified) {
        setUserVar(false);
      } else {
        setUserVar(true);
      }
    }, 10000);
  }, [state]);
  const isFocused = useIsFocused();
  useEffect(() => {
    loadPosts();
  }, [isFocused]);
  useEffect(() => {
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground(
      (notification: Notification, completion) => {
        completion({alert: false, sound: false, badge: false});
      },
    );

    Notifications.events().registerNotificationOpened(
      (notification: Notification, completion) => {
        completion();
      },
    );
    Notifications.setNotificationChannel({
      channelId: 'my-channel',
      name: 'My Channel',
      groupId: 'my-group-id',
      groupName: 'my group name',
      importance: 5,
      description: 'My Description',
      enableLights: true,
      enableVibration: true,
      showBadge: true,
      soundFile: 'doorbell.mp3',
      vibrationPattern: [200, 1000, 500, 1000, 500],
    });

    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(x => console.log('=================================>', x))
      .catch(e => console.log('=================================>', e));
    console.log('messaging', 'notification');
    firebase.messaging().onMessage(response => {
      console.log('messaging', response.data.type);
      if (response.data.type == 'chat') {
        let pars = JSON.parse(response?.data?.message);
        reGetChatId();
        getChat();
        showNotificationChat(pars);
      } else {
        let pars = JSON.parse(response?.data?.notification);
        console.log('messagingstringify', pars?.meta_data[0].type);

        showNotification(pars);
      }
    });
  }, []);
  const showNotificationChat = notification => {
    console.log('messagingshowNotification', notification);

    Notifications.postLocalNotification({
      body: `You have received a message`,
      title: notification?.content,
      sound: 'chime.aiff',
      category: 'SOME_CATEGORY',
      link: 'localNotificationLink',
      android_channel_id: 'my-channel',
    });
  };
  const showNotification = notification => {
    console.log('messagingshowNotification', notification);
    if (notification?.meta_data[0].type === 'post_like') {
      Notifications.postLocalNotification({
        body: `Your post was liked by ${notification?.meta_data[0].text}`,
        title: 'Post Like',
        sound: 'chime.aiff',
        category: 'SOME_CATEGORY',
        link: 'localNotificationLink',
        android_channel_id: 'my-channel',
      });
    }
  };
  const sendCodeEmail = () => {
    sendCode().then(x => {
      if (x) {
        Toast.show({
          type: 'success',
          text1: 'Code sent successfully',
        });
      }
    });
  };
  const vCodeEmail = () => {
    vCode(code).then(x => {
      if (x) {
        Toast.show({
          type: 'success',
          text1: 'successfully',
        });
      }
    });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <PostList />
      </View>
      <Modal
        transparent
        visible={userVar}
        onRequestClose={() => setUserVar(false)}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: `100%`,
            height: `100%`,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#03000f',
              width: `100%`,
              height: 230,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <Text style={{color: '#ffff'}}>
              {'this username has no verified email associated with.'}
            </Text>
            <Input
              label="Code"
              multiline={false}
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={e => setCode(e)}
              style={{color: '#2975B5'}}
            />
            <TouchableOpacity
              onPress={() => {
                setUserVar(false)
                sendCodeEmail();
                
              }}>
              <Text style={{color: '#2975B5'}}>{'Send a Code'}</Text>
            </TouchableOpacity>
            <ViewBotton>
              <CustomButton title={'Send'} onPress={() => vCodeEmail()} />
            </ViewBotton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeFeed;

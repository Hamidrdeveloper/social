//React & React Native
import React, {useEffect, useContext} from 'react';

//React Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Types
const Stack = createStackNavigator();

//Contexts
import {Context as AuthContext} from '../contexts/AuthContext';

//Navigators Containers
import {AuthenticationNavigator, HomeNavigator} from './index';

//Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens
import {ForgotPassword} from '../authentication/screens';
import NotificationSettings from '../home/screens/Notifications/components/NotificationSettings';
import NavigationHeader from '../shared/NavigationHeader/NavigationHeader';
import ProfileNotificationsSettingsScreen from '../home/screens/Profile/ProfileNotificationsSettingsScreen';
import ExternalProfile from '../home/screens/Profile/ExternalProfile';
import Chat from '../home/screens/Chat/Components/Chat';
import ChatHead from '../home/screens/Chat/Components/ChatHead';
import SearchEventFilter from '../home/screens/SearchFilter/screen/EventFilter/EventFilter';
import SearchPostFilter from '../home/screens/SearchFilter/screen/PostFilter/PostFilter';
import FolderNavigators from '../home/screens/Folder/Navigators/FolderNavigators';
import PostScreen from '../home/screens/post/PostScreen';
import UserList from '../home/screens/Profile/Components/UserList/UserList';

//Colors
import colorSchema from '../constants/colorSchema';

//i18n
import Translation, {changeLanguage} from '../constants/i18n';
import {SearchRequestScreen} from '../home/screens';
import DoubleTapToClose, {
  ExecuteOnlyOnAndroid,
} from '../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';
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
const MainAppNavigator = () => {
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
   
  }, []);
  
  //Switch Stack Screens depending on User login state
  const {state, localLogin} = useContext(AuthContext);
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    requestUserPermission();
  }, []);
  useEffect(async () => {
    localLogin();
    await defaultLanguage();
  }, []);

  const defaultLanguage = async () => {
    const language = await AsyncStorage.getItem('language');
    await changeLanguage(language ? language : 'de');
  };

  return (
    <>
      <Stack.Navigator initialRouteName="Authentication">
        {!state.token ? (
          <>
            <Stack.Screen
              name="authentication"
              component={AuthenticationNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="forgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: true,
                title: Translation.t(
                  'socialApp.MainAppNavigator.forgotPasswordTitle',
                ),
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="App"
              component={HomeNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ExternalProfile"
              component={ExternalProfile}
              options={{
                title: Translation.t('socialApp.SideBarDrawer.profile'),
                drawerActiveBackgroundColor: 'white',
                drawerActiveTintColor: colorSchema.general.darkGray,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="notificationSettings"
              component={NotificationSettings}
              options={props => ({
                headerTitle: () => (
                  <NavigationHeader
                    navigation={props.navigation}
                    title={Translation.t(
                      'socialApp.MainAppNavigator.notificationSettings',
                    )}
                  />
                ),
                headerLeft: () => {
                  return null;
                },
              })}
            />
            <Stack.Screen
              name="ProfileNotificationSettings"
              component={ProfileNotificationsSettingsScreen}
              options={props => ({
                headerTitle: () => (
                  <NavigationHeader
                    navigation={props.navigation}
                    title={Translation.t(
                      'socialApp.MainAppNavigator.profileNotificationSettings',
                    )}
                  />
                ),
                headerLeft: () => {
                  return null;
                },
              })}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={props => ({
                headerTitle: () => <ChatHead navigation={props.navigation} />,
                headerLeft: () => {
                  return null;
                },
              })}
            />
            <Stack.Screen
              name="SearchEventsFilter"
              component={SearchEventFilter}
              options={props => ({
                headerTitle: () => (
                  <NavigationHeader
                    title="Filter"
                    navigation={props.navigation}
                  />
                ),
                headerLeft: () => {
                  return null;
                },
              })}
            />
            <Stack.Screen
              name="SearchPostsFilter"
              component={SearchPostFilter}
              options={props => ({
                headerTitle: () => (
                  <NavigationHeader
                    title="Filter"
                    navigation={props.navigation}
                  />
                ),
                headerLeft: () => {
                  return null;
                },
              })}
            />
            <Stack.Screen
              name="FolderNavigators"
              component={FolderNavigators}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Post"
              component={PostScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="UserList"
              component={UserList}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="SearchRequestScreen"
              component={SearchRequestScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default MainAppNavigator;

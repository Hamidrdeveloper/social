//React & React Native
import React, {useContext, useEffect} from 'react';

//React Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Types
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//NavigatorMenu
import DrawerNavigator from './navigators/DrawerNavigator/DrawerNavigator';

//Contexts
import {ThemeContext} from 'styled-components';
import {NavigationContext} from '../contexts/NavigationContext';

//Screens
import {
  NewPostScreen,
  DataProtectionScreen,
  ImprintScreen,
  NotificatiosScreen,
  ProfileScreen,
  CreateSearchRequestScreen,
  CreateFolderScreen,
  ChatList,
} from './screens';
import {OptionScreen} from './screens/DrawerNavigatorScreens/OptionScreen';

//Navigator
import BottomTabNavigator from './navigators/BottomTabNavigator/BottomTabNavigator';
import {OptionsNavegator} from './navigators/OptionsNavegator/OptionsNavegator';

//i18n
import Translation from '../constants/i18n';
import NotificationHeader from './screens/Notifications/components/NotificationHeader';
import colorSchema from '../constants/colorSchema';
import PersonalProfile from './screens/Profile/PersonalProfile';
import NavigationHeader from '../shared/NavigationHeader/NavigationHeader';
import ChatSearch from './screens/Chat/Components/ChatSearch';
import Discover from './screens/Discover/Discover';
import {ChatContext} from '../contexts/ChatContext';

const App = () => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;
  const {actualTab} = useContext(NavigationContext);
  const {getChat} = useContext(ChatContext);
  useEffect(() => {
    getChat();
  }, [actualTab]);

  return (
    <Drawer.Navigator
      drawerContent={links => <DrawerNavigator {...links} />}
      screenOptions={{drawerLabelStyle: {fontFamily}}}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTitle:
            actualTab === 'Notifications'
              ? NotificationHeader
              : actualTab === 'Messages'
              ? ChatSearch
              : actualTab,
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
        }}
      />
      <Drawer.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.newPost'),
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
        }}
      />
      <Drawer.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'Discover',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
        }}
      />
      <Drawer.Screen
        name="PersonalProfile"
        component={PersonalProfile}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.profile'),
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Benachrichtigungen"
        component={NotificatiosScreen}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.notifications'),
          headerTitle: props => <NotificationHeader props={props} />,
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Options"
        component={OptionsNavegator}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.options'),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="CreateSearchRequestScreen"
        component={CreateSearchRequestScreen}
        options={{
          title: 'Suchanfrage Hinzufügen',
        }}
      />
      <Drawer.Screen
        name="CreateFolder"
        component={CreateFolderScreen}
        options={{
          title: 'Ordner',
        }}
      />
      <Drawer.Screen
        name="ChatList"
        component={ChatList}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.chat'),
          headerTitle: props => <ChatSearch props={props} />,
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="Imprint"
        component={ImprintScreen}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.imprint'),
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
        }}
      />
      {/* <Drawer.Screen
        name="DataProtection"
        component={DataProtectionScreen}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.dataProtection'),
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: colorSchema.general.darkGray,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default App;

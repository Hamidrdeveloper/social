import React, {useContext, useEffect} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

//Contexts
import {ThemeContext} from 'styled-components';
import {NavigationContext} from '../../../contexts/NavigationContext';

//Screens
import {
  HomeFeedScreen,
  NewPostScreen,
  SearchScreen,
  NotificationsScreen,
  MessagesScreen,
  ChatList,
} from '../../screens';

//Icons
import {
  Home,
  Search,
  NewPost,
  Notifications,
  Messages,
} from '../../../shared/Icons';

import colorSchema from '../../../constants/colorSchema';

//Translation
import Translation from '../../../constants/i18n';

//Context
import {ModalContext} from '../../../contexts/ModalContext';
import DoubleTapToClose from '../../../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';
import GlobalFont from 'react-native-global-font';

const BottomTabNavigator = ({navigation}) => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;
  const widthIcons = 22;
  const heightIcons = 22;
  useEffect(() =>{
    let fontName = 'Montserrat-Black'
    GlobalFont.applyGlobal(fontName)
  },
  [])
  const {modalVisible, setModalVisible} = useContext(ModalContext);
  const {actualTab, setActualTab} = useContext(NavigationContext);

  const handleTabChange = name => {
    setActualTab(name);
    console.log(name);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#53ADDB"
        screenOptions={{drawerLabelStyle: {fontFamily}}}
        barStyle={{
          backgroundColor: 'white',
          height: 65,
          borderTopColor: '#707070',
          borderTopWidth: 0.1,
        }}
        labeled={false}>
        <Tab.Screen
          name="HomeFeedScreen"
          component={HomeFeedScreen}
          listeners={() => ({
            tabPress: e => {
              setActualTab('Feed');
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Home
                width={widthIcons}
                height={heightIcons}
                firstColor={focused ? colorSchema.iconColor.blue : 'gray'}
                secondColor={focused ? colorSchema.iconColor.lightBlue : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          listeners={() => ({
            tabPress: e => {
              setActualTab('Search');
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Search
                width={widthIcons}
                height={heightIcons}
                firstColor={focused ? colorSchema.iconColor.blue : 'gray'}
                secondColor={focused ? colorSchema.iconColor.lightBlue : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="NewPost"
          component={NewPostScreen}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
              setModalVisible(!modalVisible);
              setActualTab(Translation.t(`socialApp.SideBarDrawer.newPost`));
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => (
              <NewPost
                width={widthIcons}
                height={heightIcons}
                firstColor={focused ? colorSchema.iconColor.blue : 'gray'}
                secondColor={focused ? colorSchema.iconColor.lightBlue : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          listeners={() => ({
            tabPress: e => {
              setActualTab('Notifications');
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Notifications
                width={widthIcons}
                height={heightIcons}
                firstColor={focused ? colorSchema.iconColor.blue : 'gray'}
                secondColor={focused ? colorSchema.iconColor.lightBlue : 'gray'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          tabPress={() => {
            handleTabChange('Messages');
          }}
          component={ChatList}
          listeners={() => ({
            tabPress: e => {
              setActualTab('Messages');
            },
          })}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Messages
                width={20}
                height={20}
                width={20}
                height={20}
                firstColor={focused ? colorSchema.iconColor.blue : 'gray'}
                secondColor={focused ? colorSchema.iconColor.lightBlue : 'gray'}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <DoubleTapToClose />
    </>
  );
};

export default BottomTabNavigator;

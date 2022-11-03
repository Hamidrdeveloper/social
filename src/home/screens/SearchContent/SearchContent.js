// React & ReactNative
import React from 'react';
import {StyleSheet, View} from 'react-native';

// React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Navigation Types
const Tab = createMaterialTopTabNavigator();

//Screens
import PostsSearch from '../SearchOptions/EventSearch/EventSearch';
import UsersSearch from '../SearchOptions/UsersSearch/UsersSearch';
import ImagesSearch from '../SearchOptions/PostSearch/PostSearch';
import HashtagSearch from '../SearchOptions/HashtagSearch/HashtagSearch';

//Translation
import Translation from '../../../constants/i18n';

const fontSize = 12;
const SearchContent = ({
  discoverMode,
  setCurrentTab = string => {
    string = '';
  },
}) => {
  //TODO Add empty state when no content was found "Es wurden keine {Suchanfragen, Beiträge, Benutzer, Hashtags} gefunden
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 15},
        }}>
        <Tab.Screen
          name="Events"
          children={() => <PostsSearch discover={true} />}
          listeners={{
            tabPress: e => {
              setCurrentTab('Events');
            },
          }}
          options={{
            title: Translation.t(`socialApp.Search.Events`),
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
        <Tab.Screen
          name="Posts"
          children={() => <ImagesSearch discover={true} />}
          listeners={{
            tabPress: e => {
              setCurrentTab('Posts');
            },
          }}
          options={{
            title: Translation.t(`socialApp.Search.Posts`),
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
        {!discoverMode && (
          <>
            <Tab.Screen
              name="Users"
              component={UsersSearch}
              options={{
                title: Translation.t(`socialApp.Search.Users`),
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
              }}
            />
            <Tab.Screen
              name="Hashtags"
              component={HashtagSearch}
              options={{
                title: Translation.t(`socialApp.Search.HashTags`),
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: fontSize,
    fontWeight: 'bold',
  },
});

export default SearchContent;

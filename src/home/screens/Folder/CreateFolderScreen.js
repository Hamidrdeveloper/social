//React & React Native
import React from 'react';
import {View} from 'react-native';

//React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateFolderStepOne from './Components/CreateFolderStepOne';
import FolderStepTwo from './Components/CreateFolderStepTwo';

//Navigation Types
const Tab = createMaterialTopTabNavigator();

const CreateFolderScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 18},
        }}>
        <Tab.Screen
          name="FolderStepOne"
          component={CreateFolderStepOne}
          options={{
            title: '1',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color:'black',
            },
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
        <Tab.Screen
          name="FolderStepTwo"
          component={FolderStepTwo}
          options={{
            title: '2',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color:'black',
            },
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default CreateFolderScreen;

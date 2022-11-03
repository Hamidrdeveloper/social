//React & React Native
import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

//React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateSearchRequestStepOne from './Components/CreateSearchRequestStepOne';
import CreateSearchRequestStepTwo from './Components/CreateSearchRequestStepTwo';
import CreateSearchRequestStepThree from './Components/CreateSearchRequestStepThree';

//Navigation Types
const Tab = createMaterialTopTabNavigator();

const CreateSearchRequestScreen = () => {
  return (
    <View style={{flex: 1,width:`100%`,height:`100%`,backgroundColor:"#fff"}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 18},
        }}>
           <Tab.Screen
          name="SearchRequestStepThree"
          component={CreateSearchRequestStepThree}
          options={{
            title: '1',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            },
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
        <Tab.Screen
          name="SearchRequestStepOne"
          component={CreateSearchRequestStepOne}
          options={{
            title: '2',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            },
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
        <Tab.Screen
          name="SearchRequestStepTwo"
          component={CreateSearchRequestStepTwo}
          options={{
            title: '3',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            },
            tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
          }}
        />
       
      </Tab.Navigator>
    </View>
  );
};

export default CreateSearchRequestScreen;

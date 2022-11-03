import React, {useEffect, useState} from 'react';

//React Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Types
const Stack = createStackNavigator();

// Screens Options
import {UserAccountScreen} from '../../screens/OptionScreen/UserAccountScreen';
import {ProfileScreen} from '../../screens/OptionScreen/ProfileScreen';
import {BlockedUserScreen} from '../../screens/OptionScreen/BlockedUser/BlockedUserScreen';
import {LanguageScreen} from '../../screens/OptionScreen/Language/LanguageScreen';
import {OptionScreen} from '../../screens/DrawerNavigatorScreens/OptionScreen';
import {DeactivateScreen} from '../../screens/OptionScreen/Deactivate/DeactivateScreen';
import {EmailScreen} from '../../screens/OptionScreen/Email/EmailScreen';
import {PhoneNumberScreen} from '../../screens/OptionScreen/PhoneNumber/PhoneNumberScreen';
import {PasswordScreen} from '../../screens/OptionScreen/Password/PasswordScreen';
import {DataProtection} from '../../screens/OptionScreen/DataProtection/DataProtection';

//i18n
import Translation from '../../../constants/i18n';

// Component
import {ButtonGoBack} from '../../components/ButtonGoBack/ButtonGoBack';
import NotificationSettings from '../../screens/Notifications/components/NotificationSettings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageProfileScreen} from '../../screens/OptionScreen/ImageProfile/ImageProfileScreen';
//TODO Add an option "Search" that goes to the Search screen (the one with 4 tabs)
export const OptionsNavegator = () => {
  const locale = Translation.currentLocale();
  const [language, setLanguage] = useState(locale);
  console.log('cambia', locale);
  useEffect(() => {
    console.log('cambia 2');
  }, [locale]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: '#34343480',
          borderBottomWidth: 1,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Option Screen"
        component={OptionScreen}
        options={{
          title: Translation.t('socialApp.SideBarDrawer.options', {
            locale: locale,
          }),
          headerTitleStyle: {
            color: '#343434',
          },
        }}
      />
      <Stack.Screen
        name="User Account"
        component={UserAccountScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.name'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: Translation.t('socialApp.Options.Screen2'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Data Protection"
        component={DataProtection}
        options={{
          title: Translation.t('socialApp.ScreenTitles.DataProtection'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationSettings}
        options={{
          title: Translation.t('socialApp.Options.Screen4'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Blocked User"
        component={BlockedUserScreen}
        options={{
          title: Translation.t('socialApp.ScreenTitles.BlockedUsers'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          title: Translation.t('socialApp.Options.Screen6'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Deactivate"
        component={DeactivateScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.deactivate'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.email'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="ImageProfile"
        component={ImageProfileScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.edit'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Phone Number"
        component={PhoneNumberScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.phone'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          title: Translation.t('socialApp.UserAccount.password'),
          headerTintColor: '#2975B5',
          headerTitleStyle: {
            color: '#343434',
          },
          headerLeft: () => <ButtonGoBack />,
        }}
      />
    </Stack.Navigator>
  );
};

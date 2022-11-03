//React & React Native
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Navigation Types
const Tab = createMaterialTopTabNavigator();

//Contexts
import {ThemeContext} from 'styled-components';

//Screens
import {LoginScreen, RegisterScreen} from './screens';

//SVG's
import AppLogo from './svg/AppLogo';

//Styled Componentes
import {AppContainer, LogoContainer, NavigatorContainer} from './App.styles';

//i18n
import Translation from '../constants/i18n';
import DoubleTapToClose from '../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';

const App = () => {
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  return (
    <LinearGradient
      colors={['#2975B5', '#0CC7F3']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.LinearGradient}>
      <AppContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <NavigatorContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {fontSize: 18},
            }}
            style={styles.TabNavigator}>
            <Tab.Screen
              name="login"
              component={LoginScreen}
              options={{
                title: Translation.t(
                  'socialApp.Authentification.NavigatorHeaders.login',
                ),
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontFamily,
                  fontWeight: 'bold',
                  color: 'black',
                },
                tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
              }}
            />
            <Tab.Screen
              name="register"
              component={RegisterScreen}
              options={{
                title: Translation.t(
                  'socialApp.Authentification.NavigatorHeaders.register',
                ),
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontFamily,
                  fontWeight: 'bold',
                  color: 'black',
                },
                tabBarIndicatorStyle: {backgroundColor: '#2975B5'},
              }}
            />
          </Tab.Navigator>
        </NavigatorContainer>
      </AppContainer>
      <DoubleTapToClose />
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  TabNavigator: {paddingHorizontal: 5, marginBottom: 0, flex: 1},
  LinearGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;

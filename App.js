//React & React Native
import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'
//React Navigation
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Libraries
import Toast from 'react-native-toast-message';

//Navigation Types
const Stack = createStackNavigator();

//Providers
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as FolderProvider} from './src/contexts/FolderContext';
import {Provider as AuthProvider} from './src/contexts/AuthContext';
import {Provider as PostProvider} from './src/contexts/PostContext';
import {Provider as SearchProvider} from './src/contexts/SearchContext';
import {Provider as CommentProvider} from './src/contexts/CommentContext';
import {Provider as SearchPostFilter} from './src/contexts/SearchPostFilterContext';
import {Provider as SearchEventFilter} from './src/contexts/SearchEventFilterContext';
import {Provider as BlockedUserProvider} from './src/contexts/BlockedUserContext';
import {ChatProvider} from './src/contexts/ChatContext';
import {ModalProvider} from './src/contexts/ModalContext';
import {ProfileProvider} from './src/contexts/ProfileContext';
import {CreateSearchRequestProvider} from './src/contexts/CreateSearchRequestContext';
import {NavigationProvider} from './src/contexts/NavigationContext';
import SocialAppThemeProvider from './src/shared/SocialAppThemeProvider/SocialAppThemeProvider';

import 'react-native-gesture-handler';

//Navigators Containers
import {MainAppNavigator} from './src/screensNavigators';

//Sentry
import * as Sentry from '@sentry/react-native';

//Components
import SelectorNavigateModal from './src/shared/Modals/SelectorNavigateModal/SelectorNavigateModal';
import GlobalFont from 'react-native-global-font';

if (__DEV__) {
  import('./debug/ReactotronConfig.js').then(() =>
    console.tron.log('Reactotron Configured'),
  );
}

console.disableYellowBox = true;
/*
Sentry.init({
  dsn: '__DSN__', //Add DSN
});
*/

Sentry.setTag('myTag', 'tag-value');
Sentry.setExtra('myExtra', 'extra-value');
Sentry.addBreadcrumb({message: 'test'});
Sentry.captureMessage('Hello Sentry!');


const Providers = props => (
  
  <>
    <AuthProvider>
      <ModalProvider>
      <FolderProvider>
        <PostProvider>
          <CommentProvider>
            <SearchProvider>
              <SearchPostFilter>
                <SearchEventFilter>
                  <BlockedUserProvider>
                    <ChatProvider>
                      <ProfileProvider>
                        <CreateSearchRequestProvider>
                          <NavigationProvider>
                          <SocialAppThemeProvider>
                            {props.children}
                          </SocialAppThemeProvider>
                          </NavigationProvider>
                        </CreateSearchRequestProvider>
                      </ProfileProvider>
                    </ChatProvider>
                  </BlockedUserProvider>
                </SearchEventFilter>
              </SearchPostFilter>
            </SearchProvider>
          </CommentProvider>
        </PostProvider>
        </FolderProvider>
      </ModalProvider>
    </AuthProvider>
  </>
);
const MyTheme = {

  colors: {
    background: '#fff'
  },
};
export default () => (
  
  <>
    
    <Providers>
      <SafeAreaProvider>
        <NavigationContainer >
          <SelectorNavigateModal>
            <Stack.Navigator>
              <Stack.Screen
                name="App"
                component={MainAppNavigator}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </SelectorNavigateModal>
        </NavigationContainer>
      </SafeAreaProvider>
    </Providers>
    <Toast />
  </>
);

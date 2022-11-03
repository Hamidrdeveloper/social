//React
import React from 'react';

//React Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Types
const Stack = createStackNavigator();

//Screens
import SearchRequestParticipants from '../../SearchRequest/Components/SearchRequestParticipants';
import FolderScreen from '../FolderScreen';
import FolderPermissionParticipants from '../Components/FolderPermissionParticipants';

//Components
import NavigationHeader from '../../../../shared/NavigationHeader/NavigationHeader';
import FolderHeadNavigator from '../Components/FolderHeadNavigator';

//Translation
import Translation from '../../../../constants/i18n';

const FolderNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchRequestParticipants"
        component={SearchRequestParticipants}
        options={props => ({
          headerTitle: () => (
            <NavigationHeader
              navigation={props.navigation}
              title={Translation.t(
                'socialApp.SearchRequest.participants.title',
              )}
            />
          ),
          headerLeft: () => {
            return null;
          },
        })}
      />
      <Stack.Screen
        name="Folder"
        component={FolderScreen}
        options={props => ({
          headerTitle: () => (
            <FolderHeadNavigator navigation={props.navigation} />
          ),
          headerLeft: () => {
            return null;
          },
        })}
      />
      <Stack.Screen
        name="FolderPermission"
        component={FolderPermissionParticipants}
        options={props => ({
          headerTitle: () => (
            <FolderHeadNavigator navigation={props.navigation} />
          ),
          headerLeft: () => {
            return null;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default FolderNavigators;

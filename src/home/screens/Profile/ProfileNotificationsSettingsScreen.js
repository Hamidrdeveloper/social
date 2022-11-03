//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

//Components
import SwitchView from '../../../shared/Switch/SwitchView';

//Settings data
import {
  profileGeneralConfig,
  profileChatConfig,
} from '../Notifications/utils/utils';
import {TitleSectionText} from './Styles/ProfileNotificationsSettings.styles';
import {Context as BlockedUserContext} from '../../../contexts/BlockedUserContext';

//Translation
import Translation from '../../../constants/i18n';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {profileReport} from '../../../api/report';
import {deleteSearch} from '../../../api/search';
import {deleteSearchRequest} from '../../../api/searchRequest';
import {Context as SearchContext} from '../../../contexts/SearchContext';

const ProfileNotificationsSettingsScreen = ({navigation, route}) => {
  const [profileGeneralSettings, setProfileGeneralSettings] = useState([]);

  const [profileChatSettings, setProfileChatSettings] = useState([]);
  const {onBlockedUser} = useContext(BlockedUserContext);
  const {setKeyword} = useContext(SearchContext);

  const userId = route.params.profileId;
  const username = route.params.userName;
  const id = route.params.id;
  console.log(route.params);
  useEffect(() => {
    setProfileGeneralSettings(profileGeneralConfig());
    setProfileChatSettings(profileChatConfig());
  }, []);

  return (
    <View>
      <TitleSectionText>
        {Translation.t('socialApp.ProfileNotificationSettings.general.title')}
      </TitleSectionText>
      <FlatList
        data={profileGeneralSettings}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={profileGeneralSettings}
            setter={setProfileGeneralSettings}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.ProfileNotificationSettings.chat.title')}
      </TitleSectionText>
      <FlatList
        data={profileChatSettings}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={profileChatSettings}
            setter={setProfileChatSettings}
          />
        )}
      />
      {route.params.useId != userId ? (
        <>
          <TouchableOpacity
            onPress={() => {
              setKeyword(' ');
              setKeyword('');
              onBlockedUser(userId);
            }}>
            <TitleSectionText style={{color: 'red'}}>
              {'Block'}
            </TitleSectionText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              profileReport(username).then(() => {
                setKeyword(' ');
                setKeyword('');
                navigation.navigate('Search');
              });
            }}>
            <TitleSectionText style={{color: 'red'}}>
              {'Report'}
            </TitleSectionText>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ImageProfile');
            }}>
            <TitleSectionText style={{color: 'black'}}>
            {Translation.t('socialApp.UserAccount.edit')}
            </TitleSectionText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteSearchRequest(route.params.id).then(() => {
                setKeyword(' ');
                setKeyword('');
                navigation.navigate('Home');
              });
            }}>
            <TitleSectionText style={{color: 'red'}}>
              {'Delete'}
            </TitleSectionText>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ProfileNotificationsSettingsScreen;

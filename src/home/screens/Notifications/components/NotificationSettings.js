//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

//Libraries
import {Button} from 'react-native-elements/dist/buttons/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

//Context
import {Context as AuthContext} from '../../../../contexts/AuthContext';

//Styles Component
import {
  ContainerScrollview,
  TitleSectionText,
  DescriptionSectionView,
  DescriptionSectionText,
} from '../styles/NotificationSettings.styles.';

//Settings data
import {
  systemConfig,
  generalConfig,
  searchQuestionsConfig,
  subscribersConfig,
} from '../utils/utils';

//Translation
import Translation from '../../../../constants/i18n';
import SwitchView from '../../../../shared/Switch/SwitchView';

//API
import {Profile} from '../../../../api/index';
import {saveNotificationSettings} from '../../../../api/notifications';
import DoubleTapToClose from '../../../../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';

const NotificationSettings = props => {
  const [systemConfigSwitch, setSystemConfigSwitch] = useState([]);
  const [generalConfigSwitch, setGeneralConfigSwitch] = useState([]);
  const [searchQuestionsConfigSwitch, setSearchQuestionsConfigSwitch] =
    useState([]);
  const [subscribersConfigSwitch, setSubscribersConfigSwitch] = useState([]);

  const {state, updateUser} = useContext(AuthContext);

  const getUserOptionsGeneralConfig = () => {
    const newGeneralConfig = generalConfig().map(item => {
      return {...item, value: state?.user?.options[item?.key]};
    });
    return newGeneralConfig;
  };

  useEffect(() => {
    setSystemConfigSwitch(systemConfig());
    setGeneralConfigSwitch(getUserOptionsGeneralConfig());
    setSearchQuestionsConfigSwitch(searchQuestionsConfig());
    setSubscribersConfigSwitch(subscribersConfig);
  }, []);

  const handleSave = async () => {
    let notificationSettingsObj = {
      post_like_noti: generalConfigSwitch[0].value,
      search_request_like_noti: generalConfigSwitch[1].value,
      comment_like_noti: generalConfigSwitch[2].value,
      post_comment_noti: generalConfigSwitch[3].value,
      search_request_comment_noti: generalConfigSwitch[4].value,
      mention_noti: generalConfigSwitch[5].value,
      reply_noti: generalConfigSwitch[6].value,
      new_follower_noti: generalConfigSwitch[7].value,
      accept_follow_req_noti: generalConfigSwitch[8].value,
    };
    const {error, data} = await saveNotificationSettings(
      notificationSettingsObj,
    );
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: data?.errorMessage,
      });
    } else {
      const {error, data} = await Profile.myProfile();
      if (!error) {
        await updateUser(data?.user);
      }
      props.navigation.goBack();
    }
  };

  return (
    <ContainerScrollview>
      <FlatList
        data={systemConfigSwitch}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={systemConfigSwitch}
            setter={setSystemConfigSwitch}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.NotificationSettings.title.general')}
      </TitleSectionText>
      <FlatList
        data={generalConfigSwitch}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={generalConfigSwitch}
            setter={setGeneralConfigSwitch}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.NotificationSettings.title.searchQuestions')}
      </TitleSectionText>
      <DescriptionSectionView>
        <DescriptionSectionText>
          {Translation.t(
            'socialApp.NotificationSettings.subtitle.searchQuestions',
          )}
        </DescriptionSectionText>
      </DescriptionSectionView>
      <FlatList
        data={searchQuestionsConfigSwitch}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={searchQuestionsConfigSwitch}
            setter={setSearchQuestionsConfigSwitch}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.NotificationSettings.title.subscribers')}
      </TitleSectionText>
      <FlatList
        data={subscribersConfigSwitch}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={subscribersConfigSwitch}
            setter={setSubscribersConfigSwitch}
          />
        )}
      />
      <Button
        buttonStyle={{
          width: wp('95%'),
          marginTop: hp('1.5%'),
          alignSelf: 'center',
          backgroundColor: '#2975B5',
        }}
        title={Translation.t('socialApp.Buttons.Save')}
        titleStyle={{fontWeight: 'bold'}}
        onPress={handleSave}
      />
      <DoubleTapToClose />
    </ContainerScrollview>
  );
};

export default NotificationSettings;

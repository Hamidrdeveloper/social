import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  TitleSectionText,
  ViewContainerSwitch,
  ContainerScrollview,
  ViewBotton,
} from './DataProtection.styles';

//Translation
import Translation from '../../../../constants/i18n';

//Components
import {CustomButton} from '../../../../shared';
import SwitchView from '../../../../shared/Switch/SwitchView';
import {
  DataProtectionConfig,
  privateProfile,
} from '../../Notifications/utils/utils';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {savePrivacySettings} from '../../../../api/profile';
import {Context as AuthContext} from '../../../../contexts/AuthContext';
import * as API from '../../../../api/index';

export const DataProtection = ({navigation}) => {
  const [privateProfileData, setPrivateProfile] = useState([]);
  const [dataProtection, setDataProtection] = useState([]);
  const [selectchange, setSelectchange] = useState([]);
  const {state, updateUser} = useContext(AuthContext);

  useEffect(() => {
    let data = [];
    const result = DataProtectionConfig().map(key => {
      return Object.keys(state.user?.options).find(element => {
        if (element == key.paramter) {
          data.push({...key, value: state.user?.options[element]});
          return {...key, value: true};
        }
      });
    });
    setPrivateProfile(privateProfile());
    setDataProtection(data);
  }, []);
  useEffect(() => {
    let data = [];
    let check;
    dataProtection.forEach(x => {
      let y = {[x.paramter]: x.value};
      data.push(y);
      check = {...check, ...y};
    });
    // alert(JSON.stringify(check));
    setSelectchange(check);
  }, [dataProtection]);
  const handleSubmit = async () => {
    savePrivacySettings(selectchange).then(async res => {
      const {error, data} = await API.Profile.myProfile();

      if (!error) {
        updateUser(data.user);
      }
      navigation.goBack();
    });
  };
  return (
    <ContainerScrollview>
      <TitleSectionText>
        {Translation.t('socialApp.DataProtection.title')}
      </TitleSectionText>
      <FlatList
        data={privateProfileData}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={privateProfileData}
            setter={setPrivateProfile}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.DataProtection.general')}
      </TitleSectionText>
      <FlatList
        data={dataProtection}
        renderItem={config => (
          <SwitchView
            config={config.item}
            array={dataProtection}
            setter={setDataProtection}
          />
        )}
      />
      <TitleSectionText>
        {Translation.t('socialApp.DataProtection.mydata')}
      </TitleSectionText>
      <ViewBotton>
        <CustomButton
          style={{
            width: widthPercentageToDP('93%'),
          }}
          title={Translation.t('socialApp.DataProtection.request')}
          onPress={() => {
            handleSubmit();
          }}
        />
      </ViewBotton>
    </ContainerScrollview>
  );
};

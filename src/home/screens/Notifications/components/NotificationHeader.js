//React & React Native
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//Styles components
import {
  ContainerView,
  TitleText,
  IconView,
} from '../styles/NotificationHeader.styles';

//Components
import NotificationSettingsModal from './NotificationSettingsModal';

//Icons
import {Gear} from '../../../../shared/Icons/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Translation
import Translation from '../../../../constants/i18n';
import { Image } from 'react-native';

const NotificationHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ContainerView>
      {/* <NotificationSettingsModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      /> */}
      <TitleText>{Translation.t('socialApp.Notification.title')}</TitleText>
      <TouchableOpacity
        onPress={() => {
          console.log('press');
          navigation.navigate('notificationSettings');
        }}>
        <IconView>
        <Image style={{width:30,height:30}}source={require('../../../../assets/setting.png')} />

        </IconView>
      </TouchableOpacity>
    </ContainerView>
  );
};

export default NotificationHeader;

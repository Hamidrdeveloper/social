//React
import React, {useContext} from 'react';

//React Navigation
import {useNavigation} from '@react-navigation/native';

//Components
import Modal from 'react-native-modal';
import {
  ModalPressable,
  ModalHeaderText,
  ModalView,
  ModalPressableText,
} from './SelectorNavigateModal.styles';

//Contexts
import {ModalContext} from '../../../contexts/ModalContext';

//Translation
import Translation from '../../../constants/i18n';
import { NavigationContext } from '../../../contexts/NavigationContext';

function SelectorNavigateModal(props) {
  const navigation = useNavigation();
  const {modalVisible, setModalVisible} = useContext(ModalContext);
  const {actualTab, setActualTab} = useContext(NavigationContext);

  const toggleModal = () => {
    setActualTab(`Feed`);

    setModalVisible(!modalVisible);
    navigation.navigate('HomeFeedScreen');
  };

  return (
    <>
      {props.children}
      <Modal
        isVisible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}>
        <ModalView flex_2>
          <ModalHeaderText black>
            {Translation.t('socialApp.NavigateModal.title')}
          </ModalHeaderText>

          <ModalPressable
            onPress={() => {
              toggleModal();
              navigation.navigate('CreateSearchRequestScreen');
            }}>
            <ModalPressableText black>
              {Translation.t('socialApp.NavigateModal.search')}
            </ModalPressableText>
          </ModalPressable>

          <ModalPressable
            onPress={() => {
              toggleModal();
              navigation.navigate('NewPost');
            }}>
            <ModalPressableText black>
              {Translation.t('socialApp.NavigateModal.post')}
            </ModalPressableText>
          </ModalPressable>
        </ModalView>
        <ModalView>
          <ModalPressable onPress={toggleModal} secondary>
            <ModalPressableText white>
              {Translation.t('socialApp.NavigateModal.close')}
            </ModalPressableText>
          </ModalPressable>
        </ModalView>
      </Modal>
    </>
  );
}

export default SelectorNavigateModal;

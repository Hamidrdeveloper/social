//React & React Native
import React, {useContext, useState} from 'react';
import {Modal} from 'react-native';

// Navigation
import {useNavigation} from '@react-navigation/native';

//Libraries
import Toast from 'react-native-toast-message';

// Shared Components
import {ReportLabel, ReportScreen} from '../../index';

//API
import {Post, SearchRequest} from '../../../api/index';

//Context
import {ProfileContext} from '../../../contexts/ProfileContext';

//Translation
import Translation from '../../../constants/i18n';

const Report = ({type: type, reference, id}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    reloadPosts,
    setReloadPost,
    reloadSearchRequests,
    setReloadSearchRequests,
  } = useContext(ProfileContext);

  const navigation = useNavigation();

  const deletePost = async () => {
    const {error, data} = await Post.deletePost({postId: id});
    checkDeleteResponse(error, data);
    setReloadPost(!reloadPosts);
  };

  const deleteSearchRequest = async () => {
    const {error, data} = await SearchRequest.deleteSearchRequest({
      searchRequestId: id,
    });
    checkDeleteResponse(error, data);
    setReloadSearchRequests(!reloadSearchRequests);
  };

  const checkDeleteResponse = (error, data) => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: data?.errorMessage,
      });
    } else {
      setModalVisible(false);
      navigation.navigate('PersonalProfile');
      Toast.show({
        type: 'success',
        text1: Translation.t('socialApp.Delete.success'),
        text2: Translation.t('socialApp.Delete.successMessage'),
      });
    }
  };

  const getOnPressByType = () => {
    switch (type) {
      case 'deleteSearchRequest':
        return deleteSearchRequest;
      case 'deletePost':
        return deletePost;
    }
  };

  return (
    <>
      <ReportLabel
        type={type}
        onPress={() => setModalVisible(!modalVisible)}></ReportLabel>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ReportScreen
          hideModal={() => setModalVisible(false)}
          type={type}
          reference={reference}
          onPress={type ? getOnPressByType() : () => {}}
          id={id}
        />
      </Modal>
    </>
  );
};

export default Report;

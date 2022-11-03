import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

//Settings data
import { generalConfig } from '../utils/utils';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  modalView: {
    width: wp('75%'),
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const NotificationSettingsModal = ({ modalVisible, toggleModal, setFilterOption, applyFilter }) => {

  const handlePress = configIdx => {
    setFilterOption(configIdx);
    toggleModal();
  };

  const settingRender = config => {
    return (
      <TouchableOpacity onPress={() => handlePress(config.index)}>
        <Text style={{ padding: 8, fontSize: wp('4%') }}>{config.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={modalVisible}
      customBackdrop={
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={styles.modalView}>
        <TouchableOpacity onPress={() => handlePress(-1)}>
          <Text style={{ padding: 8, fontSize: wp('4%') }}>All</Text>
        </TouchableOpacity>
        {generalConfig().map(config => {
          return settingRender(config);
        })}
      </View>
    </Modal>
  );
};

export default NotificationSettingsModal;

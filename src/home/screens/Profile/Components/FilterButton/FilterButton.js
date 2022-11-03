//React & React Native
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';

//Translation
import Translation from '../../../../../constants/i18n';

//Icons
import {Settings} from '../../../../../shared/Icons';

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
    bottom:70,
  },
  picker: {
    width: '100%',
  },
});

const renderDataPicker = arrayData => {
  return arrayData?.map(data => {
    return <Picker.Item label={data.name} value={data.value} />;
  });
};

const FilterButton = ({width, filterData, filterOption, setFilterOption}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const titleLength = Translation.t('socialApp.Profile.tab.filter').length;
  return (
    <>
      <Modal
        visible={modalVisible}
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => setModalVisible('false')}>
            <View style={{flex: 1}} />
          </TouchableWithoutFeedback>
        }>
        <View style={styles.modalView}>
          <Picker
            style={styles.picker}
            selectedValue={filterOption}
            onValueChange={(itemValue, itemIndex) =>
              setFilterOption(itemValue)
            }>
            {renderDataPicker(filterData)}
          </Picker>
        </View>
      </Modal>
      <Button
        buttonStyle={{width: wp(width), marginTop: hp('1%')}}
        title={Translation.t('socialApp.Profile.tab.filter')}
        titleStyle={{
          marginRight: titleLength < 8 ? wp('60%') : wp('40%'),
          fontWeight: 'bold',
        }}
        icon={
          <Settings
            width={20}
            height={25}
            firstColor="white"
            secondColor="white"
          />
        }
        iconPosition="right"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </>
  );
};

export default FilterButton;

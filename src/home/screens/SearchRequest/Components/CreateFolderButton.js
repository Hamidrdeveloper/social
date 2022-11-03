//React & React Native
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {TouchableOpacity} from '../../post/styles/buttonsImage.styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Translation
import Translation from '../../../../constants/i18n';

//Styles
const styles = StyleSheet.create({
  folderContainer: {
    margin: 15,
    width: wp('42%'),
    alignItems: 'center',
    backgroundColor: 'black',
  },
  addFolderButton: {
    backgroundColor: 'white',
    height: hp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colorSchema.general.lightGray,
  },
  addIconContainer: {
    borderColor: colorSchema.general.darkGray,
    borderWidth: 3,
    borderRadius: 10,
    padding: 4,
    marginBottom: hp('2%'),
  },
  addFolderButtonTitle: {
    fontSize: wp('5%'),
    color: colorSchema.general.lightGray,
  },
});

const CreateFolderButton = ({navigation}) => {
  return (
    <View style={[styles.folderContainer, styles.addFolderButton]}>
      <TouchableOpacity
        style={styles.addIconContainer}
        onPress={() => navigation.navigate('CreateFolder')}
      >
        <MaterialIcons
          name="add"
          size={60}
          color={colorSchema.general.lightBlue}
        />
      </TouchableOpacity>
      <Text style={styles.addFolderButtonTitle}>
        {Translation.t('socialApp.SearchRequest.folder.folder')}
      </Text>
      <Text style={styles.addFolderButtonTitle}>
        {Translation.t('socialApp.SearchRequest.folder.create')}
      </Text>
    </View>
  );
};

export default CreateFolderButton;

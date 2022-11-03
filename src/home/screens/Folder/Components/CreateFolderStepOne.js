//React & React Native
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Button, Input} from 'react-native-elements';

//Components
import ChoosePhoto from '../../../../shared/ImageGallery/ChoosePhoto';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Translation
import Translation from '../../../../constants/i18n';
import {createFolder} from '../../../../api/folder';

//Styles
const styles = StyleSheet.create({
  container: {
    maxHeight: hp('80%'),
    marginTop: hp('3%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
    textTransform: 'uppercase',
  },
  descriptionSubtitle: {
    color: colorSchema.general.lightGray,
    marginLeft: wp('2%'),
  },
  inputContainer: {
    paddingHorizontal: wp('3%'),
    marginTop: hp('1%'),
  },
  button: {
    width: wp('48%'),
    marginLeft: wp('47%'),
    marginTop: hp('2%'),
  },
});

const CreateFolderStepOne = ({navigation}) => {
  const [pickedImage, setPickedImage] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const isButtonEnable = title && description?.length;
  const onCrateFolder = () => {
    //Title and status attributes are not in the mockup
    const postObject = {
      title: title,
      parent_id: 0,
      description: description,
    };
    console.log(postObject);
    navigation.navigate('FolderStepTwo', {data: postObject});
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {Translation.t('socialApp.CreateFolder.stepOne.title')}
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.descriptionSubtitle}>
          {Translation.t('socialApp.CreateFolder.stepOne.title')}
        </Text>
        <Input
          multiline={true}
          value={title}
          onChangeText={value => setTitle(value)}
        />
      </View>
      <ChoosePhoto pickedImage={pickedImage} setPickedImage={setPickedImage} />
      <View
        style={{
          marginTop: pickedImage ? hp('35%') : hp('10%'),
        }}>
        <Text style={styles.title}>
          {Translation.t('socialApp.CreateFolder.stepOne.description')}
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.descriptionSubtitle}>
            {Translation.t('socialApp.CreateFolder.stepOne.description')}
          </Text>
          <Input
            multiline={true}
            maxLength={1000}
            value={description}
            onChangeText={value => setDescription(value)}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            containerStyle={{width: '90%'}}
            disabled={!isButtonEnable}
            title={'Weiter'}
            titleStyle={{fontSize: hp('2.5%')}}
            disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
            onPress={() => {
              onCrateFolder();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateFolderStepOne;

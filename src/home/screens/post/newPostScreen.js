//React & React Native
import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//API
import {Post} from '../../../api/index';

//Libraries
import {Input, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import {Picker} from '@react-native-picker/picker';

//i18n
import Translation from '../../../constants/i18n';

//Components
import ChoosePhoto, {
  ChoosePhotoMulti,
} from '../../../shared/ImageGallery/ChoosePhoto';
import {SwitchComponent} from '../../../shared/SwitchComponent/SwitchComponent';

//Context
import {ProfileContext} from '../../../contexts/ProfileContext';
import {Context as PostContext} from '../../../contexts/PostContext';

//Styles
import {
  DesctiptionView,
  DescriptionText,
  ContinueButtonView,
} from './styles/newPostScreen.styles';
import {ContainerSwitch} from '../CreateSearchRequest/Styles/CreateSearchRequestStepTwo.styles';
import {
  deleteRequestPickerData,
  visiblePickerData,
} from '../CreateSearchRequest/Utils/CreateSearchRequest.utils';

const styles = StyleSheet.create({
  picker: {
    width: wp('95%'),
    marginLeft: wp('2%'),
    marginBottom: hp('-4%'),
  },
  switchesContainer: {
    marginLeft: wp('5%'),
    marginTop: hp('1%'),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginLeft: wp('5%'),
    marginTop: hp('5%'),
    marginBottom: hp('1%'),
  },
});

const NewPostScreen = ({navigation}) => {
  const [pickedImage, setPickedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [allowComment, setAllowComment] = useState(true);

  const [visibility, setVisibility] = useState(visiblePickerData[0].value);
  const [deleteRequest, setDeleteRequest] = useState(
    deleteRequestPickerData[0].value,
  );
  const {loadPosts} = useContext(PostContext);

  const {reloadPosts, setReloadPost} = useContext(ProfileContext);

  const showContinueButton = pickedImage && description.length;

  const newPost = async () => {
    setLoading(true);
    let date = new Date();
    const r = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds(),
    );

    //Title and status attributes are not in the mockup
    const postObject = {
      title: description,
      content: description,
      mentioned_users: [],
      imageUri: pickedImage,
      publication_date: Math.round(r / 1000),
      options: {
        comment: allowComment,
      },
    };

    Post.createPost(postObject).then(res => {
      setLoading(false);
      if (!res) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Post not upload',
        });
      } else {
        loadPosts();
        Toast.show({
          type: 'success',
          text1: Translation.t('socialApp.newPost.success'),
          text2: Translation.t('socialApp.newPost.postCreated'),
        });
        setPickedImage(null);
        setDescription('');
        setReloadPost(!reloadPosts);
        loadPosts();
        setTimeout(() => {
          loadPosts();
        }, 40000);
        navigation.goBack();
      }
    });
  };

  const renderDataPicker = arrayData => {
    return arrayData.map(data => {
      return <Picker.Item label={data.name} value={data.value} />;
    });
  };

  return (
    <ScrollView
      style={{height: '100%', backgroundColor: '#fff'}}
      contentContainerStyle={{flexGrow: 1}}>
      <ChoosePhotoMulti
        pickedImage={pickedImage}
        setPickedImage={setPickedImage}
        mixed={'mixed'}
        multi={10}
      />
      <View
        style={{
          marginTop: pickedImage ? hp('15%') : hp('10%'),
          backgroundColor: '#fff',
        }}>
        {/* <DesctiptionView> */}
        <DescriptionText>
          {Translation.t('socialApp.newPost.description')}
        </DescriptionText>
        <Input
          placeholder={Translation.t('socialApp.newPost.description')}
          value={description}
          maxLength={1000}
          onChangeText={e => setDescription(e)}
        />
        {/* </DesctiptionView> */}
        <View style={styles.switchesContainer}>
          <SwitchComponent
            title={Translation.t(
              'socialApp.CreateSearchRequest.stepThree.allowComments',
            )}
            onChange={() => setAllowComment(!allowComment)}
            value={allowComment}
          />
        </View>
        <Text style={styles.title}>
          {Translation.t('socialApp.CreateSearchRequest.stepThree.visibility')}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={visibility}
          onValueChange={(itemValue, itemIndex) => setVisibility(itemValue)}>
          {renderDataPicker(visiblePickerData)}
        </Picker>
        {/* <Text style={styles.title}>
          {Translation.t(
            'socialApp.CreateSearchRequest.stepThree.deleteRequest',
          )}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={deleteRequest}
          onValueChange={(itemValue, itemIndex) => setDeleteRequest(itemValue)}>
          {renderDataPicker(deleteRequestPickerData)}
        </Picker> */}
        <ContinueButtonView>
          <Button
            style={{width: wp('48%')}}
            disabled={!showContinueButton}
            title={Translation.t('socialApp.newPost.continue')}
            titleStyle={{fontSize: hp('2.5%')}}
            disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
            onPress={newPost}
            loading={loading}
          />
        </ContinueButtonView>
      </View>
    </ScrollView>
  );
};

export default NewPostScreen;

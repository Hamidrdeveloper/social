//React & React Native
import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Components
import {SwitchComponent} from '../../../../shared/SwitchComponent/SwitchComponent';

//Utils
import {
  deleteRequestPickerData,
  visiblePickerData,
} from '../Utils/CreateSearchRequest.utils';
import {Button, Input} from 'react-native-elements';
import {showErrorMessage} from '../../../../utils/MessageToast/MessageToast';

//API
import {SearchRequest} from '../../../../api/index';

//Translation
import Translation from '../../../../constants/i18n';

//Context
import {CreateSearchRequestContext} from '../../../../contexts/CreateSearchRequestContext';
import {ProfileContext} from '../../../../contexts/ProfileContext';
import {Context as PostContext} from '../../../../contexts/PostContext';

//Styles
import {
  ContainerSwitch,
  PlaceholderDateText,
} from '../Styles/CreateSearchRequestStepTwo.styles';
import {TitleSectionText} from '../Styles/CreateSearchRequest.styles';
import {SpaceView} from '../../../components/PostList/Postlist.styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: hp('3%'),
    maxHeight: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('5%'),
    marginTop: hp('5%'),
    marginBottom: hp('1%'),
  },
  dateTimesContainer: {
    flexDirection: 'row',
    borderColor: '#a5afb7',
    borderBottomWidth: 1.5,
    width: wp('90%'),
    marginLeft: wp('5%'),
  },
  dateTimeView: {
    width: '35%',
  },
  picker: {
    width: wp('90%'),
    marginLeft: wp('5%'),
    marginTop: hp('-5%'),
    marginBottom: hp('-4%'),
  },
  containerButtons: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  publicateImmediatelyText: {
    marginTop: hp('1%'),
    fontSize: wp('4.5%'),
    marginBottom: hp('1%'),
  },
});

const CreateSearchRequestStepThree = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [publicateImmediately, setPublicateImmediately] = useState(true);
  const {
    allowCommentsCheck,
    setAllowCommentsCheck,
    showParticipantsCheck,
    setShowParticipantsCheck,
    publicationDate,
    setPublicationDate,
    visibility,
    setVisibility,
    deleteRequest,
    setDeleteRequest,
    title,
    description,
    category,
    pickedImage,
    people,
    cleanData,
  } = useContext(CreateSearchRequestContext);
  const {loadPosts} = useContext(PostContext);

  const {reloadSearchRequests, setReloadSearchRequests} =
    useContext(ProfileContext);

  const renderDataPicker = arrayData => {
    return arrayData.map(data => {
      return (
        <Picker.Item label={data.name} value={data.value} color={'#000'} />
      );
    });
  };

  const createSearchRequest = async () => {
    setLoading(true);
    let dataJ = {
      title,
      content: description + category,
      imageUri: pickedImage?.uri,
      required_people: people,
      mentioned_users: [],
      status: 'draft',
    };
    console.log(dataJ);
    SearchRequest.createSearchRequest(dataJ).then(res => {
      
     
      alert('ss' + `${res}`);
      setLoading(false);
      if (res == false) {
        alert('error');
        showErrorMessage();
      } else {
        alert('success');
        Toast.show({
          type: 'success',
          text1: Translation.t('socialApp.CreateSearchRequest.message.success'),
          text2: Translation.t(
            'socialApp.CreateSearchRequest.message.searchRequestCreated',
          ),
        });
        loadPosts();
        navigation.navigate('HomeFeedScreen');
        cleanData();
        setPublicateImmediately(true);
        setReloadSearchRequests(!reloadSearchRequests);
      }
    });
  };
  const next = () => {
    navigation.navigate('SearchRequestStepOne');
  };
  //TODO The date time picker should not be shown, but the text "Sofort", if tapped on this word the datetimepicker should appear
  return (
    <ScrollView style={styles.container}>
      <TitleSectionText>
        {Translation.t('socialApp.CreateSearchRequest.stepThree.options')}
      </TitleSectionText>
      <ContainerSwitch>
        <SwitchComponent
          title={Translation.t(
            'socialApp.CreateSearchRequest.stepThree.allowComments',
          )}
          value={allowCommentsCheck}
          onChange={() => setAllowCommentsCheck(!allowCommentsCheck)}
        />
        <SwitchComponent
          title={Translation.t(
            'socialApp.CreateSearchRequest.stepThree.showParticipants',
          )}
          value={showParticipantsCheck}
          onChange={() => setShowParticipantsCheck(!showParticipantsCheck)}
        />
      </ContainerSwitch>
      {/* <Text style={styles.title}>
        {Translation.t(
          'socialApp.CreateSearchRequest.stepThree.publicationDate',
        )}
      </Text> */}
      {/* {publicateImmediately ? (
        <TouchableOpacity
          style={styles.dateTimesContainer}
          onPress={() => setPublicateImmediately(false)}>
          <Text style={styles.publicateImmediatelyText}>
            {Translation.t(
              'socialApp.CreateSearchRequest.stepThree.immediately',
            )}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.dateTimesContainer}>
          <View style={styles.dateTimeView}>
            <DateTimePicker
              testID="dateTimePicker"
              value={publicationDate}
              mode="date"
              textColor="black"
              display="default"
              onChange={e => {
                setPublicationDate(new Date(e.nativeEvent.timestamp));
              }}
              style={{marginVertical: 10}}
            />
          </View>
          <View style={styles.dateTimeView}>
            <DateTimePicker
              testID="dateTimePicker"
              value={publicationDate}
              mode="time"
              textColor="black"
              display="default"
              onChange={e => {
                setPublicationDate(new Date(e.nativeEvent.timestamp));
              }}
              style={{marginVertical: 10}}
            />
          </View>
        </View>
      )} */}
      <View>
        <Text style={styles.title}>
          {Translation.t('socialApp.CreateSearchRequest.stepThree.visibility')}
        </Text>
        <View style={{height: 15}} />
        <Picker
          style={styles.picker}
          selectedValue={visibility}
          themeVariant="dark"
          backgroundColor="blue"
          mode="dialog"
          ViewStyleProp={{backgroundColor: '#0f0'}}
          itemStyle={{
            backgroundColor: '#000',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}
          onValueChange={(itemValue, itemIndex) => setVisibility(itemValue)}>
          {renderDataPicker(visiblePickerData)}
        </Picker>
        <Text style={styles.title}>
          {Translation.t(
            'socialApp.CreateSearchRequest.stepThree.deleteRequest',
          )}
        </Text>
        <View style={{height: 15}} />
        <Picker
          style={styles.picker}
          selectedValue={deleteRequest}
          onValueChange={(itemValue, itemIndex) => setDeleteRequest(itemValue)}>
          {renderDataPicker(deleteRequestPickerData)}
        </Picker>
        <View style={{height: 15}} />
      </View>

      <View style={styles.containerButtons}>
        <View style={{width: 15}} />
        <Button
          buttonStyle={{
            backgroundColor: '#b6b8b6',
            borderRadius: 5,
          }}
          containerStyle={{
            width: wp('45%'),
          }}
          title={Translation.t('socialApp.Buttons.Back')}
          titleStyle={{fontSize: hp('2.5%')}}
          disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SearchRequestStepOne')}
        />
        <View style={{width: 15}} />
        <Button
          buttonStyle={{
            borderRadius: 5,
          }}
          containerStyle={{
            width: wp('45%'),
          }}
          title={Translation.t('socialApp.Buttons.Continue')}
          titleStyle={{fontSize: hp('2.5%')}}
          disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
          onPress={next}
        />
      </View>
      <SpaceView />
    </ScrollView>
  );
};

export default CreateSearchRequestStepThree;

//React & React Native
import React, {useState, useContext} from 'react';

//Libraries
import Toast from 'react-native-toast-message';

//Components
import {CustomButton} from '../../../../shared';

//API
import * as API from '../../../../api/index';

//Translations
import Translation from '../../../../constants/i18n';

//React Native Elements
import {CheckBox, Input} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//Contexts
import {ThemeContext} from 'styled-components';
import {Context as AuthContext} from '../../../../contexts/AuthContext';

//Styles
import {
  PhoneNumberAndButtonView,
  ViewBotton,
  ViewContainer,
} from './ImageProfileScreen.styles';

import {NavigationContext} from '@react-navigation/native';
import ChoosePhoto from '../../../../shared/ImageGallery/ChoosePhoto';
import LinearGradient from 'react-native-linear-gradient';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SpaceView} from '../../../components/PostList/Postlist.styles';
import {ContainerInput} from '../../CreateSearchRequest/Styles/CreateSearchRequestStepOne.styles';
import SwitchView from '../../../../shared/Switch/SwitchView';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SwitchComponent} from '../../../../shared/SwitchComponent/SwitchComponent';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const ImageProfileScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const {state} = useContext(AuthContext);
  const [systemConfigSwitch, setSystemConfigSwitch] = useState([
    {
      title: 'Stadt im Profil anzeigen',
      text: ' ',
      value: state?.user?.is_public,
      index: 0,
      api: () => {},
    },
    {
      title: 'Land im Profil anzeigen',
      text: ' ',
      value: false,
      index: 1,
      api: () => {},
    },
  ]);
  let value = `${new Date(state.user.birthday).getFullYear()} ${
    monthNames[new Date(state.user.birthday).getMonth()]
  } ${new Date(state.user.birthday).getDay()}`;
  const navigation = useContext(NavigationContext);
  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;
  const {updateUser} = useContext(AuthContext);
  const [imageEdit, setImageEdit] = useState(
    state?.user?.profile_pic_hd?.replace(/https/g, 'http'),
  );

  const [gender, setGender] = useState(state.user.gender);
  const [link, setLink] = useState(state.user.website);

  const [address, setAddress] = useState(state?.user?.bio_content);

  const [bio, setBio] = useState(state?.user?.bio_content);
  const [name, setName] = useState(state?.user?.fullname);
  const [username, setUsername] = useState(state?.user?.username);
  const [date, setDate] = useState(value);
  const [dateSend, setDateSend] = useState(
    new Date(state.user.birthday).getTime() / 1000,
  );

  const [selectColor, setSelectColor] = useState([
    '#FDC830',
    '#F37335',
    '#F37310',
  ]);

  let color = [
    ['#4c669f', '#3b5998', '#192f6a'],
    ['#db190b', '#db4d0b', '#912e00'],
    ['#59C173', '#a17fe0', '#5D26C1'],
    ['#FDC830', '#F37335', '#F37310'],
    ['#ED213A', '#93291E', '#93111E'],
    ['#1E9600', '#FFF200', '#FF0000'],
    ['#F37310', '#78ffd6', '#7811d6'],
    ['#5D26C1', '#78ffd6', '#7811d6'],
    ['#B24592', '#FFF200', '#FF0000'],
  ];
  const handleSubmit = async () => {
    const postObject = {
      username: username,
      fullname: name,
      bio_content: bio,
      is_public: systemConfigSwitch[0].value,
      birthday: dateSend,
      gender: gender,
      website: link,
      address: address,
    };
    console.log(postObject);
    const {error, data} = await API.Profile.onEditProfile(postObject);

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'edit profile',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Edit Profile',
      });

      const {error, data} = await API.Profile.myProfile();

      if (!error) {
        updateUser(data.user);
      }

      //Navigate back to Options
      navigation.navigate('User Account');
    }
  };
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, res => {
      if (res.didCancel) {
        console.log('User cancellled');
      } else if (res.errorCode) {
        console.log('Error', res.errorMessage);
      } else {
        const image = res.assets[0];
        console.log(image);
        setImageEdit({uri: image.uri, base64: image.base64});
        handleSubmitImage(image);
      }
    });
  };
  const handleSubmitImage = async imageEdit => {
    const postObject = {
      imageUri: imageEdit?.uri,
    };
    console.log(postObject);
    const {error, data} = await API.Profile.onSetProfilePic(postObject);

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Edit Profile',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Edit Profile',
      });

      const {error, data} = await API.Profile.myProfile();

      if (!error) {
        updateUser(data.user);
      }

      //Navigate back to Options
    }
  };
  const [isDate, setIsDate] = useState(false);
  const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(false);

  return (
    <ScrollView>
      <ViewContainer style={{height: '100%', padding: 10}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={selectColor}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {imageEdit?.uri != null ? (
            <Image
              style={{width: 150, height: 150, borderRadius: 150}}
              source={{uri: imageEdit?.uri}}
            />
          ) : state?.user?.profile_pic_hd == null ? (
            <Text style={{fontSize: 50, color: '#fff'}}>
              {state?.user?.fullname.substring(0, 1)}
            </Text>
          ) : (
            <Image
              style={{width: 150, height: 150, borderRadius: 150}}
              source={{
                uri: state?.user?.profile_pic_hd?.replace(/https/g, 'http'),
              }}
            />
          )}
        </LinearGradient>
        <SpaceView />
        <TouchableOpacity
          onPress={() => {
            openGallery();
          }}>
          <Text style={{color: 'blue', fontSize: 18}}>
            {'Profilbild andern'}
          </Text>
        </TouchableOpacity>
        <SpaceView />
        <Text style={{color: 'gry', fontSize: 18}}>
          {'Dateliformat : JPEG order PNG'}
        </Text>
        <SpaceView />
        <View style={{flexDirection: 'row'}}>
          {color.map(item => {
            return (
              <>
                <View style={{width: 15}} />
                <TouchableOpacity
                  onPress={() => {
                    setSelectColor(item);
                  }}>
                  <View
                    style={{
                      width: 27,
                      height: 27,
                      borderRadius: 27,
                      borderWidth: 2,
                      borderColor:
                        selectColor[0] == item[0] &&
                        selectColor[1] == item[1] &&
                        selectColor[2] == item[2]
                          ? '#2975B5'
                          : '#fff',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={item}
                      style={{width: 20, height: 20, borderRadius: 20}}
                    />
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
        </View>

        <View style={{width: '100%'}}>
          <SpaceView />
          <Text style={styles.title}>BENUTZERINFORMATIONEN</Text>
          <SpaceView />
          <Input
            label="Benutzername"
            multiline={true}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={{width: '100%'}}>
          <Input
            label="Nickname"
            multiline={true}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={{width: '100%'}}>
          <Input
            label={Translation.t('socialApp.UserAccount.birthday')}
            multiline={true}
            placeholder={date}
            onTouchStart={() => {
              setIsDate(true);
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <Input
            label="Bio"
            multiline={true}
            value={bio}
            maxLength={400}
            onChangeText={setBio}
          />
        </View>

        <View style={{width: '100%'}}>
          <Input
            label="link"
            multiline={true}
            maxLength={150}
            onChangeText={setLink}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              paddingLeft: 10,
              fontWeight: 'bold',
            }}>
            {'Location'}
          </Text>
          <GooglePlacesAutocomplete
            placeholder="Search"
            disableScroll
            fetchDetails
            keepResultsAfterBlur
            onChangeText={e => {
              setAddress(e);
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setAddress(data?.address);
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyCu0_rNhV2wN8CGmZR_C2C9ObybaLKI61k',
              language: 'en',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: `100%`,
            alignItems: 'center',
            padding: 15,
          }}>
          <Text style={{fontSize: 14}}>
            {Translation.t('socialApp.UserAccount.male')}
          </Text>
          <CheckBox
            checked={gender == 'male' ? true : false}
            onPress={() => setGender('male')}
            size={30}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <Text style={{fontSize: 14}}>
            {Translation.t('socialApp.UserAccount.female')}
          </Text>
          <CheckBox
            checked={gender == 'female' ? true : false}
            onPress={() => setGender('female')}
            size={30}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <Text style={{fontSize: 14}}>{'none'}</Text>
          <CheckBox
            checked={gender == 'none' ? true : false}
            onPress={() => setGender('none')}
            size={30}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
        <FlatList
          data={systemConfigSwitch}
          renderItem={config => (
            <SwitchView
              config={config.item}
              array={systemConfigSwitch}
              setter={setSystemConfigSwitch}
            />
          )}
        />

        {/* <View style={{width: '100%'}}>
          <Text style={styles.title}>INTERESSEN</Text>
          <Input multiline={true} />
        </View> */}

        {/* <ChoosePhoto pickedImage={imageEdit} setPickedImage={setImageEdit} /> */}
        {isDate ? (
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            value={new Date()}
            onChange={(event, date) => {
              setIsDate(false);

              if (date != null) {
                let value = `${new Date(date).getFullYear()} ${
                  monthNames[new Date(date).getMonth()]
                } ${new Date(date).getDay()}`;
                console.log('date', value);
                setDate(`${value}`);
                setDateSend(new Date(date).getTime() / 1000);
              }
            }}
            textColor="black"
            display="default"
            format={'DD-MM-YYYY'}
            style={{marginVertical: 10}}
          />
        ) : null}
        <ViewBotton>
          <CustomButton
            title={Translation.t('socialApp.UserAccount.save')}
            onPress={handleSubmit}
          />
        </ViewBotton>
        <SpaceView />
      </ViewContainer>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  dateAndTimeTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
    textTransform: 'uppercase',
  },
  dateAndTimeButton: {
    marginTop: hp('3%'),
    marginBottom: hp('-5%'),
    marginLeft: wp('8%'),
  },
  dateTimesContainer: {
    flexDirection: 'row',
    borderColor: '#a5afb7',
    width: wp('77%'),
    height: 50,
    marginLeft: wp('18%'),
  },
  dateTimeView: {
    width: '35%',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 5,
  },
  button: {
    width: wp('48%'),
    marginLeft: wp('47%'),
    marginTop: hp('2%'),
  },
});

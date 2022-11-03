//React & Reac Native
import React, {useContext, useState} from 'react';
import {Linking, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'; //Libraries
import {Button, Input} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Components
import {SwitchComponent} from '../../../../shared/SwitchComponent/SwitchComponent';

//Icons
import {OpenLink} from '../../../../shared/Icons/index';

//Translation
import Translation from '../../../../constants/i18n';

//Context
import {CreateSearchRequestContext} from '../../../../contexts/CreateSearchRequestContext';
import DateTimePicker from '@react-native-community/datetimepicker';

//Styles
import {TitleSectionText} from '../Styles/CreateSearchRequest.styles';
import {
  ContainerInput,
  PlaceholderText,
} from '../Styles/CreateSearchRequestStepOne.styles';
import {
  PlaceholderDateText,
  ContainerScrollView,
  ContainerDateSection,
  ContainerDateInput,
  ContainerSwitch,
  ContainerMapDescription,
  MapDescriptionText,
  ContainerOpenLinkButton,
  MoreInformationText,
  ContainerPriceSection,
  DescriptionText,
  ContainerButtons,
} from '../Styles/CreateSearchRequestStepTwo.styles';
import {SpaceView} from '../../../components/PostList/Postlist.styles';
import {SearchRequest} from '../../../../api';
import {showErrorMessage} from '../../../../utils/MessageToast/MessageToast';
import {Context as PostContext} from '../../../../contexts/PostContext';
import {ProfileContext} from '../../../../contexts/ProfileContext';
import Toast from 'react-native-toast-message';

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
const CreateSearchRequestStepTwo = ({navigation}) => {
  const {
    date,
    setDate,
    hour,
    setHour,
    onlineSwitch,
    setOnlineSwitch,
    freeSwitch,
    setFreeSwitch,
    paidSwitch,
    onlineDescription,
    setOnlineDescription,
    place,
    setPlace,
    setPaidSwitch,
    title,
    description,
    category,
    pickedImage,
    allowCommentsCheck,
    people,
    cleanData,
  } = useContext(CreateSearchRequestContext);
  const [isDate, setIsDate] = useState(false);
  const [isTime, setIsTime] = useState(false);
  const [dateShow, setDateShow] = useState(false);

  const [valueData, setValueDate] = useState(false);
  //TODO Maximum 1 year in the future, and NO past

  const handlerFree = () => {
    if (!freeSwitch) {
      setFreeSwitch(true);
      setPaidSwitch(false);
    } else {
      setFreeSwitch(false);
    }
  };

  const handlerPaid = () => {
    if (!paidSwitch) {
      setPaidSwitch(true);
      setFreeSwitch(false);
    } else {
      setPaidSwitch(false);
    }
  };
  const [loading, setLoading] = useState(false);
  const {loadPosts} = useContext(PostContext);
  const [publicateImmediately, setPublicateImmediately] = useState(true);
  const {reloadSearchRequests, setReloadSearchRequests} =
    useContext(ProfileContext);
  const createSearchRequest = async () => {
    if (date) {
      setLoading(true);
      let piad = 0;
      if (!paidSwitch) {
        piad = 100;
      } else {
        piad = 0;
      }
      let arrayImage = [];
      arrayImage.push(pickedImage)
      let dataJ = {
        title,
        content: description + category,
        imageUri: arrayImage,
        required_people: people,
        mentioned_users: [],
        status: 'draft',
        publication_date: date,
        search_request_price: piad,
        is_virtual: onlineSwitch,
        search_request_at: date,
        options: {
          comment: allowCommentsCheck,
        },
      };

      SearchRequest.createSearchRequest(dataJ).then(res => {
        setLoading(false);
        console.log('createSearchRequest', res);
        if (res == false) {
          showErrorMessage();
        } else {
          Toast.show({
            type: 'success',
            text1: Translation.t(
              'socialApp.CreateSearchRequest.message.success',
            ),
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
    } else {
      Toast.show({
        type: 'error',
        text1: 'Fields marked with an asterisk must be filled.',
      });
    }
  };
  let yarNext = new Date();
  yarNext = yarNext.getFullYear();

  return (
    <ContainerScrollView>
      <TitleSectionText>
        {Translation.t('socialApp.CreateSearchRequest.stepTwo.information')}
      </TitleSectionText>
      <ContainerDateSection>
        <ContainerDateInput>
          <PlaceholderDateText>
            {Translation.t('socialApp.CreateSearchRequest.stepTwo.when')}*
          </PlaceholderDateText>
          <Input
            placeholder={'Mi, 26 OKT 2020'}
            value={dateShow}
            onChange={setDate}
            onTouchStart={() => {
              setIsDate(true);
            }}
          />
        </ContainerDateInput>
        <ContainerDateInput>
          <PlaceholderDateText>
            {Translation.t('socialApp.CreateSearchRequest.stepTwo.time')}
          </PlaceholderDateText>
          <Input
            placeholder={'8:00'}
            onTouchStart={() => {
              setIsTime(true);
            }}
            value={hour}
            onChange={setHour}
          />
        </ContainerDateInput>
      </ContainerDateSection>

      <ContainerSwitch>
        <SwitchComponent
          title={Translation.t(
            'socialApp.CreateSearchRequest.stepTwo.takePlaceOnline',
          )}
          value={onlineSwitch}
          onChange={() => setOnlineSwitch(!onlineSwitch)}
        />
      </ContainerSwitch>
      {onlineSwitch && (
        <ContainerInput>
          <PlaceholderDateText>
            {Translation.t(
              'socialApp.CreateSearchRequest.stepTwo.onlineDescription',
            )}
          </PlaceholderDateText>
          <Input
            value={onlineDescription}
            onChangeText={setOnlineDescription}
          />
        </ContainerInput>
      )}

      <ContainerInput>
        <PlaceholderDateText>
          {Translation.t('socialApp.CreateSearchRequest.stepTwo.place')}
        </PlaceholderDateText>
        {/* <Input value={place} onChangeText={setPlace} /> */}
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAdqdzd1f8KlAtrQg1_JThChwX02hKbYb0',
            language: 'en',
          }}
        />
      </ContainerInput>
      <ContainerMapDescription>
        <MapDescriptionText>
          {Translation.t(
            'socialApp.CreateSearchRequest.stepTwo.mapDescriptionText',
          )}
        </MapDescriptionText>
        <ContainerOpenLinkButton>
          <OpenLink width={35} height={35} />
        </ContainerOpenLinkButton>
        <MoreInformationText
          onPress={async () =>
            await Linking.openURL(
              `https://maps.google.com/maps/search/${place}`,
            )
          }>
          {Translation.t('socialApp.CreateSearchRequest.stepTwo.showMap')}
        </MoreInformationText>
      </ContainerMapDescription>

      <ContainerPriceSection>
        <TitleSectionText>
          {Translation.t('socialApp.CreateSearchRequest.stepTwo.price')}
        </TitleSectionText>
        <ContainerSwitch>
          <SwitchComponent
            title={Translation.t('socialApp.CreateSearchRequest.stepTwo.free')}
            value={freeSwitch}
            onChange={() => handlerFree()}
          />
        </ContainerSwitch>
        <ContainerSwitch>
          <SwitchComponent
            title={Translation.t('socialApp.CreateSearchRequest.stepTwo.paid')}
            value={paidSwitch}
            onChange={() => handlerPaid()}
          />
        </ContainerSwitch>
      </ContainerPriceSection>
      <PlaceholderText>
        {Translation.t('socialApp.CreateSearchRequest.stepTwo.price')}
      </PlaceholderText>
      <DescriptionText>
        {Translation.t('socialApp.CreateSearchRequest.stepTwo.moreInformation')}
      </DescriptionText>
      <ContainerInput>
        <Input />
      </ContainerInput>

      <ContainerButtons>
        <Button
          buttonStyle={{
            backgroundColor: '#b6b8b6',
            borderRadius: 5,
          }}
          containerStyle={{
            width: wp('45%'),
          }}
          title={Translation.t('socialApp.Buttons.Back')}
          z
          titleStyle={{fontSize: hp('2.5%')}}
          disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SearchRequestStepOne')}
        />
        <Button
          buttonStyle={{
            borderRadius: 5,
          }}
          containerStyle={{width: '45%', backgroundColor: '#b6b8b6'}}
          title={Translation.t('socialApp.Buttons.Save')}
          titleStyle={{fontSize: hp('2.5%')}}
          disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
          onPress={createSearchRequest}
          loading={loading}
        />
      </ContainerButtons>
      {isDate ? (
        <DateTimePicker
          testID="dateTimePicker"
          mode="date"
          value={new Date()}
          onChange={(event, dateTimePicker) => {
            setIsDate(false);

            let date = new Date(dateTimePicker);
            const r = Date.UTC(
              date.getUTCFullYear(),
              date.getUTCMonth(),
              date.getUTCDate(),
              date.getUTCHours(),
              date.getUTCMinutes(),
              date.getUTCSeconds(),
              date.getUTCMilliseconds(),
            );

            setDate(`${Math.round(r / 1000)}`);
            const dateString =
              date.getDate() +
              ' ' +
              monthNames[date.getMonth()] +
              ' ' +
              date.getFullYear();
            setDateShow(`${dateString}`);
          }}
          textColor="black"
          display="default"
          format={'DD-MM-YYYY'}
          style={{marginVertical: 10}}
          minimumDate={new Date()}
          maximumDate={new Date(parseInt(yarNext) + 1 + '')}
        />
      ) : null}
      {isTime ? (
        <DateTimePicker
          testID="dateTimePicker"
          mode="time"
          value={new Date()}
          onChange={(event, date) => {
            setIsTime(false);
            console.log('date', new Date(date).toISOString());
            let value = `${new Date(date).getHours()}:${new Date(
              date,
            ).getMinutes()}`;
            console.log('date', value);
            setHour(`${value}`);
          }}
          textColor="black"
          display="default"
          format={'DD-MM-YYYY'}
          style={{marginVertical: 10}}
          minimumDate={new Date()}
          maximumDate={new Date(parseInt(yarNext) + 1 + '')}
        />
      ) : null}
      <SpaceView />
    </ContainerScrollView>
  );
};

export default CreateSearchRequestStepTwo;

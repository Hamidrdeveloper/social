//React & React Native
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {Avatar, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Icon
import {Message} from '../../../../shared/Icons/index';

//Navigation
import {useNavigation} from '@react-navigation/native';

//Utils
import {searchRequestData} from '../Utils/SearchRequest.utils';
import {
  fullDate,
  fullDiffDate,
} from '../../../../utils/DateFormatter/DateFormatter';

//Translation
import Translation from '../../../../constants/i18n';
import {
  EventDetailContainer,
  PersonNeededText,
} from '../../../components/MinimizedEvent/MinimizedEvent.styles';

//Styles
const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    maxHeight: hp('52%'),
    backgroundColor: 'white',
  },
  hashtag: {
    color: colorSchema.general.lightBlue,
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  subtitle: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  description: {
    fontSize: wp('4.5%'),
    marginBottom: hp('2%'),
  },
  horizontalLine: {
    borderTopColor: colorSchema.general.lightGray,
    borderTopWidth: 0.2,
    width: wp('90%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('3%'),
  },
  locationText: {
    fontSize: wp('4.5%'),
  },
  avatarContainer: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  avatar: {
    marginRight: wp('2%'),
  },
  peopleInvitedMore: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1.2,
  },
  listPeople: {
    marginTop: hp('2%'),
    color: colorSchema.general.lightBlue,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: hp('2%'),
  },
  buttonsContainer: {
    marginBottom: hp('2%'),
    flexDirection: 'row',
  },
  participateButton: {
    width: wp('70%'),
    marginRight: wp('3%'),
  },
  chatButton: {
    width: wp('15%'),
    height: hp('4%'),
  },
});

var dateMoreOneDay = new Date();
dateMoreOneDay.setDate(dateMoreOneDay.getDate() + 5);

const SearchRequestDescription = ({searchRequestData}) => {
  const navigation = useNavigation();
  const peopleInvited = searchRequestData?.searchRequestData;
  const dateEvent = dateMoreOneDay;

  const renderAvatar = people => {
    return (
      <View style={styles.avatar}>
        <Avatar size="small" rounded title="MD" source={people.avatar} />
      </View>
    );
  };

  const renderMorePeople = () => {
    return (
      <>
        {peopleInvited.slice(0, 8).map(people => {
          return renderAvatar(people);
        })}
        <View style={styles.peopleInvitedMore}>
          <Text>+{peopleInvited.length - 8}</Text>
        </View>
      </>
    );
  };

  const renderPeople = () => {
    return (
      <View style={styles.avatarContainer}>
        {peopleInvited?.length > 8 && renderMorePeople()}
        {peopleInvited?.length <= 8 &&
          peopleInvited.map(people => {
            return renderAvatar(people);
          })}
      </View>
    );
  };

  const renderHashtag = () => {
    let hashtags = '';
    if (searchRequestData?.tags?.length) {
      searchRequestData.tags.map(hashtag => {
        hashtags = hashtags + ` #${hashtag}`;
      });
    }
    return hashtags;
  };

  return (
    <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
      <ScrollView style={styles.container}>
        {/* Description */}
       
        <Text numberOfLines={3} style={styles.title}>
          {searchRequestData?.content}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {searchRequestData?.content}
        </Text>
        {/* Date information */}
        <Text numberOfLines={3} style={styles.subtitle}>{`${Translation.t(
          'socialApp.SearchRequest.description.wantedAre',
        )} ${searchRequestData?.quantityPeopleWanted} ${Translation.t(
          'socialApp.SearchRequest.description.people',
        )}`}</Text>
        
        <Text numberOfLines={3} style={styles.description}>{`${Translation.t(
          'socialApp.SearchRequest.description.in',
        )} ${fullDiffDate(dateEvent, new Date())}`}</Text>
        <View numberOfLines={3} style={styles.horizontalLine} />
        <Text numberOfLines={3} style={styles.subtitle}>
          {Translation.t('socialApp.SearchRequest.description.dateAndTime')}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {fullDate(dateMoreOneDay)}
        </Text>
        
        {/* Place information */}
        <Text numberOfLines={3} style={styles.subtitle}>
          {Translation.t('socialApp.SearchRequest.description.place')}
        </Text>
        <Text numberOfLines={3} style={styles.locationText}>
          {searchRequestData?.place?.address}
        </Text>
        <Text numberOfLines={3} style={styles.locationText}>
          {searchRequestData?.place?.city}
        </Text>
        <Text numberOfLines={3} style={styles.locationText}>
          {searchRequestData?.place?.country}
        </Text>
        <EventDetailContainer>
          <PersonNeededText>
            {searchRequestData?.required_people > 10
              ? '10+'
              : searchRequestData?.required_people}{' '}
            {Translation.t('socialApp.Event.Person')}
            {'  '}
          </PersonNeededText>
          <PersonNeededText>
            {searchRequestData?.required_people > 10
              ? '10+'
              : searchRequestData?.required_people}{' '}
            {Translation.t('socialApp.Event.Person')}
            {'  '}
          </PersonNeededText>
          {/* <EventCountDown>
          {` in ${dateFormatter(date, false, true)}`}
        </EventCountDown> */}
          {/* <ReportLabelContainer>
          <ReportModal
            type={
              searchRequest?.user?.id !== state?.user?.id
                ? 'search'
                : 'deleteSearchRequest'
            }
            reference={searchRequest?.user?.username}
            id={searchRequest?.id}
          />
        </ReportLabelContainer> */}
        </EventDetailContainer>
        {/* Price information */}
        <Text
          numberOfLines={3}
          style={[styles.subtitle, {marginTop: hp('2%')}]}>
          {Translation.t('socialApp.SearchRequest.description.price')}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {searchRequestData?.priceDescription}
        </Text>
        {/* People information */}
        <Text numberOfLines={3} style={[styles.subtitle]}>
          {Translation.t('socialApp.SearchRequest.description.participants')}
        </Text>
        
        {renderPeople()}
        <Text
          style={styles.listPeople}
          numberOfLines={3}
          onPress={() => {
            navigation.navigate('FolderNavigators', {
              screen: 'SearchRequestParticipants',
              params: {participants: searchRequestData.people},
            });
          }}>
          {Translation.t(
            'socialApp.SearchRequest.description.editParticipants',
          )}
        </Text>
        
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.participateButton}
            title={Translation.t(
              'socialApp.SearchRequest.description.participate',
            )}
          />
          <View style={{width: 20}} />
          <Button
            style={styles.chatButton}
            icon={<Message height={hp('3%')} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchRequestDescription;

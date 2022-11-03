//React & React Native
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

//Libraries
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

// Shared Components
import {ReportLabel, ReportModal} from '../../../shared';

//Components
import PostImage from '../ComponentsPost/PostImage/PostImage';
import Description from '../../../shared/Description/Description';

//i18n
import Translation from '../../../constants/i18n';

//Context
import {Context as AuthContext} from '../../../contexts/AuthContext';

//Utils
import {dateFormatter} from '../../../utils/DateFormatter/DateFormatter';

import {
  MinimizedPostContainer,
  ImageContainer,
  EventDetailContainer,
  ReportLabelContainer,
  PersonNeededText,
  EventCountDown,
  TitleImageText,
} from './MinimizedEvent.styles';
import {PostInfo, PostInteraction} from '../ComponentsPost';
import {SpaceView} from '../PostList/Postlist.styles';
import {SliderBox} from 'react-native-image-slider-box';
import { Dimensions } from 'react-native';

const MinimizedEvent = ({data, searchRequest}) => {
  const navigation = useNavigation();

  const {state} = useContext(AuthContext);

  //Delete when the searchRequest will have DateTime
  var date = new Date();
  date.setDate(date.getDate() + 1);
  console.log('searchRequest', searchRequest);
  return (
    <>
      <SpaceView />

      <View
        style={{
          padding: 2,
          borderRadius: 10,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <MinimizedPostContainer>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('SearchRequestScreen', {
                  searchRequestId: searchRequest?.id,
                  hideNavigation: true,
                })
              }>
              <ImageContainer>
                {/* <PostImage
                  uri={searchRequest?.medias[0]?.url?.replace(/https/g, 'http')}
                  style={style.postImageStyle}
                /> */}
                <SliderBox
                  images={searchRequest?.medias.map(x => {
                    return x.url?.replace(/https/g, 'http');
                  })}
                  ImageComponentStyle={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius:8,
                  }}
                  parentWidth={Dimensions.get('window').width-35}
                  sliderBoxHeight={180}
                  onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                  }
                />
                <TitleImageText numberOfLines={2}>
                  {searchRequest?.content}
                </TitleImageText>
              </ImageContainer>
            </TouchableWithoutFeedback>
            <View style={{padding: 10}}>
              <PostInfo
                profileId={searchRequest?.user?.id}
                username={searchRequest.user?.username}
                profileImage={searchRequest.user?.profile_pic}
                datePosted={searchRequest.user?.datePosted}
                post={{item: searchRequest}}
              />
              <PostInteraction
                id={searchRequest?.id}
                commentsCount={searchRequest?.comments_count}
                likesCount={searchRequest?.likes_count}
                liked={searchRequest?.liked}
                type={'post'}
                post={searchRequest}
              />
            </View>
            <Description description={searchRequest?.content} />

            <EventDetailContainer>
              <PersonNeededText>
                {searchRequest?.required_people > 10
                  ? '10+'
                  : searchRequest?.required_people}{' '}
                {Translation.t('socialApp.Event.Person')}
                {'  '}
              </PersonNeededText>
              <PersonNeededText>
                {searchRequest?.required_people > 10
                  ? '10+'
                  : searchRequest?.required_people}{' '}
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
          </MinimizedPostContainer>
        </View>
      </View>
      <SpaceView />
    </>
  );
};

const style = StyleSheet.create({
  postImageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default MinimizedEvent;

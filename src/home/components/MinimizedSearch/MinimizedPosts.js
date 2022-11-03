import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PostImage from '../ComponentsPost/PostImage/PostImage';
import Description from '../../../shared/Description/Description';

// Shared Components
import {ReportLabel, ReportModal} from '../../../shared';

//i18n
import Translation from '../../../constants/i18n';

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
} from './MinimizedPosts.styles';

const MinimizedPosts = ({search}) => {
  return (
    <MinimizedPostContainer>
      <ImageContainer>
        <PostImage photoIndex={2} style={style.postImageStyle} />
        <TitleImageText>{search.title}</TitleImageText>
      </ImageContainer>
      <Description />
      <EventDetailContainer>
        <PersonNeededText>
          {search.people} {Translation.t(`socialApp.Event.Person`)}
        </PersonNeededText>
        <EventCountDown>
          {` in ${dateFormatter(search.eventDate, false, true)}`}
        </EventCountDown>
        <ReportLabelContainer>
            <ReportModal type={'search'} reference={search.username} id={search.id}/>
        </ReportLabelContainer>
      </EventDetailContainer>
    </MinimizedPostContainer>
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

export default MinimizedPosts;

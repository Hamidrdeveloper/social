//React & React Native
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//Libraries
import {Avatar, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

//Styles Component
import {
  ContainerView,
  ProfileAndMessageView,
  AvatarView,
  MessageText,
  UsernameText,
  DateText,
  ButtonsView,
  NotificationImage,
} from '../styles/Notification.styles';

//Shared Componentes
import {ToProfileTouchableContainer} from '../../../../shared';
import { dateFormatter } from '../../../../utils/DateFormatter/DateFormatter';

const OtherNotification = ({notification}) => {
  const type = notification.meta_data[0].type;
  const username = notification.meta_data[0].text;
  const followerId = notification.user_id;
  const createdAt = notification.created_at;
  const message = notification.content;

  return (
    <ContainerView>
      <ProfileAndMessageView>
        <MessageText>
          <ToProfileTouchableContainer profileId={followerId}>
            <UsernameText>@{username} </UsernameText>
          </ToProfileTouchableContainer>
        
          <UsernameText>  {type} </UsernameText>
          <DateText>{dateFormatter(createdAt)}</DateText>
        </MessageText>
       
      </ProfileAndMessageView>
    </ContainerView>
  );
};

export default OtherNotification;
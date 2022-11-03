//React & React Native
import React, {useEffect, useState} from 'react';
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

//Translation
import Translation from '../../../../constants/i18n';

//API
import {Follower} from '../../../../api/index';
import {profileImages} from '../../../../assets/Images/ProfileImages/Images';
import {getProfilePicUrl} from '../../../../api/profile';
import {dateFormatter} from '../../../../utils/DateFormatter/DateFormatter';
import ProfileAvatar from './ProfileAvatar';

const FollowerNotification = ({notification}) => {
  const [profilePicExists, setProfilePicExists] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  const type = notification.meta_data[0].type;
  const username = notification.meta_data[0].text;
  const followerId = notification.meta_data[0].id;
  const createdAt = notification.created_at;

  useEffect(() => {
    const getPicUrl = async () => {
      const picUrl = await getProfilePicUrl(username);
      if (picUrl !== null) {
        setProfilePicUrl(picUrl);
        setProfilePicExists(true);
      }
    };
    getPicUrl();
  }, []);

  const [declineLoading, setDeclineLoading] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const acceptHandler = async id => {
    setAcceptLoading(true);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: data?.errorMessage,
      });
    }
    setAcceptLoading(false);
  };

  //This is a comment because the backend does not have the endpoint this
  // const declineHandler = async id => {
  //   setDeclineLoading(true);
  // const {error, data} = await Follower.removeFollower({userId: id});
  //   if (error) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: data?.errorMessage,
  //     });
  //   }
  //   setDeclineLoading(false);
  // };

  return (
    <ContainerView>
      <ProfileAndMessageView>
        {profilePicExists && (
          <ToProfileTouchableContainer profileId={followerId}>
            <AvatarView>
              <Avatar
                size={20}
                rounded
                
                title="MD"
                source={{uri: profilePicUrl}}
              />
            </AvatarView>
          </ToProfileTouchableContainer>
        )}
        <MessageText>
          <ToProfileTouchableContainer profileId={followerId}>
            <UsernameText>@{username} </UsernameText>
          </ToProfileTouchableContainer>
          {type === 'new_follower' &&
            Translation.t('socialApp.Friendship.startedFollowingMessage')}
          {type === 'follow_request' &&
            Translation.t('socialApp.Friendship.inviteMessage')}
          {type === 'follow_req_accepted' &&
            Translation.t('socialApp.Friendship.followRequestAcceptedMessage')}
        </MessageText>
        <DateText>{dateFormatter(createdAt)}</DateText>
      </ProfileAndMessageView>
      {type === 'follow_request' && (
        <ButtonsView>
          {/* <Button
            style={{ width: wp('42%') }}
            buttonStyle={{ backgroundColor: '#DEDEDE', marginRight: wp('2%') }}
            title={Translation.t('socialApp.Friendship.button.decline')}
            titleStyle={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}
            loading={declineLoading}
            onPress={async () => await declineHandler(followerId)}
          /> */}
          <Button
            style={{width: wp('42%'), marginLeft: wp('5%')}}
            titleStyle={{fontSize: 15, fontWeight: 'bold'}}
            title={Translation.t('socialApp.Friendship.button.accept')}
            loading={acceptLoading}
            onPress={async () => await acceptHandler(followerId)}
          />
        </ButtonsView>
      )}
    </ContainerView>
  );
};

export default FollowerNotification;

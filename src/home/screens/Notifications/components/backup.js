//React & React Native
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//Libraries
import {Avatar, Button, Image} from 'react-native-elements';
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

const FollowerRequestNotification = ({notification}) => {
  console.log('>>>>>>>>>> notification', notification);
  console.log('notification', notification);
  const username = notification.meta_data[0].text;
  const profilePicExists = false;

  const [declineLoading, setDeclineLoading] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const acceptHandler = async id => {
    setAcceptLoading(true);
    const {error, data} = await Follower.acceptFollower({userId: id});
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
      {/* friendship notification */}
      <ProfileAndMessageView>
        <ToProfileTouchableContainer username>
          <AvatarView>
            {notification?.profileImage && (
              <Avatar
                size={20}
                rounded
                title="MD"
               
                source={profileImages[notification?.profileImage].image}
              />
            )}
          </AvatarView>
        </ToProfileTouchableContainer>
        <MessageText>
          <ToProfileTouchableContainer>
            <UsernameText>@{notification?.username} </UsernameText>
          </ToProfileTouchableContainer>

          {notification?.message}
          {type === 'follow_request' && (
            <>{Translation.t('socialApp.Friendship.inviteMessage')}</>
          )}
        </MessageText>
        <DateText>vor 2 Std</DateText>
      </ProfileAndMessageView>
      {notification?.type === 'friendship' && (
        <ButtonsView>
          {/* <Button
            style={{width: wp('42%')}}
            buttonStyle={{backgroundColor: '#DEDEDE'}}
            title={Translation.t('socialApp.Friendship.button.decline')}
            titleStyle={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}
            loading={declineLoading}
            onPress={async () => await declineHandler(notification?.id)}
          /> */}
          <Button
            style={{width: wp('42%'), marginLeft: wp('5%')}}
            titleStyle={{fontSize: 15, fontWeight: 'bold'}}
            title={Translation.t('socialApp.Friendship.button.accept')}
            loading={acceptLoading}
            onPress={async () => await acceptHandler(notification?.id)}
          />
        </ButtonsView>
      )}
      {notification?.image && (
        <NotificationImage source={profileImages[notification?.image].image} />
      )}
    </ContainerView>
  );
};

export default FollowerRequestNotification;

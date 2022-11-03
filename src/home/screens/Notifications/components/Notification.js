//React & React Native
import React, {useState} from 'react';

//Libraries
import Toast from 'react-native-toast-message';

//Translation
import Translation from '../../../../constants/i18n';

//API
import {Follower} from '../../../../api/index';
import {profileImages} from '../../../../assets/Images/ProfileImages/Images';

// Notification Components
import FollowerNotification from './FollowerNotification';
import OtherNotification from './OtherNotification';

const Notification = ({notification}) => {
  const type = notification.meta_data[0].type;

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
  0;

  return (
    <>
      {(type === 'new_follower' ||
        type === 'follow_request' ||
        type === 'follow_req_accepted') && (
        <FollowerNotification notification={notification} />
      )}
      {type !== 'new_follower' &&
        type !== 'follow_request' &&
        type !== 'follow_req_accepted' && (
          <OtherNotification notification={notification} />
        )}
    </>
  );
};

export default Notification;

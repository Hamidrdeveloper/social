//React & React Native
import React, {useEffect, useState} from 'react';

//Components
import ProfileScreen from './ProfileScreen';

//API
import {Profile} from '../../../api';

//Utils
import {showErrorMessage} from '../../../utils/MessageToast/MessageToast';
import ProfileScreenTwo from './PeofileScreenTwo';

const ExternalProfile = ({route}) => {
  const [profileData, setProfileData] = useState({});
  const userId = route.params.profileId;
  const post = route?.params?.post;
  const follow = route?.params?.follow;

  console.log('ExternalProfile', post);
  console.log('ExternalProfile==>profileData', profileData);

  useEffect(() => {
    // getProfileData();
    setProfileData(route.params.profile);
  }, [route]);

  const getProfileData = async () => {
    const {error, data} = await Profile.getProfile({userId});
    if (error) {
      showErrorMessage();
    } else {
    }
  };

  return profileData && post ? (
    <ProfileScreen
      follow={follow}
      profileData={route.params.profile}
      post={post}
    />
  ) : (
    <ProfileScreenTwo follow={follow} profileData={route.params.profile} />
  );
};

export default ExternalProfile;

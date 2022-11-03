//React & React Native
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//Libraries
import {Avatar} from 'react-native-elements';

//API
import { searchProfileByUsernameWithAxios } from '../../../../api/profile';

export default ProfileAvatar = ({username}) => {
  const getProfilePicUrl = async (username) => {
    const {error, data} = await searchProfileByUsernameWithAxios(username);
    if (error === true) {
      return;
    }
       profilePicUrl = data.user.profile_pic;
    if (profilePicUrl !== null) {
      profilePicUrl = data.user.profile_pic;;
    } else {
      profilePicExists = true;
    }
    return (
      <>
        <Avatar
          size={20}
          rounded
          title="MD"
          
          source={profilePicUrl}
        />
      </>
    )
  }
  return (getProfilePicUrl(username))
};
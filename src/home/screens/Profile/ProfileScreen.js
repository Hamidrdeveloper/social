//React & React Native
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//Components
import {ButtonsProfileScreen, Biography, PrivateProfile} from './Components';

//Style Components
import {
  ProfileBodyContainer,
  ProfileTabContainer,
  ScrollViewContainer,
} from './ProfileScree.styles';

//Styles
import {HrView} from './Components/Biography/Biography.styles';

//Context
import HeaderProfile from './Components/HeaderProfile/HeaderProfile';
import {profileImages} from '../../../assets/Images/ProfileImages/Images';
import ProfileTab from './Components/ProfileTab/ProfileTab';

const ProfileScreen = ({profileData, follow,personalView = false,post}) => {
  const navigation = useNavigation();
  console.log('profileData ', profileData);
  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <HeaderProfile
        profile={profileData}
        navigation={navigation}
        personalView={personalView}
        profileId={profileData?.id}
       
      />
      <ProfileBodyContainer>
        {!personalView && (
          <>
            <ButtonsProfileScreen
              navigation={navigation}
              userId={profileData?.id}
              post={post}
              follow={follow}
            />
            <HrView />
          </>
        )}

        {!false ? (
          <>
          {profileData?.bio_content.length>2 ?
            <Biography profile={profileData} personalView={personalView} />
            :null}
            <ProfileTabContainer>
              <ProfileTab profile={profileData} />
            </ProfileTabContainer>
          </>
        ) : (
          <>
            <PrivateProfile />
          </>
        )}
      </ProfileBodyContainer>
    </ScrollViewContainer>
  );
};

export default ProfileScreen;

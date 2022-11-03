import React, {useContext} from 'react';

import {Context as AuthContext} from '../../../contexts/AuthContext';

import ProfileScreen from './ProfileScreen';

const PersonalProfile = () => {
  const {state: authState} = useContext(AuthContext);
  return <ProfileScreen profileData={authState?.user} personalView={true} />;
};

export default PersonalProfile;

//React & React Native
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Profile} from '../../api';
import {showErrorMessage} from '../../utils/MessageToast/MessageToast';
import {myFollowers} from '../../api/profile';
import {Context as AuthContext} from '../../contexts/AuthContext';

const ToProfileTouchableContainer = props => {
  const navigation = useNavigation();
  const {state} = useContext(AuthContext);

  const loadProfile = async () => {
    const id = props.profileId;
    if (state.user.id == id) {
      navigation.navigate('PersonalProfile', {
        profileId: props.profileId,
        post: props?.post,
        follow: false,
      });
    } else {
      Profile.getProfile(id).then(res => {
        console.log('ToProfileTouchableContainer', res);

        if (res.data.user == null) {
          showErrorMessage();
        } else {
          myFollowers().then(x => {
            if (x.length == 0) {
              navigation.navigate('ExternalProfile', {
                profileId: props.profileId,
                profile: res.data.user,
                post: props?.post,
                follow: false,
              });
            } else {
              x.forEach(element => {
                if (element.id == props.profileId) {
                  navigation.navigate('ExternalProfile', {
                    profileId: props.profileId,
                    profile: res.data.user,
                    post: props?.post,
                    follow: true,
                  });
                } else {
                  navigation.navigate('ExternalProfile', {
                    profileId: props.profileId,
                    profile: res.data.user,
                    post: props?.post,
                    follow: false,
                  });
                }
              });
            }
          });
        }
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        loadProfile();
      }}
      style={props.style}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ToProfileTouchableContainer;

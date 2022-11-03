import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Back, Coffe, Delete, Down, Drop} from '../../../shared/Icons';
import {
  NameText,
  UserDataWraper,
  UserInfoContainerView,
  UserNameText,
} from './BlockedUser.styles';

export const BlockedUser = ({date, user, deleteUser, image}) => {
  const onClick = () => {
    deleteUser();
  };

  return (
    <UserInfoContainerView>
      <Avatar size="medium" rounded title="MD" avatarStyle={{backgroundColor:"#eee"}} source={{uri: image}} />
      <UserDataWraper>
        <NameText>{user}</NameText>
        <UserNameText>{date}</UserNameText>
      </UserDataWraper>
      <TouchableOpacity onPress={deleteUser}>
        <View style={{marginLeft: 143, marginTop: 10}}>
          <Delete
            onPress={() => {
              onClick();
            }}
          />
        </View>
      </TouchableOpacity>
    </UserInfoContainerView>
  );
};

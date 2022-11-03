import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Drop} from '../../../../shared/Icons';
import {
  NameText,
  UserDataWraper,
  UserInfoContainerView,
  UserNameText,
} from './BlockedUserScreen.styles';

import {Context as BlockedUserContext} from '../../../../contexts/BlockedUserContext';
import {BLOCKED_USER} from '../../../../assets/blockedUsers';
import {getBlockedUsers} from '../../../../api/blockedusers';
import {BlockedUser} from '../../../components/BlockedUser/BlockedUser';

export const BlockedUserScreen = () => {
  const {state, loadBlockedUser, unBlockedUser} =
    useContext(BlockedUserContext);

  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    loadBlockedUser();
  };
  useEffect(() => {
    setUsers(state.blockedUser);
  }, [state]);
  const deleteUser = id => {
    unBlockedUser(id);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View>
      {/* <Button title='Probando' onPress={() => console.log(state)}/> */}
      {users.map(user => (
        <View style={{marginTop: 20}}>
          <BlockedUser
            date={user.username}
            user={user.fullname}
            image={user?.profile_pic?.replace(/https/g, 'http')}
            deleteUser={() => deleteUser(user.id)}
          />
        </View>
      ))}
    </View>
  );
};

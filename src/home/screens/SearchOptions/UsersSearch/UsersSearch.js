import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ToProfileTouchableContainer} from '../../../../shared';
import {Avatar} from 'react-native-elements';
import {profileImages} from '../../../../assets/Images/ProfileImages/Images';
import {Context as SearchContext} from '../../../../contexts/SearchContext';
import {searchUsers} from '../../../../api/search';

const UsersSearch = () => {
  const {state} = useContext(SearchContext);
  const [users, setUsers] = useState([]);
  let keyword = state.keyword;

  const searchUser = async keyword => {
    const data = keyword ? await searchUsers(keyword) : null;
    setUsers(data.users);
  };

  useEffect(() => {
    searchUser(keyword);
  }, [state.keyword]);

  useEffect(() => {
    console.log('users', users);
  }, [users]);

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users && (
          <>
            {users.map(user => (
              <UserComponent profile={user} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const UserComponent = ({profile}) => {
  return (
    <View style={{marginTop: 15}}>
      <ToProfileTouchableContainer
        username={profile?.username}
        profileId={profile?.id}
        style={{flexDirection: 'row'}}>
        <Avatar
          size="medium"
          rounded
          title="MD"
          source={
            profile?.profile_pic
              ? {
                  uri: profile?.profile_pic?.replace(/https/g, 'http'),
                }
              : {
                  uri: 'https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png',
                }
          }
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 10,
          }}>
          {profile?.username}
        </Text>
      </ToProfileTouchableContainer>
    </View>
  );
};

export default UsersSearch;

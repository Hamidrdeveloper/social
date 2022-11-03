//React & React Native
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

//Libraries
import {Avatar} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Components
import {showErrorMessage} from '../../../../../utils/MessageToast/MessageToast';

//Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    height: hp('7%'),
    marginTop:15,
    marginBottom: hp('1.2%'),
  },
  nickname: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginLeft: wp('3%'),
    marginTop: hp('1.5%'),
  },
});

export const UserList = ({route}) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const {apiRequest, keyName, userId} = route.params;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const {error, data} = await apiRequest(userId, page);
    console.log('loadUsers data', data);
    if (error) {
      showErrorMessage();
    } else if (data?.total_page >= page) {
      setPage(page + 1);
      setUsers(users.concat(data[keyName]));
    }
  };

  const renderItem = item => {
    return (
      <View style={styles.container}>
        <Avatar
          size="medium"
          rounded
          title="MD"
       
          source={{uri: item?.profile_pic?.replace(/https/g, 'http')}}
        />
        <Text style={styles.nickname}>{item?.fullname}</Text>
      </View>
    );
  };

  return (
    <>
    <View style={{height:`100%`}}>
    <FlatList
      keyExtractor={index => index}
      data={users}
      renderItem={({item}) => renderItem(item)}
      />
      </View>
      </>
  );
};

export default UserList;

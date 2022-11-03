import React, {useContext} from 'react';
import {Text} from 'react-native';

//React Native Elements
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

//Context
import {Context as AuthContext} from '../../../contexts/AuthContext';

//Styled components
import {
  UserInfoContainerView,
  UserDataWraper,
  NameText,
  UserNameText,
} from './UserInfoContainer.styles';

const UserInfoContainer = () => {
  const {state} = useContext(AuthContext);
  const fullname =
    state?.user?.fullname?.length >= 15
      ? `${state?.user?.fullname?.slice(0, 15)}...`
      : state?.user?.fullname;
  const nickname =
    state?.user?.username?.length >= 15
      ? `${state?.user?.username?.slice(0, 15)}...`
      : state?.user?.username;
  return (
    <UserInfoContainerView>
      {state?.user?.profile_pic_hd == null ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{width: 50, height: 50, borderRadius: 50,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:25,color:"#fff"}}>{state?.user?.fullname.substring(0,1)}</Text>
        </LinearGradient>
      ) : (
        <Avatar
          size="large"
          rounded
          title="MD"
          source={{uri: state?.user?.profile_pic_hd?.replace(/https/g, 'http')}}
        />
      )}
      <UserDataWraper>
        <NameText>{fullname}</NameText>
        <UserNameText>@{nickname}</UserNameText>
      </UserDataWraper>
    </UserInfoContainerView>
  );
};

export default UserInfoContainer;

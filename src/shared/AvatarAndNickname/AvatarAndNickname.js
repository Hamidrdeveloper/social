import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

//Style components
import {ContainerView, NicknameView} from './AvatarAndNickname.styles';

const styles = StyleSheet.create({
  nickname: {
    fontWeight: 'bold',
  },
});

const AvatarAndNickname = ({
  profileImage,
  nickname,
  sizeAvatar,
  nicknameStyle = {},
  containerStyle = {},
}) => {
  return (
    <View style={containerStyle}>
      <Avatar size={sizeAvatar} rounded title="MD" source={profileImage} />
      <NicknameView>
        <Text style={[styles.nickname, nicknameStyle]}>@{nickname}</Text>
      </NicknameView>
    </View>
  );
};

export default AvatarAndNickname;

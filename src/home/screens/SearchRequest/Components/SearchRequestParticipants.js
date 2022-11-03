//React & React Native
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

//Libraries
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Components
import AvatarAndNickname from '../../../../shared/AvatarAndNickname/AvatarAndNickname';

//Icons
import {Delete} from '../../../../shared/Icons/index';

//Styles
const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    minWidth: wp('85%'),
    marginLeft: wp('2%'),
  },
  avatarNickname: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    textAlign: 'left',
  },
  deleteIconButton: {
    marginTop: hp('1%'),
  },
});

const SearchRequestParticipants = ({route}) => {
  const {participants} = route.params;
  return (
    <ScrollView>
      {participants &&
        participants?.map(participant => {
          return (
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
              }}
            >
              <AvatarAndNickname
                nickname={participant.nickname}
                profileImage={participant.avatar}
                sizeAvatar={'medium'}
                containerStyle={styles.avatarContainer}
                nicknameStyle={styles.avatarNickname}
              />
              <TouchableOpacity
                style={styles.deleteIconButton}
                onPress={() => {}}
              >
                <Delete />
              </TouchableOpacity>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default SearchRequestParticipants;

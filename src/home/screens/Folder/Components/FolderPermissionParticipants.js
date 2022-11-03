//React & React Navigation
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Components
import AvatarAndNickname from '../../../../shared/AvatarAndNickname/AvatarAndNickname';
import {SwitchComponent} from '../../../../shared/SwitchComponent/SwitchComponent';

//Translation
import Translation from '../../../../constants/i18n';

//Styles
const styles = StyleSheet.create({
  title: {
    color: colorSchema.general.lightGray,
    fontSize: wp('5%'),
    paddingTop: wp('5%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    marginBottom: hp('1%'),
  },
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
  switchContainerButton: {
    marginLeft: wp('-4%'),
    marginTop: hp('-1%'),
  },
});

const FolderPermissionParticipants = ({route}) => {
  const {participants} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {Translation.t('socialApp.Folder.folderPermissionParticipants.title')}:
      </Text>
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
              <View style={styles.switchContainerButton}>
                <SwitchComponent
                  value={participant.permissionRead}
                  onChange={() => {}}
                />
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default FolderPermissionParticipants;

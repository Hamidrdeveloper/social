//React & React Native
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Librearies
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Context
import {ChatContext} from '../../../../contexts/ChatContext';
import DoubleTapToClose from '../../../../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';

//Icons
import {Back, DotsThreeVertical} from '../../../../shared/Icons/index';

//Styles Components
import {BackTouchableOpacity} from '../../../../shared/NavigationHeader/NotificationSettingsHeader.styles';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginLeft: wp('5%')},
  nicknameInformationContainer: {width: wp('80%'), marginLeft: wp('4%')},
  nicknameText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginTop: hp('-1%'),
  },
  statusText: {
    color: colorSchema.general.lightGray,
  },
});

const ChatHead = ({navigation}) => {
  const {currentChat} = useContext(ChatContext);
  return (
    <View style={styles.container}>
      <BackTouchableOpacity onPress={() => navigation.goBack()}>
        <Back width={20} height={20} />
      </BackTouchableOpacity>
      <View style={styles.nicknameInformationContainer}>
        <Text style={styles.nicknameText}>@{currentChat?.nickname}</Text>
        <Text style={styles.statusText}>Online</Text>
      </View>
      <BackTouchableOpacity onPress={() => {}}>
        <DotsThreeVertical width={20} height={20} />
      </BackTouchableOpacity>
      <DoubleTapToClose />
    </View>
  );
};

export default ChatHead;

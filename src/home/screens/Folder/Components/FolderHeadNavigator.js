//React & React Native
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

//Images
import {Back, DotsThreeVertical} from '../../../../shared/Icons/index';

//Utils
import {searchRequestData} from '../../SearchRequest/Utils/SearchRequest.utils';

//Translation
import Translation from 'i18n-js';

//Styles
import {BackTouchableOpacity} from '../../../../shared/NavigationHeader/NotificationSettingsHeader.styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: wp('5%'),
  },
  titleContainer: {
    width: wp('80%'),
    marginLeft: wp('4%'),
  },
  titleText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginLeft: wp('28%'),
  },
});

const FolderHeadNavigator = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackTouchableOpacity onPress={() => navigation.goBack()}>
        <Back width={20} height={20} />
      </BackTouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {Translation.t('socialApp.Folder.headNavigator.title')}
        </Text>
      </View>
      <BackTouchableOpacity
        onPress={() => {
          navigation.navigate('FolderPermission', {
            participants: searchRequestData.people,
          });
        }}
      >
        <DotsThreeVertical width={20} height={20} />
      </BackTouchableOpacity>
    </View>
  );
};

export default FolderHeadNavigator;

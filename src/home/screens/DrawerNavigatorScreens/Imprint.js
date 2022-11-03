//React & React Native
import React, {useEffect} from 'react';
import {Alert, Linking, View, Text} from 'react-native';

//Constants
import Links from '../../../constants/links';

//i18n
import Translation from '../../../constants/i18n';

const DataProtection = ({navigation}) => {
  const link = Links.socialApp.SideBarDrawer.dataProtection;

  const openLink = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `${Translation.t(`socialApp.Errors.linkNotAvailable`)}: ${url}`,
      );
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      openLink(link);
      navigation.navigate('HomeFeedScreen');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Text>{Translation.t(`socialApp.ScreenTitles.Imprint`)}</Text>
    </View>
  );
};

export default DataProtection;

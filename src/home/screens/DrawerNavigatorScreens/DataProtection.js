//React & React Native
import React, {useEffect, useState} from 'react';
import {Alert, Linking, View, Text} from 'react-native';

//Constants
import Links from '../../../constants/links';

//i18n
import Translation from '../../../constants/i18n';
import {exportPost} from '../../../api/profile';

const DataProtection = ({navigation}) => {
  const link = Links.socialApp.SideBarDrawer.imprint;
  const [textValid, setTextValid] = useState("")
  const openLink = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `${Translation.t('socialApp.Errors.linkNotAvailable')}: ${url}`,
      );
    }
  };

  useEffect(() => {
    exportPost().then(res => {
      if (res.length > 0) {
        setTextValid("Check the link")
        console.log(res);
        const unsubscribe = navigation.addListener('focus', () => {
          navigation.navigate('HomeFeedScreen');
        });

        return unsubscribe;
      }else{
        setTextValid("Not have data")

      }
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize:20,width:`100%`,height:`100%`,textAlign:'center',textAlignVertical:'center'}}>{textValid}</Text>
    </View>
  );
};

export default DataProtection;

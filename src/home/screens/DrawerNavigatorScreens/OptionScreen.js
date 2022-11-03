import React, {useContext, useEffect} from 'react';

//i18n
import Translation from '../../../constants/i18n';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {Back} from '../../../shared/Icons';

export const OptionScreen = ({}) => {
  const navigation = useContext(NavigationContext);
  const widthIcons = 20;
  const heightIcons = 20;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{marginLeft: 14}}>
            <Back width={widthIcons} height={heightIcons} />
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('User Account')}>
        <Text style={{...styles.bottomText, marginTop: 20}}>
          {Translation.t(`socialApp.Options.Screen1`)}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.bottomText}>
          {Translation.t(`socialApp.Options.Screen2`)}
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('Data Protection')}>
        <Text style={styles.bottomText}>
          {Translation.t(`socialApp.Options.Screen3`)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.bottomText}>
          {Translation.t(`socialApp.Options.Screen4`)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Blocked User')}>
        <Text style={styles.bottomText}>
          {Translation.t(`socialApp.Options.Screen5`)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Language')}>
        <Text style={styles.bottomText}>
          {Translation.t(`socialApp.Options.Screen6`)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 14,
    // fontFamily: 'Montserrat-Bold',
    color: '#343434',
    marginLeft: 20,
    marginTop: 29,
  },
});

import {NavigationContext} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//i18n
import Translation from '../../../constants/i18n';
import {styles} from './OptionTheme';

import {Context as AuthContext} from '../../../contexts/AuthContext';
import ChoosePhoto from '../../../shared/ImageGallery/ChoosePhoto';
import {deactivate} from '../../../api/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAccountScreen = () => {
  //TODO Open a little modal to change Email address
  //TODO Open a little modal to change phone number
  //TODO Open a little modal to change the gender
  const navigation = useContext(NavigationContext);
  const {state,signOut} = useContext(AuthContext);
  const [pickedImage, setPickedImage] = useState(null);

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.navigate('Email')}>
        <Text style={styles.textTitle}>
          {Translation.t('socialApp.UserAccount.email')}
        </Text>
        <Text style={styles.textResponse}>{state.user.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImageProfile')}>
        <Text style={{...styles.textTitle, marginTop: 29}}>
          {Translation.t('socialApp.UserAccount.edit')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Phone Number')}>
        <Text style={{...styles.textTitle, marginTop: 24}}>
          {Translation.t('socialApp.UserAccount.phone')}
        </Text>
        <Text style={styles.textResponse}>{state.user.phone || '-'}</Text>
      </TouchableOpacity>
      {/* <Text style={{...styles.textTitle, marginTop: 29}}>
        {Translation.t('socialApp.UserAccount.birthday')}
      </Text> */}
      {/* <Text style={styles.textResponse}>
        {Translation.t('socialApp.UserAccount.date')}
      </Text> */}
      {/* <Text style={styles.textInformation}>
        {Translation.t('socialApp.UserAccount.information')}
      </Text> */}
      {/* <Text style={{...styles.textTitle, marginTop: 30}}>
        {Translation.t('socialApp.UserAccount.gender')}
      </Text>
      <Text style={styles.textResponse}>
        {Translation.t('socialApp.UserAccount.male')}
      </Text> */}
      {/* <Text style={styles.textInformation}>
        {Translation.t('socialApp.UserAccount.information1')}
      </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate('Password')}>
        <Text style={{...styles.textTitle, marginTop: 29}}>
          {Translation.t('socialApp.UserAccount.password')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Deactivate')}>
        <Text style={{...styles.textTitle, marginTop: 29}}>
          {Translation.t('socialApp.UserAccount.deactivate')}
        </Text>
      </TouchableOpacity>
     
      {/* <TouchableOpacity
        onPress={() =>
          deactivate().then(res => {
       
            if (res==true) {
              signOut();
            }
          })
        }>
        <Text style={{...styles.textTitle, marginTop: 29}}>
          {Translation.t('socialApp.UserAccount.deactivate')}
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

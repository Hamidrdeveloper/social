import I18n from 'react-native-i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './en';
import de from './de';

//I18n.locale = 'en';
I18n.fallbacks = true;
I18n.translations = {en, de};

export const changeLanguage = async languageKey => {
  await AsyncStorage.setItem('language', languageKey);
  I18n.locale = languageKey;
  const language = await AsyncStorage.getItem('language');
  console.log('language', language);
};

export default I18n;

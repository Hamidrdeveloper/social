//Libraries
import Toast from 'react-native-toast-message';

//Translation
import Translation from '../../constants/i18n';

export const showErrorMessage = () => {
  Toast.show({
    type: 'error',
    text1: Translation.t('socialApp.Toast.error.text1'),
    text2: Translation.t('socialApp.Toast.error.text2'),
  });
};

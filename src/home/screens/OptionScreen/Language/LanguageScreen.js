//React & React Native
import * as React from 'react';
import {View} from 'react-native';

//Libraries
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Components
import RadioButton from '../../../../shared/RadioButton/RadioButton';

//Utils
import {languageData} from './LanguageUtils';

//Translations
import Translation, {changeLanguage} from '../../../../constants/i18n';

//Styles Component
import {ViewContainer} from './LanguageScreen.styles';

const radioButtonLanguageRender = (checked, setChecked) => {
  return languageData.map(language => {
    return (
      <RadioButton
        selected={checked === language.languageKey ? true : false}
        onPress={async () => {
          setChecked(language.languageKey);
          await changeLanguage(language.languageKey);
        }}
        label={language.name}
        style={{marginTop: hp('2%')}}
      />
    );
  });
};

export const LanguageScreen = props => {
  const [checked, setChecked] = React.useState(Translation.currentLocale());

  return (
    <ViewContainer>
      {radioButtonLanguageRender(checked, setChecked)}
    </ViewContainer>
  );
};

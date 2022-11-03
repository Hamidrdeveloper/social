//React & React Native
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//React Native Elements
import {Text, CheckBox} from 'react-native-elements';

//Styled components
import {
  ComponentContainer,
  ConditionsText,
  CustomConditionText,
  InLineLinkText,
} from './ConditionsCheckBox.styles';

//i18n
import Translation from '../../constants/i18n';

const ConditionsCheckBox = ({value, setValue, customText = ''}) => {
  const navigation = useNavigation();

  const InLineLink = ({title, navigateTo}) => {
    return <InLineLinkText>{title}</InLineLinkText>;
  };

  const getConditionText = text => {
    return text ? (
      <CustomConditionText>{text}</CustomConditionText>
    ) : (
      <ConditionsText>
        {Translation.t(`socialApp.Authentification.TermsAndConditions.message`)}
        <InLineLink
          title={Translation.t(
            `socialApp.Authentification.TermsAndConditions.link1`,
          )}
        />
        {Translation.t(`socialApp.Authentification.TermsAndConditions.and`)}
        <InLineLink
          title={Translation.t(
            `socialApp.Authentification.TermsAndConditions.link2`,
          )}
        />
      </ConditionsText>
    );
  };

  return (
    <ComponentContainer>
      <CheckBox checked={value} onPress={() => setValue(!value)} size={30} />
      {getConditionText(customText)}
    </ComponentContainer>
  );
};

export default ConditionsCheckBox;

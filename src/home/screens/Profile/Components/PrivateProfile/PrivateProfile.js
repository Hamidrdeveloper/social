//React
import React from 'react';

//Style Components
import {ContainerView, TitleText, SubtitleText} from './PrivateProfile.styles';

//Translation
import Translation from '../../../../../constants/i18n';

const PrivateProfile = () => {
  return (
    <ContainerView>
      <TitleText>
        {Translation.t('socialApp.Profile.privateProfile.title')}
      </TitleText>
      <SubtitleText>
        {Translation.t('socialApp.Profile.privateProfile.subtitle')}
      </SubtitleText>
    </ContainerView>
  );
};

export default PrivateProfile;

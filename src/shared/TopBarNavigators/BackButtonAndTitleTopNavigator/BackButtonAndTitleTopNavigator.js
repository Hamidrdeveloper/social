// React & React Native
import React from 'react';

// Styled Components
import {
  BackTouchableContainer,
  TitleText,
  TitleTextContainer,
  TopBarContainer,
} from './BackButtonAndTitleTopNavigator.styles';

// Icons
import {Back} from '../../Icons';

const BackButtonAndTitleTopNavigator = ({onPressBack, title}) => {
  const IconSize = 18;
  return (
    <TopBarContainer>
      <BackTouchableContainer onPress={onPressBack}>
        <Back width={IconSize} height={IconSize} />
      </BackTouchableContainer>
      <TitleTextContainer>
        <TitleText>{title}</TitleText>
      </TitleTextContainer>
    </TopBarContainer>
  );
};

export default BackButtonAndTitleTopNavigator;

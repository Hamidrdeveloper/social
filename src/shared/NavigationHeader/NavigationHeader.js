import React from 'react';

//Styles Components
import {
  ContainerView,
  BackTouchableOpacity,
  TitleView,
  TitleText,
} from './NotificationSettingsHeader.styles';

//Icons
import {Back} from '../Icons/index';

const NavigationHeader = (props) => {
  return (
    <ContainerView>
      <BackTouchableOpacity onPress={() => props.navigation.goBack()}>
        <Back width={20} height={20} />
      </BackTouchableOpacity>
      <TitleView>
        <TitleText>{props.title}</TitleText>
      </TitleView>
    </ContainerView>
  );
};

export default NavigationHeader;

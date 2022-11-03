//React & React Native
import React from 'react';

//Style Components
import {
  ContainerView,
  BackTouchable,
  MessageTouchable,
  DotsThreeVerticalTouchable,
} from './HeaderProfileButtons.styles';

const HeaderProfileButtons = () => {
  return (
    <ContainerView>
      <BackTouchable onPress={() => navigation.goBack()}>
        <Back width={20} height={20} />
      </BackTouchable>
      <MessageTouchable onPress={() => {}}>
        <Message width={20} height={20} />
      </MessageTouchable>
      <DotsThreeVerticalTouchable
        onPress={() => navigation.navigate('ProfileNotificationSettings')}
      >
        <DotsThreeVertical width={20} height={20} />
      </DotsThreeVerticalTouchable>
    </ContainerView>
  );
};

export default HeaderProfileButtons;

//React % React Native
import React from 'react';
import {useNavigation} from '@react-navigation/native';

//Styled components
import {LinkContainer, LinkText} from './NavLink.styles';

const NavLink = ({
  messageText,
  navigateTo,
  reDirectFunction = true,
  alternativeFunction = null,
}) => {
  const navigation = useNavigation();
  return (
    <LinkContainer
      onPress={() =>
        reDirectFunction
          ? navigation.navigate(navigateTo)
          : alternativeFunction()
      }
    >
      <LinkText>{messageText}</LinkText>
    </LinkContainer>
  );
};

export default NavLink;

import styled from 'styled-components';

export const TopBarContainer = styled.View`
  background-color: white;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  border-color: #d6d6d6;
  border-bottom-width: 3px;
`;

export const TopBarButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const BackTouchableContainer = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

export const TitleTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

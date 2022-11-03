import styled from 'styled-components';

export const TouchableContainer = styled.TouchableOpacity`
  height: 25px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 13px;
  font-family: ${props => props.theme.fontFamily};
`;

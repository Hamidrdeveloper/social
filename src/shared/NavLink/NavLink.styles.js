import styled from 'styled-components';

export const LinkContainer = styled.TouchableOpacity`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const LinkText = styled.Text`
  color: #1a73e8;
  text-decoration-line: underline;
  font-family: ${props => props.theme.fontFamily};
`;

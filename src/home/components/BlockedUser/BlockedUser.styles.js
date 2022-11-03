import styled from 'styled-components';

export const UserInfoContainerView = styled.View`
  flex-direction: row;
  margin-left: 20;
`;

export const UserDataWraper = styled.View`
  margin-left: 10px;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const UserNameText = styled.Text`
  font-size: 17px;
  color: #343434;
  font-family: ${props => props.theme.fontFamily};
`;

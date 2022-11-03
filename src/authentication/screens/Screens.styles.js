import styled from 'styled-components';

export const SocialIconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SocialIconTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
  height: 35px;
`;

export const ScrollableScreenContainer = styled.ScrollView`
  padding-top: 10px;
  padding: 20px;
  background-color: white;
  flex: 1;
`;

export const InfoMessage = styled.Text`
  font-size: 19px;
  margin-bottom: 30px;
  font-family: ${props => props.theme.fontFamily};
`;

export const IconsTitle = styled.Text`
  align-self: flex-end;
  font-size: 19px;
  margin-horizontal: 10px;
  font-family: ${props => props.theme.fontFamily};
`;

export const IconsTitleLines = styled.Text`
  color: #d8d8d8;
  font-size: 20px;
  margin-horizontal: 10px;
  font-family: ${props => props.theme.fontFamily};
`;

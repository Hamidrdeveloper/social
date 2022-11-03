import styled from 'styled-components';

export const OptionSectionContainer = styled.View`
  margin-bottom: 35px;
`;

export const DateFilterContainer = styled.View`
  flex-direction: row;
`;

export const TitleOptionText = styled.Text`
  margin-bottom: 15px;
  font-size: 23px;
  font-weight: 700;
  color:black;
  font-family: ${props => props.theme.fontFamily};
`;

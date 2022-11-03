import styled from 'styled-components';

export const OptionSectionContainer = styled.View`
  margin-bottom: 25px;
`;

export const DateFilterContainer = styled.View`
  flex-direction: row;
`;

export const TitleOptionText = styled.Text`
  font-size: 23px;
  color:black;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
`;

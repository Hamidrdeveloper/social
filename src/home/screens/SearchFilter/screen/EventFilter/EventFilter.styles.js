import styled from 'styled-components';

// Views
export const FilterScreenContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 30px;
  border-color: #adadad;
  border-top-width: 2px;
`;

export const FilterButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const DateFilterContainer = styled.View`
  flex-direction: row;
`;

// Texts
export const TitleOptionText = styled.Text`
  font-size: 23px;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
`;

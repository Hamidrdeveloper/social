import styled from 'styled-components';

export const DateContainer = styled.View`
  border-color: #a5afb7;
  border-bottom-width: 1.5px;
  margin-horizontal: 10px;
`;

export const LabelText = styled.Text`
  font-size: 17px;
  color: #86939e;
  margin-left: 0px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const DateText = styled.Text`
  font-size: 17px;
  color: #86939e;
  margin-left: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: ${props => props.theme.fontFamily};
`;

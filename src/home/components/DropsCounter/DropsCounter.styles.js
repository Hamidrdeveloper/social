import styled from 'styled-components';

export const CounterContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const CounterText = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  font-family: ${props => props.theme.fontFamily};
`;

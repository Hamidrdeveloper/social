import styled from 'styled-components';

export const CounterMainContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const InternalButtonContainer = styled.View``;

export const CounterTitleText = styled.Text`
  font-size: 18px;
  color: black;
  font-family: ${props => props.theme.fontFamily};
`;

export const CounterText = styled.Text`
  margin-top: 2px;
  margin-right: 15px;
  margin-left: 15px;
  font-size: 18px;
  color: black;
  font-family: ${props => props.theme.fontFamily};
`;

import styled from 'styled-components';

export const ComponentContainer = styled.SafeAreaView`
  flex-direction: row;
  margin-bottom: -15px;
  padding-right: 35px;
  border-radius: 1px;
  margin-left: -15px;
  margin-right: 60px;
`;

export const ConditionText = styled.Text`
  margin-top: 15px;
  font-size: 17px;
  text-align: left;
  color:black;
  align-self: stretch;
  font-family: ${props => props.theme.fontFamily};
`;

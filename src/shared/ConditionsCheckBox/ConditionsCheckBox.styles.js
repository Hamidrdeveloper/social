import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ComponentContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: ${wp('65%')};
  margin-top: ${hp('2%')};
  margin-left: ${wp('6%')};
  margin-right: ${wp('6%')};
  margin-bottom: ${wp('3%')};
`;

export const ConditionsText = styled.Text`
  font-size: 17px;
  padding-right: 15px;
  align-self: stretch;
  font-family: ${props => props.theme.fontFamily};
`;

export const CustomConditionText = styled.Text`
  font-size: 17px;
  align-self: stretch;
  font-family: ${props => props.theme.fontFamily};
`;

export const InLineLinkText = styled.Text`
  color: #1a73e8;
  text-decoration-line: underline;
`;

import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const RequirementsContainer = styled.View`
  margin-left: ${wp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const IconTextValid = styled.Text`
  color: #0d8c20;
  font-size: 15px;
  font-family: ${props => props.theme.fontFamily};
`;

export const IconTextNotValid = styled.Text`
  color: #d0021b;
  font-size: 15px;
  font-family: ${props => props.theme.fontFamily};
`;

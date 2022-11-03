import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  align-items: center;
  margin-top: ${hp('3%')};
`;

export const ContainerPasswordField = styled.View`
  width: ${wp('90%')};
`;

export const ErrorMessageText = styled.Text`
  position: absolute;
  color: red;
`;

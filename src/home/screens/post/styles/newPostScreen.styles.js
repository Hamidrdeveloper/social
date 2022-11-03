import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const DesctiptionView = styled.View`
  width: ${wp('94%')};
  margin-left: ${wp('2%')};
  margin-top: ${hp('35%')};
  position: absolute;
`;

export const DescriptionText = styled.Text`
  color: gray;
  font-size: ${wp('4')};
  margin-left: ${wp('2%')};
`;

export const ContinueButtonView = styled.View`
  margin-top: ${hp('5%')};
  margin-left: ${wp('46%')};
`;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

export const ViewContainer = styled.View`
  margin-left: ${wp('8%')};
  margin-top: ${hp('2%')};
`;

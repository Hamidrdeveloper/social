import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../../constants/colorSchema';

export const HrView = styled.View`
  border-bottom-width: 0.4px;
  border-bottom-color: ${colorSchema.general.line.border};
  width: ${wp('100%')};
  margin-top: ${hp('2%')};
  margin-bottom: ${hp('1%')};
`;

import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../../constants/colorSchema';

export const ContainerView = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  padding: 10px;
  font-size: ${wp('5%')};
  font-weight: bold;
`;

export const SubtitleText = styled.Text`
  font-size: ${wp('3.5%')};
  text-align: center;
  color: ${colorSchema.general.darkGray};
  width: ${wp('75%')};
`;

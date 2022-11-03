import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const padding = wp('5%');

export const TitleSectionText = styled.Text`
  font-size: ${wp('6%')};
  font-weight: bold;
  padding-left: ${padding};
  padding-right: ${padding};
  text-transform: uppercase;
`;

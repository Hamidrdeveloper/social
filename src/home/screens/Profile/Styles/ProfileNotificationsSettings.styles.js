import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const TitleSectionText = styled.Text`
  font-weight: bold;
  font-size: ${wp('5%')};
  margin-left: ${wp('3%')};
  margin-top: ${hp('3%')};
`;

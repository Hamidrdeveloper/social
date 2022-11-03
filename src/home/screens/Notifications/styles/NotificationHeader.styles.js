import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  flex-direction: row;
  margin-top: ${hp('2%')};
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 17;
  justify-content: space-between;
  margin-left: ${wp('8%')};
`;

export const IconView = styled.View`
  margin-left: ${wp('23%')};
`;

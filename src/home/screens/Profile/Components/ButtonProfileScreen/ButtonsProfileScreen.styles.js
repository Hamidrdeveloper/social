import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  align-items: center;
`;

export const ContainerViewButtons = styled.View`
  flex-direction: row;
  margin-top: ${hp('2%')};
`;

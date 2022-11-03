import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const NicknameText = styled.Text`
  font-weight: bold;
`;

export const NicknameView = styled.View`
  margin-left: ${wp('2%')};
`;

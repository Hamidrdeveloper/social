import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerSwitchView = styled.View`
  align-items: center;
  margin-top: ${hp('1%')};
`;

export const SwitchComponentView = styled.View`
  width: 95%;
  padding: 5px;
`;

export const TitleSwitchText = styled.Text`
  font-size: ${wp('4.5%')};
  width: ${wp('80%')};
`;

export const TextSwitchText = styled.Text`
  color: #444444;
  margin-top: ${hp('0.5%')};
`;

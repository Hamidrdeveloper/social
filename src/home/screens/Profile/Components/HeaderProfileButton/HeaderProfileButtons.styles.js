import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  flex-direction: row;
  margin-top: ${hp('2%')};
`;

export const BackTouchable = styled.TouchableWithoutFeedback`
  margin-left: ${hp('4%')};
`;

export const MessageTouchable = styled.TouchableWithoutFeedback`
  margin-left: ${hp('70%')};
`;

export const DotsThreeVerticalTouchable = styled.TouchableWithoutFeedback`
  margin-left: ${hp('8%')};
`;

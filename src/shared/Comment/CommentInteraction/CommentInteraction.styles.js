import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const CommentInteractionContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-left: ${wp('18%')};
`;

export const OptionsContainer = styled.SafeAreaView`
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  margin-right: 10px;
`;

export const UpsTouchableContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 20px;
`;

export const DownsTouchableContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const OptionsTouchableContainer = styled.TouchableOpacity``;

export const ReplyTouchableContainer = styled.TouchableOpacity``;

export const ReplyButtonText = styled.Text`
  margin-right: 10px;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
  color: #707070;
`;

export const UpDownCounterText = styled.Text`
  margin-left: 10px;
  font-family: ${props => props.theme.fontFamily};
  color: #707070;
`;

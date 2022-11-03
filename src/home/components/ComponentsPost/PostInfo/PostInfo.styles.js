import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import colorSchema from '../../../../constants/colorSchema';

export const PostInfoContainerView = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ToProfileTouchableContainer = styled.TouchableOpacity``;

export const UserDataWrapper = styled.View`
  margin-left: 10px;
  justify-content: center;
`;

export const PostedTimeReferenceText = styled.Text`
  font-size: 13px;
  color: ${colorSchema.general.darkGray};
  font-family: ${props => props.theme.fontFamily};
`;

export const UserNameText = styled.Text`
  font-size: 20px;
  color: ${colorSchema.general.darkGray};
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const FollowButtonContainer = styled.View`
  margin-left: ${wp('24%')};
  margin-top: ${hp('2%')};
`;

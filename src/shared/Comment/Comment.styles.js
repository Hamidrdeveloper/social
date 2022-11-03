import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const MainCommentContainer = styled.View`
  padding-left: 20px;
`;

export const MainCommentActionContainer = styled.View`
  padding-left: 20px;
`;

export const CommentContainer = styled.View`
  flex-direction: row;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TouchableAvatarContainer = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const ContentCommentContainer = styled.View`
  width: 85%;
 
`;

export const TextCommentContainer = styled.View`
  width: 94%;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const UserDateContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TouchableUserName = styled.TouchableOpacity``;

export const UserNameText = styled.Text`
  font-size: 20px;
  color: #343434;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const PostedTimeReferenceText = styled.Text`
  margin-left: 10px;
  margin-top: 3px;
  font-size: 13px;
  color: #343434;
  font-family: ${props => props.theme.fontFamily};
  padding-top: 2px;
`;

export const CommentText = styled.Text`
  font-size: 17px;
  font-family: ${props => props.theme.fontFamily};
`;

export const AnswerLinkContainer = styled.View`
  margin-left: ${wp('4%')};
`;

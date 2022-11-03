import styled from 'styled-components';
import colorSchema from '../../../../constants/colorSchema';

export const PostInteractionContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 10px;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
`;

export const CommentsContainer = styled.View`
  flex-direction: row;
`;

export const ShareTouchableContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  margin-right: 15px;
`;

export const LikesTouchableContainer = styled.TouchableOpacity``;

export const CommentsTouchableContainer = styled.TouchableOpacity``;

export const LikesText = styled.Text`
  margin-left: 5px;
  margin-right: 20px;
  font-size: 16px;
  color: ${colorSchema.general.darkGray};
  font-family: ${props => props.theme.fontFamily};
`;
export const CommentsText = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  color: ${colorSchema.general.darkGray};
  font-family: ${props => props.theme.fontFamily};
`;

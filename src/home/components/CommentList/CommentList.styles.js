import styled from 'styled-components';

export const CommentScreenContainer = styled.View`
  flex: 1;
`;

export const TopBarContainer = styled.View`
  background-color: white;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  border-color: #d6d6d6;
  border-bottom-width: 3px;
`;

export const TopBarButtonsContainer = styled.View`
  flex-direction: row;
`;

export const FilterTouchableContainer = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const CloseTouchableContainer = styled.TouchableOpacity``;

export const NewCommentContainer = styled.View`
  border-color: #d6d6d6;
  border-bottom-width: 2px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
`;

export const CommentsScrollableContainer = styled.ScrollView``;

export const CommentsCountText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

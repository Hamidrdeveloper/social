import styled from 'styled-components';

export const CommentScreenContainer = styled.View`
  flex: 1;
`;

export const TopBarContainer = styled.View`
  background-color: white;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: flex-start;
  border-color: #d6d6d6;
  border-bottom-width: 3px;
`;

export const TopBarButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const BackTouchableContainer = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const CloseTouchableContainer = styled.TouchableOpacity``;

export const NewResponseContainer = styled.View`
  border-color: #d6d6d6;
  border-bottom-width: 2px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
`;

export const MainCommentContainer = styled.View``;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

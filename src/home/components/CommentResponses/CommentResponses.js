import React, {useContext} from 'react';
import {ScrollView} from 'react-native';

//Icons
import {Close, Back} from './../../../shared/Icons';

//Context
import {Context as CommentContext} from '../../../contexts/CommentContext';

//Shared Components
import {CommentField, Comment} from '../../../shared';

//Styled Components
import {
  CommentScreenContainer,
  TopBarContainer,
  TitleText,
  TopBarButtonsContainer,
  BackTouchableContainer,
  CloseTouchableContainer,
  MainCommentContainer,
  NewResponseContainer,
} from './CommentResponses.styles';

const CommentResponses = ({mainComment, hideModal, hideResponses}) => {
  const IconSize = 18;
  const {state} = useContext(CommentContext);

  const MainCommentComponent = comment => {
    return (
      //main Component
      <Comment
      id={comment.id}
      username={comment.user.username}
      profileImage={comment.user?.profile_pic?.replace(/https/g, 'http')}
      date={comment.datePosted}
      ups={comment.up_votes}
      down={comment.down_votes}
      comment={comment.content}
      answersCommentsId={[]}
        repliesView={true}
        replyEnabled={false}
      />
    );
  };

  const CommentComponent = comment => {
    return (
      <Comment
      id={comment.id}
      username={comment.user.username}
      profileImage={comment.user?.profile_pic?.replace(/https/g, 'http')}
      date={comment.datePosted}
      ups={comment.up_votes}
      down={comment.down_votes}
      comment={comment.content}
      answersCommentsId={[]}
        repliesView={false}
        replyEnabled={false}
      />
    );
  };

  return (
    <CommentScreenContainer>
      <TopBarContainer>
        <BackTouchableContainer onPress={hideResponses}>
          <Back width={IconSize} height={IconSize} />
        </BackTouchableContainer>
        <TitleText>Antworten</TitleText>
        <TopBarButtonsContainer>
          <CloseTouchableContainer onPress={() => hideModal(false)}>
            <Close width={IconSize} height={IconSize} />
          </CloseTouchableContainer>
        </TopBarButtonsContainer>
      </TopBarContainer>

      <MainCommentContainer showsVerticalScrollIndicator={false}>
        {MainCommentComponent(mainComment)}
        <NewResponseContainer>
          <CommentField referenceId={mainComment.id} replyToComment={true} />
        </NewResponseContainer>
      </MainCommentContainer>
      <ScrollView>
        {state.responses.map(comment => CommentComponent(comment))}
      </ScrollView>
    </CommentScreenContainer>
  );
};
//       //
export default CommentResponses;

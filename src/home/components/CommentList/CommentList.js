import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as CommentContext} from '../../../contexts/CommentContext';

//Icons
import {Close, Filter} from './../../../shared/Icons';

//Shared Components
import {CommentField, Comment} from '../../../shared';

//Styled Components
import {
  CommentScreenContainer,
  TopBarContainer,
  CommentsCountText,
  TopBarButtonsContainer,
  FilterTouchableContainer,
  CloseTouchableContainer,
  NewCommentContainer,
  CommentsScrollableContainer,
} from './CommentList.styles';
import {Modal, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';

const CommentList = ({postId, commentsListId, hideModal, openResponses}) => {
  const IconSize = 18;
  const [filter, setFilter] = useState('false')
  const {
    state,
    loadComments,
    loadCommentsUpV,
    loadCommentsDownD,
    loadCommentsUpD,
    loadCommentsDownV,
    loadCommentsReplay,
  } = useContext(CommentContext);

  useEffect(() => {
    loadComments(postId);
  }, []);
  useEffect(() => {
    console.log('state=>', state.comments);
  }, [state]);

  return (
    <>
      <CommentScreenContainer>
        <TopBarContainer>
          <CommentsCountText>
            Commentary {state.comments.length}
          </CommentsCountText>
          <TopBarButtonsContainer>
            <FilterTouchableContainer>
              <Filter width={IconSize} height={IconSize} onPress={()=>{setFilter(true)}}/>
            </FilterTouchableContainer>
            <CloseTouchableContainer onPress={() => hideModal(false)}>
              <Close width={IconSize} height={IconSize} />
            </CloseTouchableContainer>
          </TopBarButtonsContainer>
        </TopBarContainer>

        <NewCommentContainer>
          <CommentField referenceId={postId} />
        </NewCommentContainer>

        <CommentsScrollableContainer showsVerticalScrollIndicator={false}>
          {state.comments.map(comment => {
            return (
              <Comment
                id={comment.id}
                username={comment.user.username}
                profileImage={comment.user?.profile_pic}
                date={comment.created_at}
                ups={comment.up_votes}
                down={comment.down_votes}
                comment={comment.content}
                answersCommentsId={comment.replies}
                openResponses={() => openResponses(comment)}
              />
            );
          })}
        </CommentsScrollableContainer>
      </CommentScreenContainer>
      <Modal visible={filter} transparent
      onRequestClose={()=>{setFilter(false)}}>
        <View
          style={{
            width: `100%`,
            height: `100%`,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: `98%`,
              height: 110,
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                loadCommentsUpD(postId);
                setFilter(false)
              }}>
              <Text style={{color: '#000', fontSize: 20}}>{'Up Date '}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              loadCommentsDownD(postId);
              setFilter(false)

            }}>
              <Text style={{color: '#000', fontSize: 20}}>{'Down Date '}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              loadCommentsUpV(postId);
              setFilter(false)

            }}>
              <Text style={{color: '#000', fontSize: 20}}>{'Up Votes'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              loadCommentsDownV(postId);
              setFilter(false)

            }}>
              <Text style={{color: '#000', fontSize: 20}}>{'Down Votes'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CommentList;

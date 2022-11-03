//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {Modal, Share, View} from 'react-native';

//Context
import {Context as AuthContext} from '../../../../contexts/AuthContext';
import {Context as PostContext} from '../../../../contexts/PostContext';

//Icons
import {
  Like,
  NotLike,
  Comments,
  Share as ShareIcon,
} from '../../../../shared/Icons';

//Utils
import NumberFormatter from '../../../../utils/NumberFormatter/NumberFormatter';

//API
import {Post, SearchRequest} from '../../../../api';

//Styled components
import {
  PostInteractionContainer,
  LikesContainer,
  CommentsContainer,
  ShareTouchableContainer,
  LikesText,
  CommentsText,
  LikesTouchableContainer,
  CommentsTouchableContainer,
} from './PostInteraction.styles';

//Screen
import {CommentsScreen} from '../../../screens/';
import {showErrorMessage} from '../../../../utils/MessageToast/MessageToast';
import {getCommenters} from '../../../../api/cooment';
import {Context as CommentContext} from '../../../../contexts/CommentContext';

const PostInteraction = ({
  id,
  likesCount,
  liked,
  commentsCount,
  type,
  post,
}) => {
  const [likes, setLikes] = useState(likesCount);
  const [comments, setComments] = useState(commentsCount);
  const [isLiked, setIsLiked] = useState(liked);
  const IconSize = 25;
  const {state} = useContext(AuthContext);
  const {loadComment} = useContext(CommentContext);
  const [commentList, setCommentList] = useState([]);

  const getAllCommenters = async () => {
    setModalVisible(!modalVisible);
  };
  const likeAndUnLikePost = async () => {
    console.log('isLiked', isLiked);
    if (isLiked) {
      const {error} = await dislikeByType();
      if (error) {
        showErrorMessage();
      } else {
        setIsLiked(false);
        setLikes(likes - 1);
      }
    } else {
      const {error, data} = await likeByType();
      if (error) {
        showErrorMessage();
      } else {
        setIsLiked(true);
        setLikes(likes + 1);
      }
    }
  };

  const likeByType = async () => {
    console.log('id', id);
    switch (type) {
      case 'searchRequest':
        return await SearchRequest.like({searchRequestId: id});
      case 'post':
        return await Post.like({postId: id});
    }
  };

  const dislikeByType = async () => {
    switch (type) {
      case 'searchRequest':
        return await SearchRequest.dislike({searchRequestId: id});
      case 'post':
        return await Post.dislike({postId: id});
    }
  };

  //Move to another file
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share this post with your friends!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <PostInteractionContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{paddingTop: 15}}>
          <CommentsScreen
            postId={id}
            commentsListId={commentList}
            hideModal={setModalVisible}
          />
        </View>
      </Modal>

      <LikesContainer>
        <LikesTouchableContainer
          onPress={() => likeAndUnLikePost(id, state.token)}>
          {isLiked > 0 ? (
            <Like width={IconSize} height={IconSize} />
          ) : (
            <NotLike width={IconSize} height={IconSize} />
          )}
        </LikesTouchableContainer>
        <LikesText>{likes}</LikesText>
      </LikesContainer>
      {post?.item?.options?.comment ? (
        <CommentsContainer>
          <CommentsTouchableContainer onPress={() => getAllCommenters()}>
            <Comments width={IconSize} height={IconSize} />
          </CommentsTouchableContainer>
          <CommentsText>{comments}</CommentsText>
        </CommentsContainer>
      ) : null}
      <ShareTouchableContainer onPress={onShare}>
        <ShareIcon width={IconSize} height={IconSize} />
      </ShareTouchableContainer>
    </PostInteractionContainer>
  );
};

export default PostInteraction;

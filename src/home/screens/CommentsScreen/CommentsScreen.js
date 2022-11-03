//React & React Native
import React, {useState, useContext, useEffect} from 'react';
import {
  Modal,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';

//Context
import {Context as CommentContext} from '../../../contexts/CommentContext';

//Components
import CommentList from '../../components/CommentList/CommentList';
import CommentResponses from '../../components/CommentResponses/CommentResponses';

//Styled Components
import {SafeAreaViewContainer} from './CommentScreen.styles';

const CommentScreen = ({postId, commentsListId, hideModal}) => {
  const {
    loadCommentResponses,
    isShowMode,
    setShowMode,
    commentId,
    deleteComment,
    deleteVote,
    loadCommentsReplay,
    state,
  } = useContext(CommentContext);

  const [showResponses, setShowResponses] = useState(false);
  const [mainComment, setMainComment] = useState(null);
  useEffect(() => {
    console.log('openResponsestate', state);
 }, [state]);
  const openResponse = comment => {
    console.log('openResponse', comment);
    setMainComment(comment);
    loadCommentsReplay(comment.id).then(res => {
      console.log('loadCommentsReplay==>', res);
      if  (res.length > 0) {
        setShowResponses(true);
      }

    });


  };

  return (
    <SafeAreaViewContainer>
      {showResponses ? (
        <CommentResponses
          mainComment={mainComment}
          hideModal={hideModal}
          hideResponses={() => setShowResponses(false)}
          type={'Reply'}
        />
      ) : (
        <CommentList
          postId={postId}
          commentsListId={commentsListId}
          hideModal={hideModal}
          openResponses={openResponse}
        />
      )}
      <Modal
        visible={isShowMode}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setShowMode(!isShowMode);
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View
            style={{
              width: '100%',
              height: 90,
              alignItems: 'center',
              backgroundColor: '#fff',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              padding: 15,
            }}>
            <TouchableOpacity
              onPressIn={() => {
                setShowMode(false);
                deleteComment(commentId, postId);
              }}>
              <Text style={{fontSize: 18, color: 'red', paddingBottom: 8}}>
                {'Delete Comment'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                setShowMode(false);
           
                deleteVote(commentId, postId);
              }}>
              <Text style={{fontSize: 18, color: 'red', paddingBottom: 8}}>
                {'Delete Vote'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaViewContainer>
  );
};

export default CommentScreen;

//React & React Native
import React, {useState, useContext} from 'react';

//React Native Elements
import {Avatar, Input} from 'react-native-elements';

//Contexts
import {Context as AuthContext} from '../../../contexts/AuthContext';
import {Context as CommentContext} from '../../../contexts/CommentContext';
import {Context as PostContext} from '../../../contexts/PostContext';

import {ThemeContext} from 'styled-components';

//i18n
import Translation from '../../../constants/i18n';

//Profile Images
import {profileImages} from '../../../assets/Images/ProfileImages/Images';

// Styled Components
import {
  CommentFieldContainer,
  TouchableSendButtonContainer,
} from './CommentField.styles';

//Icon
import {Send} from '../../Icons';
import {Profile} from '../../../api';

const CommentField = ({referenceId, replyToComment = false}) => {
  const IconSize = 18;

  //Context usage
  const {state} = useContext(AuthContext);
  const {
    state: commentState,
    createComment,
    answerToComment,
    createCommentReply
  } = useContext(CommentContext);
  const {commentPost} = useContext(PostContext);
  const {state: authState} = useContext(AuthContext);
  const {fontFamily} = useContext(ThemeContext);

  const [comment, setComment] = useState('');
  const handleOnPress = () => {
    if (comment.length > 0) {
      setComment('');
      if (!replyToComment) {
        createComment(referenceId, comment);
      } else {
        createCommentReply(referenceId, comment);
      }
      // else {

      //   commentPost(referenceId, newCommentIndex);
      // }
    }
  };
  return (
    <CommentFieldContainer>
      <Avatar
        size="medium"
        rounded
        title="MD"
        source={
          authState.user?.profile_pic
            ? {
                uri: authState.user?.profile_pic?.replace(/https/g, 'http'),
              }
            : {uri: 'https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png'}
        }
      />
      <Input
        multiline={true}
        containerStyle={{
          width: '85%',
          marginTop: 5,
          marginBottom: -5,
        }}
        maxLength={400}
        labelStyle={{fontFamily}}
        placeholder={Translation.t('socialApp.Comment.CommentFieldPlaceHolder')}
        value={comment}
        onChangeText={comment => setComment(comment)}
        rightIcon={
          <TouchableSendButtonContainer onPress={handleOnPress}>
            <Send width={IconSize} height={IconSize} />
          </TouchableSendButtonContainer>
        }
      />
    </CommentFieldContainer>
  );
};

export default CommentField;

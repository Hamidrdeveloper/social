//React & React Native
import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

//React Native Elements
import {Avatar} from 'react-native-elements';

//i18n
import Translation from '../../constants/i18n';

//Shared
import NavLink from '../NavLink/NavLink';

//Sub Components
import CommentInteraction from './CommentInteraction/CommentInteraction';

//Comment Field
import {CommentField} from '../../shared';

//Styled Components
import {
  MainCommentContainer,
  MainCommentActionContainer,
  CommentContainer,
  TouchableAvatarContainer,
  ContentCommentContainer,
  UserDateContainer,
  TouchableUserName,
  UserNameText,
  PostedTimeReferenceText,
  TextCommentContainer,
  CommentText,
  AnswerLinkContainer,
} from './Comment.styles';

import {profileImages} from '../../assets/Images/ProfileImages/Images';

//Utils
import {dateFormatter} from '../../utils/DateFormatter/DateFormatter';
import numberFormatter from '../../utils/NumberFormatter/NumberFormatter';
import {Context as CommentContext} from '../../contexts/CommentContext';

const Comment = ({
  id,
  username,
  profileImage,
  date,
  ups,
  down,
  comment,
  answersCommentsId,
  repliesView = false,
  replyEnabled = true,
  openResponses,
}) => {
  console.log('username', answersCommentsId);
  const {loadCommentsReplay} = useContext(CommentContext);
  const [repComment, setRepComment] = useState([]);
  console.log('comment.user.profile_pic', comment.up_votes);

  const [showMakeResponse, setShowMakeResponse] = useState(false);

  return (
    <>
      <MainCommentContainer
        style={[repliesView ? styles.colorComment : styles.unColorComment]}>
        <CommentContainer>
          <TouchableAvatarContainer>
            <Avatar
              size="medium"
              rounded
              title="MD"
              source={
                profileImage
                  ? {
                      uri: profileImage?.replace(/https/g, 'http'),
                    }
                  : {uri: 'https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png'}
              }
              placeholderStyle={{width:50,height:50,backgroundColor:'#000'}}
             
            />
          </TouchableAvatarContainer>
          <ContentCommentContainer>
            <UserDateContainer>
              <TouchableUserName>
                <UserNameText>{`@${username}`}</UserNameText>
              </TouchableUserName>
             
            </UserDateContainer>
            <PostedTimeReferenceText>
                {new Date(date).toLocaleString()}
              </PostedTimeReferenceText>
            <TextCommentContainer>
              <CommentText>{comment}</CommentText>
            </TextCommentContainer>
          </ContentCommentContainer>
        </CommentContainer>
      </MainCommentContainer>
      <MainCommentActionContainer
        style={[repliesView ? styles.colorComment : styles.unColorComment]}>
        <CommentInteraction
          id={id}
          ups={ups}
          downs={down}
          openReply={() => setShowMakeResponse(!showMakeResponse)}
          replyEnabled={replyEnabled}
        />
        {showMakeResponse && (
          <CommentField referenceId={id} replyToComment={replyEnabled} />
        )}
        {replyEnabled && answersCommentsId > 0 && (
          <AnswerLinkContainer>
            <NavLink
              messageText={`${numberFormatter(
                answersCommentsId,
              )} ${Translation.t('socialApp.Comment.AnswersLinkTitle')}`}
              reDirectFunction={false}
              alternativeFunction={() => openResponses(id)}
            />
          </AnswerLinkContainer>
        )}
      </MainCommentActionContainer>
    </>
  );
};

const styles = StyleSheet.create({
  unColorComment: {
    backgroundColor: 'white',
  },
  colorComment: {
    backgroundColor: '#e9f1f8',
  },
});
export default Comment;

import React, {useContext} from 'react';

//Context
import {Context as CommentContext} from '../../../contexts/CommentContext';
import {Context as AuthContext} from '../../../contexts/AuthContext';

//Icons
import {Up, Down, Options} from './../../Icons';

//Utils
import numberFormatter from '../../../utils/NumberFormatter/NumberFormatter';

//Styled Components
import {
  CommentInteractionContainer,
  UpsTouchableContainer,
  DownsTouchableContainer,
  UpDownCounterText,
  ReplyButtonText,
  OptionsContainer,
  OptionsTouchableContainer,
  ReplyTouchableContainer,
} from './CommentInteraction.styles';

const CommentInteraction = ({id, ups, downs, openReply, replyEnabled}) => {
  const IconSize = 15;
  console.log('ups', ups);
  const {state} = useContext(AuthContext);
  const {upComment, downComment, setShowMode, setCommentId} =
    useContext(CommentContext);

  return (
    <CommentInteractionContainer>
      <ReplyTouchableContainer onPress={() => openReply()}>
        <ReplyButtonText>Antworten</ReplyButtonText>
      </ReplyTouchableContainer>

      <UpsTouchableContainer onPress={() => upComment(id, state.token)}>
        <Up width={IconSize} height={IconSize} />
        <UpDownCounterText>{ups}</UpDownCounterText>
      </UpsTouchableContainer>
      <DownsTouchableContainer onPress={() => downComment(id, state.token)}>
        <Down width={IconSize} height={IconSize} />
        <UpDownCounterText>{numberFormatter(downs)}</UpDownCounterText>
      </DownsTouchableContainer>
      <OptionsContainer>
        <OptionsTouchableContainer
          onPress={() => {
            setCommentId(id);
            setShowMode(true);
          }}>
          <Options width={IconSize} height={IconSize} />
        </OptionsTouchableContainer>
      </OptionsContainer>
    </CommentInteractionContainer>
  );
};

export default CommentInteraction;

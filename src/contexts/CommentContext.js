//React & React Native
import React, {createContext, useReducer, useState} from 'react';

//API
import CommentsApi from './../api/apiConfig';

//Local Assets
import {COMMENTS_DATA} from '../assets/comments';
import {
  createCommenters,
  getCommenters,
  downApiComment,
  upApiComment,
  deleteApiComment,
  getCommentersReplay,
  createCommentersReply,
  deleteVoteApi,
  getCommentersUPD,
  getCommentersDownD,
  getCommentersDownV,
  getCommentersUPV,
} from '../api/cooment';

const initialState = {
  comments: [],
  responses: [],
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return {...state, comments: action.payload};

    case 'LOAD_SINGLE_COMMENT':
      return {...state, comment: action.payload};

    case 'LOAD_COMMENT_RESPONSES':
      return {...state, responses: action.payload};

    case 'POST_COMMENT':
      return {...state, comments: action.payload};

    case 'UP_DOWN_COMMENT':
      return {...state, comments: action.payload};

    case 'REPLY_COMMENT':
      return {...state, commentsReplay: action.payload};

    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isShowMode, setShowMode] = useState(false);
  const [commentId, setCommentId] = useState(0);
  //Functions

  const loadCommentsReplay = async userId => {
    // eslint-disable-next-line no-alert

    return getCommentersReplay(userId, 100, 1).then(res => {
      console.log(res);
      dispatch({type: 'LOAD_COMMENT_RESPONSES', payload: res});

      return res;
    });
  };
  const loadComments = async userId => {
    // eslint-disable-next-line no-alert

    getCommenters(userId, 100, 1).then(res => {
      dispatch({type: 'LOAD_COMMENTS', payload: res});
      console.log(
        '\nLoading Comments successfully=======================>\n',
        res,
      );
    });
  };
  const loadCommentsUpV = async userId => {
    // eslint-disable-next-line no-alert

    getCommentersUPV(userId, 100, 1).then(res => {
      dispatch({type: 'LOAD_COMMENTS', payload: res});
      console.log(
        '\nLoading Comments successfully=======================>\n',
        res,
      );
    });
  };
  const loadCommentsDownV = async userId => {
    // eslint-disable-next-line no-alert

    getCommentersDownV(userId, 100, 1).then(res => {
      dispatch({type: 'LOAD_COMMENTS', payload: res});
      console.log(
        '\nLoading Comments successfully=======================>\n',
        res,
      );
    });
  };
  const loadCommentsUpD = async userId => {
    // eslint-disable-next-line no-alert

    getCommentersUPD(userId, 100, 1).then(res => {
      dispatch({type: 'LOAD_COMMENTS', payload: res});
      console.log(
        '\nLoading Comments successfully=======================>\n',
        res,
      );
    });
  };
  const loadCommentsDownD = async userId => {
    // eslint-disable-next-line no-alert

    getCommentersDownD(userId, 100, 1).then(res => {
      dispatch({type: 'LOAD_COMMENTS', payload: res});
      console.log(
        '\nLoading Comments successfully=======================>\n',
        res,
      );
    });
  };

  const loadSingleComment = async commentId => {
    console.log('\nLoading Comment.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');

      const comment = COMMENTS_DATA.find(comment => comment.id === commentId);
      console.log('Comment Context');
      console.log(comment);
      dispatch({type: 'LOAD_SINGLE_COMMENT', payload: comment});

      console.log('\nLoading Comment successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nLoading Comment failed.\n');
    }
  };

  const loadCommentResponses = async responsesIds => {
    console.log('\nLoading Responses.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');

      const responses = COMMENTS_DATA.filter(comment =>
        responsesIds.includes(comment.id),
      );
      console.log(responses);
      dispatch({type: 'LOAD_COMMENT_RESPONSES', payload: responses});

      console.log('\nLoading Responses successfully\n');
    } catch (error) {
      console.log(error);
      console.log('\nLoading Responses failed.\n');
    }
  };

  const upComment = async (commentId, userId) => {
    console.log('\nLiking Comment.\n');
    upApiComment(commentId).then(res => {
      loadComments(res.post_id);
    });
  };

  const downComment = async (commentId, userId) => {
    downApiComment(commentId).then(res => {
      loadComments(res.post_id);
    });
  };
  const deleteComment = async (commentId, postId) => {
    deleteApiComment(commentId).then(res => {
      loadComments(postId);
    });
  };
  const deleteVote = async (commentId, postId) => {
    deleteVoteApi(commentId).then(res => {
      loadComments(postId);
    });
  };

  
  const createComment = async (id, newComment) => {
    console.log('\nCreating Comment.\n');
    try {
      createCommenters(id, newComment).then(res => {
        loadComments(id);
      });
      //const posts = AuthApi.get('./loadPosts');
      const comments = state.comments;

      dispatch({type: 'POST_COMMENT', payload: comments});
      console.log('\nCreating Comment successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nCreating Comment failed.\n');
    }
  };
  const createCommentReply = async (id, newComment) => {
    console.log('\nCreating Comment.\n');
    try {
      createCommentersReply(id, newComment).then(res => {
        loadCommentsReplay(id);
      });
      //const posts = AuthApi.get('./loadPosts');
      const comments = state.comments;

      dispatch({type: 'POST_COMMENT', payload: comments});
      console.log('\nCreating Comment successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nCreating Comment failed.\n');
    }
  };

  const answerToComment = async (newComment, commentId) => {
    console.log('\nResponding to Comment.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');
      const comments = state.comments;
      console.log(commentId);
      console.log(1);
      comments.push(newComment);

      console.log(1);
      const [comment] = comments.filter(comment => comment.id === commentId);
      console.log(comment);
      console.log(3);
      comment.answersCommentsId.push(newComment);
      console.log(4);
      dispatch({type: 'REPLY_COMMENT', payload: comments});

      console.log('\nResponding to Comment successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nResponding to Comment failed.\n', error);
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        loadComments,
        loadSingleComment,
        loadCommentResponses,
        upComment,
        downComment,
        createComment,
        answerToComment,
        deleteComment,
        isShowMode,
        setShowMode,
        commentId,
        setCommentId,
        loadCommentsReplay,
        createCommentReply,
        deleteVote,
        loadCommentsUpV,
        loadCommentsDownD,
        loadCommentsUpD,
        loadCommentsDownV,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export {Context, Provider};

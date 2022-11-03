//React & React Native
import React, {createContext, useReducer} from 'react';

//API
import PostApi from './../api/apiConfig';

//Local Assets
import {POST_DATA} from '../assets/posts';
import {Post, Profile} from '../api';
import { AsyncStorage } from 'react-native';
import { myProfile } from '../api/profile';

const initialState = {
  posts: [],
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {...state, posts: action.payload};

    case 'LIKE_UNLIKE_POST':
      return {...state, posts: action.payload};

    case 'COMMENT_POST':
      return {...state, posts: action.payload};

    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Functions
  const loadPosts = async () => {
    const {error, data} = await Profile.myProfile();
    console.log('myProfile', data);
    AsyncStorage.setItem('user', JSON.stringify(data.user));
    console.log('\nLoading Posts.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');
      return Post.full().then(res => {
        console.log('LOAD_POSTS', res);
        dispatch({type: 'LOAD_POSTS', payload: res});
      });

      console.log('\nLoading Posts successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nLoading Posts failed.\n');
    }
  };

  const likeAndUnLikePost = async (postId, userId) => {
    console.log('\nLiking Post.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');
      userId = parseInt(userId);

      const posts = state.posts;

      const [post] = posts.filter(post => post.id === postId);

      const commentUserIdIndex = post.likesListsId.indexOf(userId);

      if (commentUserIdIndex === -1) {
        post.likesListsId.push(userId);
      } else {
        post.likesListsId = post.likesListsId.filter(id => id !== userId);
      }

      dispatch({type: 'LIKE_UNLIKE_POST', payload: posts});

      console.log('\nLiking Post successfully\n');
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nLiking Post failed.\n');
    }
  };

  const commentPost = async (postId, commentId) => {
    console.log('\nCommenting Post.\n');
    try {
      //const posts = AuthApi.get('./loadPosts');

      const posts = state.posts;

      const [post] = posts.filter(post => post.id === postId);

      post.answersCommentsId.push(commentId);

      dispatch({type: 'LIKE_UNLIKE_POST', payload: posts});

      console.log('\nCommenting Post successfully\n');
      loadPosts();
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nCommenting Post failed.\n');
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        loadPosts,
        likeAndUnLikePost,
        commentPost,
      }}>
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};

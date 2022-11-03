//React & React Native
import React, {createContext, useReducer} from 'react';

const initialState = {
  photos: true,
  videos: true,
  questions: true,
  listView: false,
  tileView: true,
  portraitView: true,
  squareView: false,
  fillTile: false,
  tilesPerRow: 3,
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTENT':
      return {
        ...state,
        photos: action.payload.photos,
        videos: action.payload.videos,
        questions: action.payload.questions,
      };
    case 'SET_CONTENT_VIEW_MODE':
      return {
        ...state,
        listView: action.payload.listView,
        tileView: action.payload.tileView,
      };
    case 'SET_POST_VIEW_MODE':
      return {
        ...state,
        portraitView: action.payload.portraitView,
        squareView: action.payload.squareView,
        fillTile: action.payload.fillTile,
      };
    case 'SET_CONTENT_VIEW_AMOUNT':
      return {
        ...state,
        tilesPerRow: action.payload.tilesPerRow,
      };
    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Functions
  const setContent = async content =>
    dispatch({type: 'SET_CONTENT', ...state, payload: content});
  const setContentViewMode = async contentViewMode =>
    dispatch({
      type: 'SET_CONTENT_VIEW_MODE',
      ...state,
      payload: contentViewMode,
    });
  const setPostViewMode = async postViewMode =>
    dispatch({type: 'SET_POST_VIEW_MODE', ...state, payload: postViewMode});
  const setContentViewAmount = async contentViewAmount =>
    dispatch({
      type: 'SET_CONTENT_VIEW_AMOUNT',
      ...state,
      payload: contentViewAmount,
    });

  return (
    <Context.Provider
      value={{
        state,
        setContent,
        setContentViewMode,
        setPostViewMode,
        setContentViewAmount,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};

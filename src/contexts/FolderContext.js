//React & React Native
import React, {createContext, useReducer} from 'react';

import {createFolder, fullFolder} from '../api/folder';

const initialState = {
  folders: [],
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_FOLDERS':
      return {...state, folders: action.payload};

    case 'LIKE_UNLIKE_FOLDER':
      return {...state, folders: action.payload};

    case 'COMMENT_FOLDER':
      return {...state, folders: action.payload};

    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  function getFullFolder(data) {
    fullFolder(data).then(res => {
      dispatch({type: 'LOAD_FOLDERS', payload: res.data?.folders});
    });
  }

  return (
    <Context.Provider
      value={{
        state,
        getFullFolder,
      }}>
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};

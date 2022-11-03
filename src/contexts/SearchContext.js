//React & React Native
import React, {createContext, useReducer} from 'react';

const initialState = {
  keyword: '',
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return {...state, keyword: action.payload};
    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Functions
  const setKeyword = async keyword =>
    dispatch({type: 'SET_KEYWORD', payload: keyword});

  return (
    <Context.Provider
      value={{
        state,
        setKeyword,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};

import React, {createContext, useReducer} from 'react';
import {gullGetBlackUser, unBlackUser, onBlackUser} from '../api/profile';

import {BLOCKED_USER} from '../assets/blockedUsers';

const initialState = {
  blockedUser: [],
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BLOCKED_USER':
      return {...state, blockedUser: action.payload};

    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const unBlockedUser = async id => {
    unBlackUser(id).then(res => {
      console.log(res);
      loadBlockedUser();
    });
  };
  const onBlockedUser = async id => {
    onBlackUser(id).then(res => {
      console.log(res);
    });
  };
  const loadBlockedUser = async () => {
    console.log('\nLoading Blocked users.\n');
    try {
      //const USERS = AuthApi.get('./loadBlockedUser');
      gullGetBlackUser().then(res => {
        const blockedUser = BLOCKED_USER;

        dispatch({type: 'LOAD_BLOCKED_USER', payload: res});

        console.log('\nLoading blocked users successfully\n');
      });
    } catch (error) {
      //dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: error.message});
      console.log('\nLoading blocked users failed.\n');
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        loadBlockedUser,
        unBlockedUser,
        onBlockedUser,
      }}>
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};

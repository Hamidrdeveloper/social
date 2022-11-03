//React
import React, {createContext, useState} from 'react';

const initialState = {
  reloadPosts: false,
  setReloadPost: () => {},
  reloadSearchRequests: false,
  setReloadSearchRequests: () => {},
  current_page: '',
  setCurrent_page: '',
};

const ProfileContext = createContext(initialState);

const ProfileProvider = props => {
  const [reloadPosts, setReloadPost] = useState(initialState.reloadPosts);
  const [current_page, setCurrent_page] = useState('0');

  const [reloadSearchRequests, setReloadSearchRequests] = useState(
    initialState.reloadSearchRequests,
  );

  return (
    <ProfileContext.Provider
      value={{
        reloadPosts,
        setReloadPost,
        reloadSearchRequests,
        setReloadSearchRequests,
        current_page,
        setCurrent_page,
      }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export {ProfileContext, ProfileProvider};

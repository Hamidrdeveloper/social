//React
import React, {createContext, useState} from 'react';

const initialState = {actualTab: 'Feed'};

const NavigationContext = createContext(initialState);

const NavigationProvider = props => {
  const [actualTab, setActualTab] = useState(initialState.actualTab);

  return (
    <NavigationContext.Provider value={{actualTab, setActualTab}}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export {NavigationContext, NavigationProvider};

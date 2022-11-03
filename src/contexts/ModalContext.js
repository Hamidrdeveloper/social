//React
import React, {createContext, useState} from 'react';

const initialState = {modalVisible: false};

const ModalContext = createContext(initialState);

const ModalProvider = props => {
  const [modalVisible, setModalVisible] = useState(initialState.modalVisible);

  return (
    <ModalContext.Provider value={{modalVisible, setModalVisible}}>
      {props.children}
    </ModalContext.Provider>
  );
};

export {ModalContext, ModalProvider};

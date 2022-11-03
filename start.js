import React from 'react';
import {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import App from './App';

export default function Start() {
  useEffect(() => {
    let fontName = 'Montserrat-Black';
    GlobalFont.applyGlobal(fontName);
  }, []);
  return (
    <>
      <App />
    </>
  );
}

//React & React Native
import React from 'react';

//Styled components
import {ErrorText} from './ErrorMessage.styles';

const ErrorMessage = ({message, available}) => {
  return <>{available != '' && <ErrorText>{message}</ErrorText>}</>;
};

export default ErrorMessage;

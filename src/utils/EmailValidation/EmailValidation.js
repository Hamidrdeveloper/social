import React, {useState} from 'react';
import Regexs from '../../constants/regexs';

const EmailValidation = () => {
  const validateEmail = input => {
    const expression = Regexs.email;

    return expression.test(input.toLowerCase().trim()) ? true : false;
  };

  return validateEmail;
};

export default EmailValidation;

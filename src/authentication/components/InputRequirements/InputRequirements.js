//React & React Native
import React, {useState, useEffect} from 'react';

//React Native Elements
import {Icon} from 'react-native-elements';

//Styled Componentes
import {
  RequirementsContainer,
  IconTextValid,
  IconTextNotValid,
} from './InputRequirements.styles';

//Regex
import Regexs from '../../../constants/regexs';
import colorSchema from '../../../constants/colorSchema';

/**
 * Password requirements:
 * at least 8 characters : Mindestens 8 Buchstaben
 * A number : Eine Zahl
 * A special character : Ein Sonderzeichen
 * Upper and lowercase letter : Groß- und Kleinbuchstaben
 */

const InputRequirements = ({input, toggle}) => {
  const [hasMinLength, setHasMinLegth] = useState(false);
  const [includesNumber, setIncludesNumber] = useState(false);
  const [includesSpecialChar, setIncludesSpecialChar] = useState(false);
  const [includesUpLow, setIncludesUpLow] = useState(false);

  const validateRequirements = input => {
    setHasMinLegth(Regexs.password.hasMinLength.test(input));
    setIncludesNumber(Regexs.password.includesNumber.test(input));
    setIncludesSpecialChar(Regexs.password.includesSpecialChar.test(input));
    setIncludesUpLow(Regexs.password.includesUpLow.test(input));
   


    hasMinLength && includesNumber && includesSpecialChar && includesUpLow
      ? toggle(true)
      : toggle(false);
  };

  const requirements = [
    {message: 'Mindestens 8 Zeichen', fulfilled: hasMinLength},
    {message: 'Eine Zahl', fulfilled: includesNumber},
    {message: 'Ein Sonderzeichen (#?!@$%^&*-)', fulfilled: includesSpecialChar},
    {message: 'Groß- und Kleinbuchstaben', fulfilled: includesUpLow},
  ];

  useEffect(() => {
    validateRequirements(input);
  }, [input]);

  const Requirement = ({input, message, fulfilled}) => {
    validateRequirements(input);
    return (
      <>
        {fulfilled ? (
          <IconTextValid>
            <Icon
              name="check-circle"
              type="font-awesome"
              color={colorSchema.validations.valid}
              size={15}
              style={{marginRight: 10}}
            />
            {message}
          </IconTextValid>
        ) : (
          <IconTextNotValid>
            <Icon
              name="exclamation-circle"
              type="font-awesome"
              color={colorSchema.validations.invalid}
              size={15}
              style={{marginRight: 10}}
            />
            {message}
          </IconTextNotValid>
        )}
      </>
    );
  };

  return (
    <>
      {input != '' && (
        <RequirementsContainer>
          {requirements.map(requirement => (
            <Requirement
              input={input}
              message={requirement.message}
              fulfilled={requirement.fulfilled}
            />
          ))}
        </RequirementsContainer>
      )}
    </>
  );
};

export default InputRequirements;

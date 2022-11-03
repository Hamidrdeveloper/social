//React & React Native
import React, {useContext} from 'react';
import {View} from 'react-native';

//React Native Elements
import {Input, Icon, Text} from 'react-native-elements';

//Contexts
import {ThemeContext} from 'styled-components';
import {checkUserName} from '../../../api/profile';

//i18n
import Translation from '../../../constants/i18n';

//Regex
import Regexs from '../../../constants/regexs';

const UserNameField = ({
  setValue,
  setValidValue,
  value,
  validValue,
  showRightIcon = true,
}) => {
  const VALUE_MAX_LENGTH = 20;
  const VALUE_MIN_LENGTH = 8;

  const themeContext = useContext(ThemeContext);
  const {fontFamily} = themeContext;

  const validateUserName = username => {
    return (
      username.length >= VALUE_MIN_LENGTH &&
      username.length <= VALUE_MAX_LENGTH &&
      Regexs.username.whiteSpaces.test(username)
      //TODO Add Regex to not allow more than 4 characters consecutively
    );
  };
  const handleOnChangeText = username => {
  
    setValue(username.length > 20 ? username.slice(0, 20) : username);
    if (

      validateUserName(username.length > 20 ? username.slice(0, 20) : username)
    ) {
      setValidValue(true);
      checkUserName(username).then(res => {
        if (res) {
          setValidValue(true);
        } else {
          // setValidValue(false);
        }
      });
    }else{
      setValidValue(false);
    }
  };

  const ValidUserNameIcon = ({value, validValue}) => {
    return (
      <>
        {value ? (
          validValue ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="check-circle"
                type="font-awesome"
                color="black"
                size={15}
                style={{marginRight: 10}}
              />
              <Text>
                {value.length}/{VALUE_MAX_LENGTH}
              </Text>
            </View>
          ) : (
            <>
              <Icon
                name="exclamation-circle"
                type="font-awesome"
                color="black"
                size={15}
                style={{marginRight: 10}}
              />
              <Text>
                {value.length}/{VALUE_MAX_LENGTH}
              </Text>
            </>
          )
        ) : null}
      </>
    );
  };

  return (
    <Input
      label={Translation.t('socialApp.Authentification.Username.label')}
      labelStyle={{fontFamily}}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={false}
      onChangeText={username => {
        handleOnChangeText(username);
      }}
      rightIcon={
        showRightIcon && (
          <ValidUserNameIcon value={value} validValue={validValue} />
        )
      }
    />
  );
};

export default UserNameField;

//React & React Native
import React, {useState, useEffect} from 'react';

//components
import {
  NavLink,
  ErrorMessage,
  EmailField,
  PasswordField,
  CustomButton,
  UserNameField,
} from '../../../shared';

//Styled components
import {FormContainer, NavLinkView} from './LoginForm.styles';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
//i18n
import Translation from '../../../constants/i18n';
import {Button, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import {BACKEND_URL} from '../../../constants/constants';
import axios from 'axios';
import {apiResponseWrapper} from '../../../utils/Api/Api.utils';
import {AsyncStorage} from 'react-native';
import {Profile} from '../../../api';
import {useContext} from 'react';
import {Context as AuthContext} from '../../../contexts/AuthContext';
import Toast from 'react-native-toast-message';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
const LoginForm = ({
  errorMessage = '',
  onSubmit,
  onNotValidSubmit,
  loading,
}) => {
  const {state, dispatch, updateErrorMessage} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fbId, setFbld] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [loginGoole, setLoginGoole] = useState(true);

  useEffect(() => {
    // Initial configuration

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '33963814932-plgbgs9kqgk7vk9nmln5raksr3poirhp.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      androidClientId:
        '33963814932-plgbgs9kqgk7vk9nmln5raksr3poirhp.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });

    // Check if user is already signed in

    _isSignedIn();
  }, []);
  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();

    if (isSignedIn) {
      // Set User Info if user is already signed in

      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }

    setGettingLoginStatus(false);
  };
  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();

      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log("Unable to get user's info");
      }
    }
  };
  const register = async (username, email, password, birthdate, fbId) => {
    console.log('e');
    let data = new Date(birthdate).getTime() / 1000;
    const body = {
      username,
      email,
      password,
      birthdate: data,
      fullname: username,
      fbId: fbId,
    };
    console.log(body);
    try {
      console.log('try');
      const response = await axios.post(`${BACKEND_URL}/user/register`, body);
      let {error, data} = apiResponseWrapper(response);
      if (error) {
        dispatch({type: 'UPDATE_ERROR_MESSAGE', payload: data?.errorMessage});
      } else {
        setUserInfo(null);
        await AsyncStorage.setItem('refreshToken', data.refresh_token);
        await AsyncStorage.setItem('token', data.access_token);
        dispatch({type: 'LOG_IN', payload: data.access_token});
        let {error, data: myProfileData} = await Profile.myProfile();
        if (!error) {
          data = myProfileData;
        }
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        dispatch({type: 'SET_USER', user: data.user});
      }
    } catch (e) {
      console.log('catch', e);
      console.log(e);
      if (e == 'Error: Request failed with status code 400') {
        login(username, password);
      }
    }
  };

  const login = async (username, password, fbId) => {
    const body = {
      username,
      password,
      fbId,
    };
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, body, {
        header: {},
      });

      let {error, data} = apiResponseWrapper(response);

      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${data?.errorMessage}`,
        });
      } else {
        setUserInfo(null);
        await AsyncStorage.setItem('refreshToken', data.refresh_token);
        await AsyncStorage.setItem('token', data.access_token);
        dispatch({type: 'LOG_IN', payload: data.access_token});
        let {error, data: myProfileData} = await Profile.myProfile();
        if (!error) {
          data = myProfileData;
        }
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        dispatch({type: 'SET_USER', user: data.user});
      }
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${e}`,
      });
    }
  };
  useEffect(() => {
    if (userInfo?.user?.email && loginGoole) {
      setLoginGoole(false);
      let email = userInfo?.user?.email;
      let password = 'Xxpo@147852369';
      let username =
        userInfo?.user?.familyName + userInfo?.user?.email.substring(0, 4);
      let birthdate = '2022-08-24T21:10:46.603Z';
      register(username, email, password, birthdate, fbId);
      // login(username, password, fbId);
    }
  }, [userInfo]);

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  useEffect(() => {
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(x => {
        setFbld(x);
        console.log('=================================>', x);
      })
      .catch(e => console.log('=================================>', e));
    onNotValidSubmit({message: ''});
  }, []);

  const handleOnPress = () => {
    if (!isValidUsername && isValidUsername) {
      onNotValidSubmit({
        message: Translation.t('socialApp.Authentification.Username.error'),
      });
    } else if (!isValidUsername && !isValidPassword) {
      onNotValidSubmit({
        message: Translation.t(
          'socialApp.Authentification.Username.errorAllFields',
        ),
      });
    } else {
      onSubmit({username, password, fbId});
    }
  };

  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: result});
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  const loginFacebook = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert(
            'Login success with permissions: ' +
              +result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        alert('Login fail with error: ' + error);
      },
    );
  };
  return (
    <FormContainer>
      <UserNameField
        value={username}
        setValue={setUsername}
        validValue={isValidUsername}
        setValidValue={setIsValidUsername}
        showRightIcon={false}
      />

      <PasswordField
        setValue={setPassword}
        value={password}
        setValidValue={setIsValidPassword}
      />

      <ErrorMessage available={errorMessage} message={errorMessage} />
      <NavLinkView>
        <NavLink
          messageText={Translation.t(
            'socialApp.Authentification.ForgotPassword.linkText',
          )}
          navigateTo="forgotPassword"
        />
      </NavLinkView>
      <LoginButton
        style={{
          width: `97%`,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
      <View style={{height: 8}} />
      <GoogleSigninButton
        style={{width: `97%`, height: 38}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={_signIn}
      />
      <CustomButton
        title={Translation.t('socialApp.Authentification.Button.login')}
        onPress={handleOnPress}
        loading={loading}
      />
    </FormContainer>
  );
};

export default LoginForm;

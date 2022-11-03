import AxiosInstance from '../api/apiConfig';
import {apiResponseWrapper} from '../utils/Api/Api.utils';

export default class API {
  constructor() {}

  apiLogin = async ({username, password,fbId}) => {
    const body = {
      username,
      password,
      fbId:"",
    };
    const response = await AxiosInstance.post('/user/login', body, {
      header: {},
    });
    return apiResponseWrapper(response);
  };

  register = async ({username, email, password, birthdate,fbId}) => {
    const body = {
      username,
      password,
      email,
      fullname: username,
      fbId:"",
    };
    console.tron.log('-> body in register', body);

    const response = await AxiosInstance.post('/user/register', body, {
      header: {},
    });
    return apiResponseWrapper(response);
  };

  forgotPassword = async ({email}) => {
    const body = {
      email,
    };
    const response = await AxiosInstance.post('');
  };

  changePassword = ({oldPassword, newPassword}) => {
    const body = {
      old_password: oldPassword,
      password: newPassword,
    };
    console.log(body);
    const response = AxiosInstance.post(
      '/user/changePassword',
      JSON.stringify({old_password: oldPassword, password: newPassword}),
    ).then(()=>{
      return true
    }).catch(()=>{
      return false;

    });
  };
}

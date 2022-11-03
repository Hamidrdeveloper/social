import {USER_DATA} from '../assets/users';
import AxiosInstance from './apiConfig';

//Utils
import {apiResponseWrapper, configAuthorization} from '../utils/Api/Api.utils';

export const follow = user => {
  //API AddFriend
};

export const subscribe = user => {
  //API AddFriend
};

export const generalSetting = setting => {
  //API change swith general setting
};

export const chatSetting = setting => {
  //API change swith chat setting
};

export const changeEmail = async ({email}) => {
  const body = {
    email: email,
  };
  const response = await AxiosInstance.post('/user/changeEmail', body);
  return apiResponseWrapper(response);
};

export const changePhone = async ({phone}) => {
  const body = {
    phone: phone,
  };
  const config = {
    headers: {'content-type': 'application/x-www-form-urlencoded'},
  };
  const response = await AxiosInstance.post(
    '/user/changePhone',
    JSON.stringify({phone: phone}),
  );
  return apiResponseWrapper(response);
};

export const deactivateAccount = user => {
  //API to deactivate account
};

export const getStatistics = () => {
  return {
    followers: '2.8 M',
    followings: '1.222',
    request: '43',
    contributions: '2.568',
  };
};

export const searchProfileByUsername = username => {
  return USER_DATA.find(user => user.username === username);
};

export const myProfile = async () => {
  const response = await AxiosInstance.get('/user/myProfile');
  console.log('MY', response);
  return apiResponseWrapper(response);
};

export const getProfile = async userId => {
  const response = await AxiosInstance.get(`/user/getUserProfile/${userId}`);
  console.log(response);
  return apiResponseWrapper(response);
};

export const searchProfileByUsernameWithAxios = async username => {
  const response = await AxiosInstance.get(`/user/search?username=${username}`);
  return apiResponseWrapper(response);
};

export const getProfilePicUrl = async username => {
  const {error, data} = await searchProfileByUsernameWithAxios(username);
  if (error !== true) {
    const profilePicUrl = await data.user.profile_pic;
    return profilePicUrl;
  }
  return null;
};
export const exportPost = async () => {
  return AxiosInstance.get('/post/exportList').then(res => {
    console.log(res);
    return res.data.requests;
  });
};
export const gullGetBlackUser = async () => {
  return AxiosInstance.get('/user/myBlockList?per_page=32&page=1').then(res => {
    console.log(res);
    return res.data.users;
  });
};
export const unBlackUser = async id => {
  return AxiosInstance.post(`/user/unblock/${id}`).then(res => {
    console.log(res);
    return res;
  });
};
export const onBlackUser = async id => {
  return AxiosInstance.post(`/user/block/${id}`).then(res => {
    console.log(res);
    return res;
  });
};
export const onEditProfile = async ({
  fullname,
  bio_content,
  is_public,
  website,
  birthday,
  gender,
  address,
}) => {
  //Post data
  const postData = {
    fullname,
    bio_content,
    gender: gender,
    is_public: is_public,
    website: website,
    birthday: birthday,
    address: address,
  };
  return AxiosInstance.post('/user/editProfile', postData).then(res => {
    console.log(res);
    return res;
  });
};
export const onSetProfilePic = async imageUri => {
  const imageData = new FormData();
  imageData.append('pic', {
    uri: imageUri.imageUri,
    type: 'image/jpg',
    name: 'test',
  });
  console.log(imageUri.imageUri);
  return AxiosInstance.post('/user/setProfilePic', imageData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${configAuthorization()}`,
    },
  }).then(res => {
    console.log(res);
    return res;
  });
};
export const checkUserName = async id => {
  return AxiosInstance.post(`/user/checkUsername?username=${id}`)
    .then(res => {
      console.log(res);
      return true;
    })
    .catch(() => {
      return false;
    });
};
export const deactivate = async id => {
  return AxiosInstance.post('/user/deactivate')
    .then(res => {
      console.log(res);
      return true;
    })
    .catch(() => {
      return false;
    });
};
export const sendCode = async id => {
  return AxiosInstance.post('/user/emailVerification/request')
    .then(res => {
      console.log(res);
      return res.data.ok;
    })
    .catch(() => {
      return false;
    });
};
export const vCode = async code => {
  const c = {
    code,
  };
  return AxiosInstance.post('/user/emailVerification/verify', c)
    .then(res => {
      return res.data.ok;
    })
    .catch(() => {
      return false;
    });
};
export const myFollowers = async code => {
  return AxiosInstance.get('/user/myFollowing?per_page=32&page=1')
    .then(res => {
      return res.data.followings;
    })
    .catch(() => {
      return null;
    });
};

export const savePrivacySettings = ({
  share_email,
  share_phone,
  allow_mention,
  mentioned_users,
  allow_tomtom,
  allow_chat_messages,
}) => {
  const postData = {
    share_email,
    share_phone,
    allow_mention,
    mentioned_users,
    allow_tomtom,
    allow_chat_messages,
  };
  return AxiosInstance.post('/user/savePrivacySettings', postData)
    .then(res => {
      console.log(res);
      return true;
    })
    .catch(() => {
      return false;
    });
};

//API
import {Follower} from '../../../../api/index';

//Translation
import Translation from '../../../../constants/i18n';

export const statisticsData = [
  {
    title: Translation.t('socialApp.Profile.header.follower'),
    keyName: 'followers',
    keyToObtainValue: 'followers_count',
    personalApi: (userId, page) => Follower.myFollowers({page}),
    externalApi: (userId, page) => Follower.getFollowers({userId, page}),
  },
  {
    title: Translation.t('socialApp.Profile.header.following'),
    keyName: 'followings',
    keyToObtainValue: 'following_count',
    personalApi: (userId, page) => Follower.myFollowing({page}),
    externalApi: (userId, page) => Follower.getFollowing({userId, page}),
  },
  {
    title: Translation.t('socialApp.Profile.header.request'),
    keyName: 'request',
    keyToObtainValue: '',
    personalApi: () => {},
    externalApi: () => {},
  },
  {
    title: Translation.t('socialApp.Profile.header.contributions'),
    keyName: 'contributions',
    keyToObtainValue: 'contributions',
    personalApi: () => {},
    externalApi: () => {},
  },
  // {
  //   title: Translation.t('socialApp.Profile.header.contributions'),
  //   keyName: 'contributions',
  //   keyToObtainValue: '',
  //   personalApi: () => {},
  //   externalApi: () => {},
  // },
];

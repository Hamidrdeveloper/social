//API
import * as API from '../../../../api/index';

//Translation
import Translation from '../../../../constants/i18n';

export const systemConfig = () => {
  return [
    {
      title: Translation.t('socialApp.NotificationSettings.system.title'),
      text: Translation.t('socialApp.NotificationSettings.system.text'),
      value: true,
      index: 0,
      api: () => {},
    },
    {
      title: Translation.t('socialApp.NotificationSettings.inApp.title'),
      text: Translation.t('socialApp.NotificationSettings.inApp.text'),
      value: false,
      index: 1,
      api: () => {},
    },
  ];
};

export const generalConfig = () => {
  return [
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.postLikes.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.postLikes.text',
      ),
      key: 'post_like_noti',
      index: 0,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.searchRequest.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.searchRequest.text',
      ),
      key: 'search_request_like_noti',
      index: 1,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.commentLikes.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.commentLikes.text',
      ),
      key: 'comment_like_noti',
      index: 2,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.postComments.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.postComments.text',
      ),
      key: 'post_comment_noti',
      index: 3,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.searchRequestComments.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.searchRequestComments.text',
      ),
      key: 'search_request_comment_noti',
      index: 4,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.mentioned.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.mentioned.text',
      ),
      key: 'mention_noti',
      index: 5,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.reply.title',
      ),
      text: Translation.t('socialApp.NotificationSettings.general.reply.text'),
      key: 'reply_noti',
      index: 6,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.newFollowers.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.newFollowers.text',
      ),
      key: 'new_follower_noti',
      index: 7,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.general.acceptedFollowers.title',
      ),
      text: Translation.t(
        'socialApp.NotificationSettings.general.acceptedFollowers.text',
      ),
      key: 'accept_follow_req_noti',
      index: 8,
      api: () => {},
    },
  ];
};

export const searchQuestionsConfig = () => {
  return [
    {
      title: Translation.t(
        'socialApp.NotificationSettings.searchQuestions.place.title',
      ),
      value: true,
      index: 0,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.searchQuestions.oneHourAgo.title',
      ),
      value: false,
      index: 1,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.searchQuestions.twentyFourHourAgo.title',
      ),
      value: false,
      index: 2,
      api: () => {},
    },
  ];
};

export const subscribersConfig = () => {
  return [
    {
      title: Translation.t(
        'socialApp.NotificationSettings.subscribers.newQuery.title',
      ),
      value: true,
      index: 0,
      api: () => {},
    },
    {
      title: Translation.t(
        'socialApp.NotificationSettings.subscribers.newPost.title',
      ),
      value: false,
      index: 1,
      api: () => {},
    },
  ];
};

export const profileGeneralConfig = () => {
  return [
    {
      title: Translation.t('socialApp.NotificationSettings.general.mute.title'),
      text: Translation.t('socialApp.NotificationSettings.general.mute.text'),
      value: true,
      index: 0,
      api: () => API.Profile.generalSetting(),
    },
  ];
};

export const profileChatConfig = () => {
  return [
    {
      title: Translation.t('socialApp.NotificationSettings.general.chat.title'),
      text: Translation.t('socialApp.NotificationSettings.general.chat.text'),
      value: false,
      index: 0,
      api: () => API.Profile.chatSetting(),
    },
  ];
};

export const privateProfile = () => {
  return [
    {
      title: Translation.t('socialApp.DataProtection.personalProfile'),
      text: Translation.t('socialApp.DataProtection.information'),
      value: false,
      index: 0,
      api: () => {},
    },
  ];
};

export const DataProtectionConfig = () => {
  return [
    {
      title: Translation.t('socialApp.DataProtection.chatMessages'),
      value: false,
      index: 0,
      paramter: 'allow_chat_messages',
      api: () => {},
    },
    {
      title: Translation.t('socialApp.DataProtection.email'),
      value: false,
      index: 1,
      paramter: 'share_email',
      api: () => {},
    },
    {
      title: Translation.t('socialApp.DataProtection.calls'),
      value: false,
      index: 2,
      paramter: 'share_phone',
      api: () => {},
    },
    {
      title: Translation.t('socialApp.DataProtection.mentions'),
      value: false,
      index: 4,
      paramter: 'allow_mention',
      api: () => {},
    },
    {
      title: Translation.t('socialApp.DataProtection.tomtom'),
      value: false,
      index: 5,
      paramter: 'allow_tomtom',
      api: () => {},
    },
  ];
};

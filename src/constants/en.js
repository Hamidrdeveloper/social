export default {
  socialApp: {
    Authentification: {
      Username: {
        label: 'Username',
        placeholder: 'Username',
        error: 'The username is not valid',
        errorAllFields: 'Please complete all fields',
      },
      Email: {
        label: 'E-mail',
        placeholder: 'E-mail',
        errorMessage: 'Please enter a valid email address',
      },
      Password: {
        label: 'Password',
        placeholder: 'Password',
      },
      Date: {
        label: 'Date',
      },
      Button: {
        login: 'Log In',
        register: 'Create Account',
        forgotPassword: 'Send',
      },
      NavigatorHeaders: {
        login: 'LOGIN',
        register: 'REGISTER',
      },
      ForgotPassword: {
        linkText: 'Forgot Password?',
        explanationText:
          "Enter your email address and we'll show you how to reset your password.",
      },
      SocialLogin: {
        title: 'or log in with',
      },
      TermsAndConditions: {
        message: 'With your registration you declare yourself with the ',
        link1: 'Conditions of use ',
        link2: 'Privacy Policy ',
        and: ' and ',
      },
    },
    SideBarDrawer: {
      home: 'Home',
      profile: 'Profile',
      options: 'Options',
      help: 'Help',
      dataProtection: 'Data Protection',
      newPost: 'New Post',
      imprint: 'Imprint',
      changeLog: 'Change Log',
      signOut: 'Sign Out',
      notifications: 'Notifications',
      chat: 'Chat',
    },
    MainAppNavigator: {
      forgotPasswordTitle: 'Forgot password',
      notificationSettings: 'Notification Settings',
      profileNotificationSettings: 'Notifications',
      searchRequest: 'Search Request',
    },
    Errors: {
      linkNotAvailable: 'Page not Available',
    },
    NumberAbbreviation: {
      thousands: 'K',
      millions: 'M',
    },
    DateAbbreviation: {
      ago: 'ago',
      lessThanAMinute: 'recently',
      second: 'second',
      seconds: 'seconds',
      minute: 'minute',
      minutes: 'minutes',
      hour: 'hour',
      hours: 'hours',
      day: 'day',
      days: 'days',
      week: 'week',
      weeks: 'weeks',
      month: 'month',
      months: 'months',
      year: 'year',
      years: 'years',
    },
    Buttons: {
      NewPost: 'New Post',
      Continue: 'Continue',
      Back: 'Back',
      Save: 'Save',
    },
    ScreenTitles: {
      DataProtection: 'Data Protection',
      HomeFeed: 'Home',
      Imprint: 'Imprint',
      NewPost: 'New Post',
      Search: 'Search',
      Notifications: 'Notifications',
      Messages: 'Messages',
    },
    Description: {
      showMore: 'more',
      showLess: 'less',
    },
    Comment: {
      CommentFieldPlaceHolder: 'Leave a Comment...',
      AnswersLinkTitle: 'Answers',
      ReplyButton: 'Reply',
    },
    newPost: {
      gallery: 'Gallery',
      photo: 'Photo',
      description: 'Description',
      continue: 'Continue',
      success: 'Success',
      postCreated: 'Post Created',
    },
    Options: {
      Screen1: 'USER ACCOUNT',
      Screen2: 'PROFILE',
      Screen3: 'DATA PROTECTION',
      Screen4: 'NOTIFICATIONS',
      Screen5: 'BLOCKED USERS',
      Screen6: 'LANGUAGE',
      deactivate: {
        text: {
          head: 'Are you sure you want to deactivate your user account? All your content will no longer be visible after deactivation.',
          body: 'You can reactivate your account at any time. You have up to 14 days to do so, in case it was deactivated accidentally or by mistake.',
          foot: 'After the 14 days it is no longer possible and all content from you will be deleted.',
          checkBox:
            'I understand that after 14 days my account cannot be restored.',
        },
        button: {
          cancel: 'Cancel',
          disable: 'Disable',
        },
        password: {
          label: {
            currentPassword: 'Aktuelles Passwort',
            newPassword: 'Neues Passwort ',
          },
          button: {
            title: 'Speichern',
          },
          error: 'Passwords are equal',
        },
      },
      password: {
        label: {
          currentPassword: 'Current Password',
          newPassword: 'New Password',
          changePasswordError: 'Error when changing your password',
        },
        button: {
          title: 'Save',
        },
        error: 'Passwords are not identical',
      },
    },
    UserAccount: {
      name: 'User Account',
      email: 'E-MAIL-ADRESS',
      mail: 'johnwilson@gmail.com',
      phone: 'PHONE NUMBER',
      number: '+490172123456789',
      bithday: 'BIRTHDAY',
      date: '20. APR 2000',
      information: 'The date of birth is not visible to anyone.',
      gender: 'GENDER',
      male: 'Male',
      female: 'female',

      information1: 'Das Geschlecht ist für niemanden sichtbar.',
      password: 'PASSWORD',
      deactivate: 'DEACTIVE ACCOUNT',
      save: 'Save',
      image: 'Image Upload',
      edit:'PROFILE',
    },
    DataProtection: {
      title: 'PROFILE',
      personalProfile: 'Private profile',
      information:
        'Only confirmed followers can see your profile, searches and posts.',
      general: 'GENERAL',
      chatMessages: 'Allow chat messages',
      email: 'Allow emails',
      calls: 'Allow calls',
      markers: 'Allow markers',
      mentions: 'Allow mentions',
      tomtom: 'Allow TomTom',
      mydata: 'MY DATA',
      request: 'Inquiries',
    },
    Notification: {
      title: 'Notifications',
      all: 'ALL',
    },
    NotificationSettings: {
      title: {
        general: 'GENERAL',
        searchQuestions: 'SEARCH QUESTIONS',
        subscribers: 'YOUR SUBSCRIBERS',
      },
      subtitle: {
        searchQuestions: 'Receive notification of searches you participate in.',
      },
      system: {
        title: 'System notifications',
        text: 'Receive notifications outside the Sircher app.',
      },
      inApp: {
        title: 'In-app notifications',
        text: 'Receive notifications within the Sircher app.',
      },
      general: {
        mute: {
          title: 'Mute',
          text: 'You are not receiving notifications from this user.',
        },
        chat: {
          title: 'Mute',
          text: 'You are not receiving notifications in case you receive a message.',
        },
        postLikes: {
          title: 'Post Likes',
          text: 'You will be notified when someone likes your post.',
        },
        searchRequest: {
          title: 'Search Request',
          text: 'You will be notified when someone likes your search.',
        },
        commentLikes: {
          title: 'Comment Likes',
          text: 'You will be notified when someone likes your comment.',
        },
        postComments: {
          title: 'Post Comments',
          text: 'You will be notified when someone comments on your post.',
        },
        searchRequestComments: {
          title: 'Search Request Comments',
          text: 'You will be notified when someone comments on your search',
        },
        mentioned: {
          title: 'Mentioned',
          text: 'You will be notified when someone mentions you.',
        },
        reply: {
          title: 'Reply',
          text: 'You will be notified when someone replies to you.',
        },
        newFollowers: {
          title: 'New Followers',
          text: 'You will be notified when someone follows you.',
        },
        acceptedFollowers: {
          title: 'Accepted Followers',
          text: 'You will be notified when someone accepts your follow request.',
        },
      },
      searchQuestions: {
        place: {
          title: 'When it takes place',
        },
        oneHourAgo: {
          title: '1 hour before',
        },
        twentyFourHourAgo: {
          title: '24 hours before',
        },
      },
      subscribers: {
        newQuery: {
          title: 'New search query',
        },
        newPost: {
          title: 'New post',
        },
      },
    },
    Friendship: {
      button: {
        decline: 'Decline',
        accept: 'Accept',
      },
      startedFollowingMessage: 'started following you.',
      inviteMessage: 'would like to subscribe to you.',
      followRequestAcceptedMessage: 'accepted your follow request.',
    },
    ProfileNotificationSettings: {
      general: {
        title: 'GENERAL',
      },
      chat: {
        title: 'CHAT',
      },
    },
    Profile: {
      header: {
        follower: 'FOLLOWER',
        following: 'FOLLOWING',
        request: 'REQUEST',
        contributions: 'CONTRIBUTIONS',
      },
      privateProfile: {
        title: 'Private Profile',
        subtitle:
          'Only confirmed subscribers can see this profile. Send a subscription request by clicking the Subscribe button.',
      },
      buttonsProfile: {
        follow: 'Follower',
        subscribe: 'Subscribe',
        pending: 'Pending',
        unfollow: 'unfollow',
      },
      biography: {
        showMore: 'SHOW MORE',
        showLess: 'SHOW LESS',
      },
      tab: {
        searchQuestions: 'SEARCH QUESTIONS',
        contributions: 'CONTRIBUTIONS',
        likes: 'LIKES',
        filter: 'FILTER',
      },
    },
    Language: {
      english: 'English',
      france: 'France',
      german: 'German',
    },
    Report: {
      Label: 'Report',
      LabelWithIcon: 'Report 📢',
      MessageFirstPart: 'Are you sure you want to report ',
      MessageSecondPartProfile: 'user @',
      MessageSecondPartPost: 'this post?',
      MessageSecondPartSearch: 'this search',
    },
    Delete: {
      Label: 'Delete',
      DeletePost: 'Delete post?',
      DeleteSearchRequest: 'delete search request?',
      successMessage: 'Delete success',
      success: 'Success',
    },
    CreateFolder: {
      stepOne: {
        title: 'Title',
        titleImage: 'COVER IMAGE',
        description: 'Description',
      },
      stepTwo: {
        parent: 'Parent Id',
      },
    },
    CreateSearchRequest: {
      stepOne: {
        description: 'Description',
        titel: 'Title',
        people: 'People',
        category: 'Category',
      },
      stepTwo: {
        information: 'INFORMATION',
        when: 'When',
        time: 'Time',
        place: 'Place',
        mapDescriptionText:
          "By loading the map you accept Google's privacy policy. Learn more",
        showMap: 'Show Map',
        price: 'Price',
        moreInformation: 'More Information',
        takePlaceOnline: 'Takes place online',
        onlineDescription: 'Description',
        free: 'Free',
        paid: 'Paid',
      },
      stepThree: {
        options: 'Options',
        allowComments: 'Allow Comments',
        showParticipants: 'Show Participants',
        publicationDate: 'Publication Date',
        visibility: 'Visibility',
        deleteRequest: 'Delete Request',
        save: 'Save',
        immediately: 'Immediately',
      },
      visiblePickerData: {
        visibleAll: 'Visible for all',
        visibleMeOnly: 'Visible only for me',
        follower: 'Follower',
        paidFollower: 'Abonnenten',
      },
      deleteRequestPickerData: {
        never: 'Never',
        oneYear: 'In one year',
      },
      message: {
        success: 'Success',
        searchRequestCreated: 'Search Request created',
      },
    },
    Chat: {
      chatList: {
        user: 'User',
        message: 'Message',
      },
    },
    NavigateModal: {
      title: 'Create',
      search: 'Create Search',
      post: 'Create Post',
      close: 'Close',
    },
    Search: {
      Events: 'Events',
      Posts: 'Posts',
      Users: 'Users',
      HashTags: 'Hashtags',
    },
    Event: {
      Person: 'Person',
    },
    Filter: {
      Event: {
        Title: 'PERIOD',
        DateSection: 'Date',
        LocationSection: 'LOCATION',
        LocationInputPlaceHolder: 'Köln, Deutschland',
        LocationInputLabel: 'Location',
        LocationAreaCounter: 'Search radius in km',
        LocationHideOnline: 'Hide searches that take place online.',
        LocationOnlyOnline: 'Show only searches that happen online.',
        CostSection: 'PRICE',
        CostFree: 'For free',
        CostPaid: 'Paid',
        HashtagSection: 'HASTHAGS',
        HashtagInputLabel: 'Hashtag',
        PersonCountSection: 'WANTED PEOPLE',
        PersonCountFullEventText:
          'Hide searches where the number of people participating exceeds the number of people searched',
        PersonCountCounterLabel: 'Persons',
      },
      Post: {
        Title: 'FILTER',
        ContentTypePhotos: 'Photos',
        ContentTypeVideos: 'Videos',
        ContentTypeQuestions: 'Polls/Quiz',
        ContentViewAmountTitle: 'NUMBER OF TILES',
        ContentViewAmountTwoInRow: '2 in row',
        ContentViewAmountThreeInRow: '3 in row',
        ContentViewModeTitle: 'VIEW',
        ContentViewModeList: 'List',
        ContentViewModeTiles: 'Tile',
        PostViewModeTitle: 'TILE SIZE',
        PostViewModeSquare: 'Square',
        PostViewModePortrait: 'Portrait',
        PostViewModeFillTile: 'Fill tile',
      },
    },
    Folder: {
      folderPermissionParticipants: {
        title: 'Users who can add their own contributions',
      },
      headNavigator: {
        title: 'Folder',
      },
    },
    SearchRequest: {
      navigators: {
        description: 'Description',
        folder: 'Folder',
      },
      participants: {
        title: 'Participants',
      },
      description: {
        dateAndTime: 'DATE AND TIME',
        place: 'PLACE',
        price: 'PRICE',
        participants: 'PARTICIPANTS',
        editParticipants: 'EDIT PARTICIPANTS',
        participate: 'Participate',
        wantedAre: 'Gesucht werden',
        people: 'Personen',
        in: 'in',
      },
      folder: {
        folder: 'Folder',
        create: 'create',
      },
    },
    PostMiniatureList: {
      empty: 'No post found',
    },
    SearchRequestList: {
      empty: 'No search request found',
    },
    LikesList: {
      empty: 'No likes found',
    },
    Toast: {
      error: {
        text1: 'Error',
        text2: 'Error, try again later',
      },
      SearchRequestList: {
        empty: 'No search request found',
      },
      LikesList: {
        empty: 'No likes found',
      },
      Toast: {
        error: {
          text1: 'Error',
          text2: 'Error, try again later',
        },
      },
    },
    ReportToast: {
      success: 'Successfully reported',
      error: 'Something went wrong',
    },
  },
};

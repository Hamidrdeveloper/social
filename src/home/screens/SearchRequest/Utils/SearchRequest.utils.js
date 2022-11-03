import {profileImages} from '../../../../assets/Images/ProfileImages/Images';

export const searchRequestData = {
  title: 'Neuer Versuch Gamescom 2021 in Köln',
  description:
    'Wir sind eine Gruppe aus vier Personen und suchen noch drei Personen die Interesse haben zur Gamescom 2021 zu fahren. Meldet euch einfach und wir besprechen dann wie wir es organisieren, consectetur adipiscing elit, sed do eiusmod tempor. ',
  hashtag: 'Gaming',
  quantityPeopleWanted: 3,
  priceDescription: 'More information at: http://www.gamescom.de',
  place: {
    country: 'Deutschland',
    city: '50679 Köln',
    address: 'Messeplatz 1',
  },
  people: [
    {
      avatar: profileImages[1].image,
      nickname: 'johnwilson',
      permissionRead: true,
    },
    {
      avatar: profileImages[2].image,
      nickname: 'johnathanmirrant',
      permissionRead: true,
    },
    {
      avatar: profileImages[3].image,
      nickname: 'phillipeweller',
      permissionRead: false,
    },
    {
      avatar: profileImages[0].image,
      nickname: 'johnathanmirrant',
      permissionRead: false,
    },
    {
      avatar: profileImages[3].image,
      nickname: 'johnwilson',
      permissionRead: false,
    },
    {
      avatar: profileImages[0].image,
      nickname: 'johnwilson',
      permissionRead: false,
    },
    {
      avatar: profileImages[2].image,
      nickname: 'johnwilson',
      permissionRead: false,
    },
    {
      avatar: profileImages[1].image,
      nickname: 'johnathanmirrant',
      permissionRead: false,
    },
    {
      avatar: profileImages[1].image,
      nickname: 'johnwilson',
      permissionRead: false,
    },
    {
      avatar: profileImages[1].image,
      nickname: 'phillipeweller',
      permissionRead: false,
    },
    {
      avatar: profileImages[1].image,
      nickname: 'johnathanmirrant',
      permissionRead: false,
    },
  ],
};

export const foldersDate = [
  {
    id: 1,
    image: 1,
    userAvatar: profileImages[1].image,
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. molestie dolore #lorem feugiat #nulla facilisis.',
  },
  {
    id: 2,
    image: 2,
    userAvatar: profileImages[1].image,
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. molestie dolore #lorem feugiat #nulla facilisis.',
  },
  {
    id: 3,
    image: 4,
    userAvatar: profileImages[1].image,
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. molestie dolore #lorem feugiat #nulla facilisis.',
  },
  {
    id: 4,
    image: 3,
    userAvatar: profileImages[1].image,
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie #consequat, vel #consequat dolore #lorem feugiat #nulla facilisis. molestie dolore #lorem feugiat #nulla facilisis.',
  },
];

export const separateArray = folders => {
  const newArrayFolders = [];
  let foldersSeparatedByTwo = [];
  folders.map(folder => {
    if (foldersSeparatedByTwo.length === 2) {
      newArrayFolders.push(foldersSeparatedByTwo);
      foldersSeparatedByTwo = [];
    }
    foldersSeparatedByTwo.push(folder);
  });
  newArrayFolders.push(foldersSeparatedByTwo);
  return newArrayFolders;
};

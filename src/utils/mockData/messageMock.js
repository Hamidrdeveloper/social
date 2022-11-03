export const messagesMock = currentChat => {
  return [
    {
      _id: 1,
      text: 'Look my photo',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: currentChat.avatar,
      },
      image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      sent: true,
      received: true,
      pending: false,
    },
    {
      _id: 2,
      text: 'Look my photo',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: currentChat.avatar,
      },
      image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      sent: true,
      received: true,
      pending: false,
    },
    {
      _id: 2,
      text: 'Look my photo',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: currentChat.avatar,
      },
      image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      sent: true,
      received: true,
      pending: false,
    },
  ];
};

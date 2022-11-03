//React & React Native
import React from 'react';
import {Image} from 'react-native';

const PostImage = ({
  style = {
    width: '100%',
    height: undefined,
    backgroundColor: 'black',
    resizeMode: 'cover',
    aspectRatio: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  uri = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/gamescom-2020-1890495.jpg?itok=xe8-Bzn9',
}) => {
  return <Image source={{uri: uri}} style={style} />;
};

export default PostImage;

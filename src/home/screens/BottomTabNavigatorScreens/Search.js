//React & React Native
import React from 'react';
import {View} from 'react-native';

//Components
import {SearchField} from '../../../shared';
import SearchContent from '../SearchContent/SearchContent';

const Search = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SearchField navigation={navigation} />
      <SearchContent />
    </View>
  );
};

export default Search;

//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

//Components
import {SearchField} from '../../../shared';
import SearchContent from '../SearchContent/SearchContent';

const Discover = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState('Events');

  return (
    <View style={{flex: 1}}>
      <SearchField
        navigation={navigation}
        discoverMode={true}
        currentTab={currentTab}
      />
      <SearchContent discoverMode={true} setCurrentTab={setCurrentTab} />
    </View>
  );
};

export default Discover;

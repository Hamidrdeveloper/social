import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  HashtagContainer,
  HashTagName,
  HashTagCount,
} from './HashtagSearch.styles';

//Context
import {Context as SearchContext} from '../../../../contexts/SearchContext';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// API
import {searchHashtag} from '../../../../api/search';
import MinimizedEvent from '../../../components/MinimizedEvent/MinimizedEvent';

const HashtagSearch = () => {
  const {state} = useContext(SearchContext);
  const [hashtags, setHashtags] = useState([]);
  const [events, setEvents] = useState([]);

  let keyword = state.keyword;
  let previousKeyword = '';
  const searchEventsList = async keyword => {
    const data = keyword ? await searchHashtag(keyword) : null;
    console.log('HashtagSearch', data);
    setEvents(data.posts);
  };
  useEffect(() => {
    previousKeyword !== state.keyword ? searchEventsList(keyword) : null;
    console.log(keyword);
  }, [state.keyword, hashtags]);

  return (
    <ScrollView style={styles.scrollContainer}>
      {events?.length
        ? events.map(value => {
            return <MinimizedEvent data={events} searchRequest={value} />;
          })
        : null}
    </ScrollView>
  );
};

const Hashtag = ({name, count}) => (
  <HashtagContainer>
    <HashTagName>{name}</HashTagName>
    <HashTagCount>{count}</HashTagCount>
  </HashtagContainer>
);
const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: hp('5%'),
    paddingLeft:15,
    paddingRight:15
  },
  empty: {
    textAlign: 'center',
  },
});
export default HashtagSearch;

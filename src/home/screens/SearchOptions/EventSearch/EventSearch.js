import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import MinimizedEvent from '../../../components/MinimizedEvent/MinimizedEvent';

// Context
import {Context as SearchContext} from '../../../../contexts/SearchContext';
import {Context as SearchEventFilterContext} from '../../../../contexts/SearchEventFilterContext';
import {searchEvents} from '../../../../api/search';

const PostsSearch = (discover = false) => {
  let previousKeyword = '';
  const {state} = useContext(SearchContext);
  const {state: stateFilter, isFilter} = useContext(SearchEventFilterContext);
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);

  let keyword = state.keyword;

  const searchEventsList = async keyword => {
    const data = keyword
      ? await searchEvents(keyword, stateFilter, isFilter)
      : null;

    setEvents(data.search_requests);
  };

  const filterEvents = events => {
    // alert("hi")
    console.log('filterEvents', events);

    return null;
  };

  useEffect(() => {
    previousKeyword !== state.keyword ? searchEventsList(keyword) : null;
    console.log(keyword);
  }, [state.keyword, stateFilter]);

  // useEffect(() => {
  //   previousKeyword !== state.keyword ? searchEventsList(keyword) : null;
  //   console.log(keyword);
  // }, [stateFilter]);
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {displayedEvents && (
          <>
            {displayedEvents.map(search => (
              <MinimizedEvent searchRequest={search} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsSearch;

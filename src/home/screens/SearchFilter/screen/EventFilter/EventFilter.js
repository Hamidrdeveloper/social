import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//Context
import {Context as SearchEventFilterContext} from '../../../../../contexts/SearchEventFilterContext';

//Styled Components
import {
  FilterButtonContainer,
  FilterScreenContainer,
} from './EventFilter.styles';

// Filter Sections
import {
  DateFilter,
  PersonCountFilter,
  CostFilter,
  AreaFilter,
  HashtagFilter,
} from '../../filterSections';

// Shared Components
import {CustomButton} from '../../../../../shared';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const SearchEventFilter = ({navigation}) => {
  const {
    state,
    setPricing,
    setHashtags,
    setDates,
    setArea,
    setIsFilter,
    setPersons,
  } = useContext(SearchEventFilterContext);

  return (
    <FilterScreenContainer>
      {true && <DateFilter />}
      <PersonCountFilter />
      {true && <CostFilter />}
      {true && <AreaFilter />}
      <HashtagFilter />

      <TouchableOpacity
        onPress={() => {
          setPricing({search_request_price: null});
          setHashtags({tag: null});
          setDates({search_request_at_from: null, search_request_at_to: null});
          setArea({
            location: null,
            distance: null,
            is_virtual: null,
          });
          setIsFilter(false);
          setPersons({
            required_people: null,
            hide_exceed_required_people: null,
          });
          navigation.goBack();
        }}
        style={{position: 'absolute', top: 20, right: 15}}>
        <Text style={{color: 'blue', fontSize: 18}}>{'Clear Filter'}</Text>
      </TouchableOpacity>
    </FilterScreenContainer>
  );
};

export default SearchEventFilter;

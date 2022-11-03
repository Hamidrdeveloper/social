import React, {useContext} from 'react';

//Context
import {Context as SearchPostFilterContext} from '../../../../../contexts/SearchPostFilterContext';

//Styled Components
import {
  FilterButtonContainer,
  FilterScreenContainer,
} from './PostFilter.styles';

// Filter Sections
import {ContentTypeFilter} from '../../filterSections';

// Shared Components
import {CustomButton} from '../../../../../shared';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import ContentViewMode from '../../filterSections/post/contentViewMode/ContentViewMode';
import PostViewMode from '../../filterSections/post/postViewMode/PostViewMode';
import ContentViewAmount from '../../filterSections/post/contentViewAmount/ContentViewAmount';

const SearchPostFilter = () => {
  const {state} = useContext(SearchPostFilterContext);
  return (
    <FilterScreenContainer>
      <ContentTypeFilter />
      <ContentViewMode />
      {!state.listView && (
        <>
          <PostViewMode />
          <ContentViewAmount />
        </>
      )}

      {
        // <FilterButtonContainer>
        //   <CustomButton
        //     title={'Filtern'}
        //     style={{width: widthPercentageToDP('85%')}}
        //   />
        // </FilterButtonContainer>
      }
    </FilterScreenContainer>
  );
};

export default SearchPostFilter;

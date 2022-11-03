import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchPostFilterContext} from '../../../../../../contexts/SearchPostFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './ContentViewMode.style';

//Shared Components
import {AlternativeConditionsCheckBox} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

const ContentViewMode = () => {
  const {state, setContentViewMode} = useContext(SearchPostFilterContext);

  const [tileMode, setTileMode] = useState(state.tileView);
  const [listMode, setListMode] = useState(state.listView);

  useEffect(() => {
    setContentViewMode({
      tileView: tileMode,
      listView: listMode,
    });
  }, [tileMode, listMode]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Post.ContentViewModeTitle`)}
      </TitleOptionText>
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentViewModeList`)}
        value={listMode}
        setValue={() => {
          setListMode(!listMode);
          setTileMode(!tileMode);
        }}
        circleStyle={true}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentViewModeTiles`)}
        value={tileMode}
        setValue={() => {
          setTileMode(!tileMode);
          setListMode(!listMode);
        }}
        circleStyle={true}
      />
    </OptionSectionContainer>
  );
};

export default ContentViewMode;

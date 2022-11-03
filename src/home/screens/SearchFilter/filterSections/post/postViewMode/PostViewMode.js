import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchPostFilterContext} from '../../../../../../contexts/SearchPostFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './PostViewMode.style';

//Shared Components
import {AlternativeConditionsCheckBox} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

const PostViewMode = () => {
  const {state, setPostViewMode} = useContext(SearchPostFilterContext);

  const [squareMode, setSquareMode] = useState(state.squareView);
  const [portraitMode, setPortraitMode] = useState(state.portraitView);
  const [fillTile, setFillTile] = useState(state.fillTile);

  useEffect(() => {
    setPostViewMode({
      squareView: squareMode,
      portraitView: portraitMode,
      fillTile: fillTile,
    });
  }, [squareMode, portraitMode, fillTile]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Post.PostViewModeTitle`)}
      </TitleOptionText>
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.PostViewModeSquare`)}
        value={squareMode}
        setValue={() => {
          setSquareMode(!squareMode);
          setPortraitMode(!portraitMode);
        }}
        circleStyle={true}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.PostViewModePortrait`)}
        value={portraitMode}
        setValue={() => {
          setPortraitMode(!portraitMode);
          setSquareMode(!squareMode);
        }}
        circleStyle={true}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.PostViewModeFillTile`)}
        value={fillTile}
        setValue={setFillTile}
      />
    </OptionSectionContainer>
  );
};

export default PostViewMode;

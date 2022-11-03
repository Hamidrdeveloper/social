import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchPostFilterContext} from '../../../../../../contexts/SearchPostFilterContext';

//Styled Components
import {
  OptionSectionContainer,
  TitleOptionText,
} from './ContentViewAmount.style';

//Shared Components
import {AlternativeConditionsCheckBox} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

const ContentViewAmount = () => {
  const {state, setContentViewAmount} = useContext(SearchPostFilterContext);

  const [twoInRow, setTwoInRow] = useState(state.tilesPerRow === 2);
  const [threeInRow, setThreeInRow] = useState(state.tilesPerRow === 3);

  useEffect(() => {
    let tilesPerRow = twoInRow ? 2 : 3;
    setContentViewAmount({
      tilesPerRow: tilesPerRow,
    });
  }, [twoInRow, threeInRow]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Post.ContentViewAmountTitle`)}
      </TitleOptionText>
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentViewAmountTwoInRow`)}
        value={twoInRow}
        setValue={() => {
          setTwoInRow(!twoInRow);
          setThreeInRow(!threeInRow);
        }}
        circleStyle={true}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(
          `socialApp.Filter.Post.ContentViewAmountThreeInRow`,
        )}
        value={threeInRow}
        setValue={() => {
          setThreeInRow(!threeInRow);
          setTwoInRow(!twoInRow);
        }}
        circleStyle={true}
      />
    </OptionSectionContainer>
  );
};

export default ContentViewAmount;

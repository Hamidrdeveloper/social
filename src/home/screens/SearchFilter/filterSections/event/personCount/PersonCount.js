import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchEventFilterContext} from '../../../../../../contexts/SearchEventFilterContext';

// Styled Components
import {OptionSectionContainer, TitleOptionText} from './PersonCount.styles';

// Shared Components
import {Counter} from '../../../../../../shared';
import AlternativeConditionsCheckBox from '../../../../../../shared/AlternativeConditionsCheckBox/AlternativeConditionsCheckBox';
import Translation from '../../../../../../constants/i18n';

const PersonCount = () => {
  const {state, setPersons} = useContext(SearchEventFilterContext);

  const [personCount, setPersonCount] = useState(0);
  const [showFullEvents, setShowFullEvents] = useState(false);
  useEffect(() => {
    if (state.required_people) {
      setPersonCount(state.required_people);
    }
    if (state.hide_exceed_required_people != null) {
      setShowFullEvents(state.hide_exceed_required_people);
    }
  }, []);
  useEffect(() => {
    setPersons({
      required_people: personCount,
      hide_exceed_required_people: showFullEvents,
    });
  }, [personCount, showFullEvents]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Event.PersonCountSection`)}
      </TitleOptionText>
      <Counter
        title={Translation.t(`socialApp.Filter.Event.PersonCountCounterLabel`)}
        count={personCount}
        setCount={setPersonCount}
      />
      <AlternativeConditionsCheckBox
        value={showFullEvents}
        setValue={setShowFullEvents}
        text={Translation.t(`socialApp.Filter.Event.PersonCountFullEventText`)}
      />
    </OptionSectionContainer>
  );
};

export default PersonCount;

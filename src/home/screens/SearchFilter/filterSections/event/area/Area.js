import React, {useContext, useEffect, useState} from 'react';
import {Input} from 'react-native-elements';

//Context
import {Context as SearchEventFilterContext} from '../../../../../../contexts/SearchEventFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './Area.styles';

//Shared Components
import {Counter} from '../../../../../../shared';
import AlternativeConditionsCheckBox from '../../../../../../shared/AlternativeConditionsCheckBox/AlternativeConditionsCheckBox';
import Translation from '../../../../../../constants/i18n';

const Area = () => {
  const {state, setArea: setAreaContext} = useContext(SearchEventFilterContext);

  const [area, setArea] = useState(0);
  const [location, setLocation] = useState(state.location);
  const [showOnlineEvents, setShowOnlineEvents] = useState(false);
  const [showNotOnlineEvents, setShowNotOnlineEvents] = useState(
    state.is_virtual,
  );
  useEffect(() => {
    if (state.is_virtual != null) {
      setShowOnlineEvents(state.search_request_price);
    }
    if (state.distance != null) {
      setArea(state.distance);
    }
  }, []);
  useEffect(() => {
    setAreaContext({
      location: location,
      distance: area,
      is_virtual: showOnlineEvents,
    });
  }, [area, location, showOnlineEvents, showNotOnlineEvents]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Event.LocationSection`)}
      </TitleOptionText>
      <Input
        value={location}
        onChangeText={setLocation}
        label={Translation.t(`socialApp.Filter.Event.LocationInputPlaceHolder`)}
        labelStyle={{fontSize: 15, fontWeight: 'normal'}}
        placeholder={Translation.t(`socialApp.Filter.Event.LocationInputLabel`)}
        containerStyle={{marginLeft: -5}}
      />
      <Counter
        title={Translation.t(`socialApp.Filter.Event.LocationAreaCounter`)}
        count={area}
        setCount={setArea}
        increment={10}
      />
      <AlternativeConditionsCheckBox
        value={showOnlineEvents}
        setValue={setShowOnlineEvents}
        text={Translation.t(`socialApp.Filter.Event.LocationHideOnline`)}
      />
      {/* <AlternativeConditionsCheckBox
        value={showNotOnlineEvents}
        setValue={setShowNotOnlineEvents}
        text={Translation.t(`socialApp.Filter.Event.LocationOnlyOnline`)}
      /> */}
    </OptionSectionContainer>
  );
};

export default Area;

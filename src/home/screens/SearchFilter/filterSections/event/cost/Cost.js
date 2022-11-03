import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchEventFilterContext} from '../../../../../../contexts/SearchEventFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './Cost.styles';

//Shared Components
import {AlternativeConditionsCheckBox} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

const Cost = () => {
  const {state, setPricing} = useContext(SearchEventFilterContext);

  const [free, setFree] = useState(false);
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    if (state.search_request_price != null) {
      if(state.search_request_price==100){
        setFree(false);

      }else{
        setFree(true);


      }
    }
  }, []);
  useEffect(() => {
    setPricing({search_request_price: free});
  }, [free, paid]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Event.CostSection`)}
      </TitleOptionText>
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Event.CostFree`)}
        value={free}
        setValue={setFree}
      />
      {/* <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Event.CostPaid`)}
        value={paid}
        setValue={setPaid}
      /> */}
    </OptionSectionContainer>
  );
};

export default Cost;

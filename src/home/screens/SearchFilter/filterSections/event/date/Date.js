import React, {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';

// Libraries
import {Picker} from '@react-native-picker/picker';
import {widthPercentageToDP} from 'react-native-responsive-screen';

//Styled Components
import {
  DateFilterContainer,
  OptionSectionContainer,
  TitleOptionText,
} from './Date.styles';

//Context
import {Context as SearchEventFilterContext} from '../../../../../../contexts/SearchEventFilterContext';

// Shared Components
import {DateField} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const DateFilter = () => {
  const {state, setDates} = useContext(SearchEventFilterContext);

  const [dateFilterOption, setDateFilterOption] = useState('today');
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [isValidDate, setIsValidDate] = useState(false);
  const [isCoustom, setIsCoustom] = useState(false);
  
  useEffect(() => {
    let dateF = new Date(dateFrom);
    const rF = Date.UTC(
      dateF.getUTCFullYear(),
      dateF.getUTCMonth(),
      dateF.getUTCDate(),
      dateF.getUTCHours(),
      dateF.getUTCMinutes(),
      dateF.getUTCSeconds(),
      dateF.getUTCMilliseconds(),
    );

    let dF = `${Math.round(rF / 1000)}`;
    let dateT = new Date(dateTo);
    const rTo = Date.UTC(
      dateT.getUTCFullYear(),
      dateT.getUTCMonth(),
      dateT.getUTCDate(),
      dateT.getUTCHours(),
      dateT.getUTCMinutes(),
      dateT.getUTCSeconds(),
      dateT.getUTCMilliseconds(),
    );

    let dTo = `${Math.round(rTo / 1000)}`;
    setDates({search_request_at_from: dF, search_request_at_to: dTo});
  }, [dateTo, dateFrom]);

  useEffect(() => {
    setPreDefinedDates(dateFilterOption);
    if (dateFilterOption == 'custom') {
      setIsCoustom(true);
    } else {
      setIsCoustom(false);
    }
  }, [dateFilterOption]);

  const setPreDefinedDates = option => {
    if (option !== 'custom') {
      let today = new Date();
      let daysToAdd = getDaysToAdd(option);
      setDateFrom(today);
      setDateTo(today.addDays(daysToAdd));
    }
  };

  const getDaysToAdd = option => {
    return dateFilterOptions.filter(
      dateOption => dateOption.value === option,
    )[0].timeAddition;
  };

  const dateFilterOptions = [
    {
      text: 'Next Month',
      value: 'nextMonth',
      timeAddition: 30,
    },
    {
      text: 'Next Week',
      value: 'nextWeek',
      timeAddition: 7,
    },
    {
      text: 'Tomorrow',
      value: 'tomorrow',
      timeAddition: 2,
    },
    {
      text: 'Today',
      value: 'today',
      timeAddition: 1,
    },
    {
      text: 'Custom',
      value: 'custom',
    },
  ];

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t('socialApp.Filter.Event.Title')}
      </TitleOptionText>
      <View>
        <Text style={{color: 'black'}}>
          {Translation.t('socialApp.Filter.Event.DateSection')}
        </Text>
        <Picker
          selectedValue={dateFilterOption}
          onValueChange={itemValue => setDateFilterOption(itemValue)}
          enabled={true}
          mode="dropdown"
          style={{marginLeft: -13, width: `100%`}}>
          {dateFilterOptions.map(option => (
            <Picker.Item
              label={option.text}
              style={{width: `100%`, color: 'black'}}
              value={option.value}
            />
          ))}
        </Picker>
      </View>

      {/* {dateFilterOption === 'custom' && ( */}
      <DateFilterContainer>
        <DateField
          value={dateFrom}
          setValue={setDateFrom}
          validValue={isValidDate}
          setValidValue={setIsValidDate}
          style={{
            width: widthPercentageToDP('50%'),
            height: 50,
          }}
          isCoustom={isCoustom}
        />
        <DateField
          value={dateTo}
          setValue={setDateTo}
          validValue={isValidDate}
          setValidValue={setIsValidDate}
          style={{width: widthPercentageToDP('50%'), height: 50}}
          minimumDate={dateFrom}
          maximumDate={isCoustom ? null : new Date()}
          isCoustom={!isCoustom}
        />
      </DateFilterContainer>
      {/* )} */}
    </OptionSectionContainer>
  );
};

export default DateFilter;

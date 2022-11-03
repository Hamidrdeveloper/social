import React, {useEffect, useState} from 'react';
import {Platform, Button, TouchableOpacity} from 'react-native';

//Styled Component
import {DateContainer, LabelText} from './DateField.styles';

//Packages
import DateTimePicker from '@react-native-community/datetimepicker';

//i18n
import Translation from '../../../constants/i18n';
import {IconsTitle} from '../../../authentication/screens/Screens.styles';

const DateFieldBirth = ({
  value,
  setValue,
  validValue,
  setValidValue,
  style = {marginVertical: 10},
  maximumDate = new Date(),
  minimumDate = new Date(),
  isCoustom = false,
}) => {
  const [showDateTimePicker, setShowDateTimePicker] = React.useState(
    Platform.OS !== 'android',
  );
  const validateDate = date => {
    setValidValue(true);
  };
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //TODO Add validation, minimum 16 years old
  const [dateUp, setDateUp] = useState('');
  const dateString =
    value.getDate() +
    ' ' +
    monthNames[value.getMonth()] +
    ' ' +
    value.getFullYear();
  function isOverEighteen() {
    var nowD = parseInt(new Date().getFullYear());
    nowD -= 16;

    let dataUp = new Date(
      nowD + '/' + new Date().getMonth() + '/' + new Date().getDay(),
    ).toDateString();
    setValue(new Date(dataUp));
    setDateUp(dataUp);
  }
  // useEffect(() => {
  //   isOverEighteen();
  // }, []);
  return (
    <DateContainer>
      <LabelText>
        {Translation.t('socialApp.Authentification.Date.label')}
      </LabelText>
      {Platform.OS === 'android' && (
        <TouchableOpacity
          onPress={() => setShowDateTimePicker(!showDateTimePicker)}>
          <IconsTitle>{dateString}</IconsTitle>
        </TouchableOpacity>
      )}
      {showDateTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          maximumDate={maximumDate}
          value={value}
          mode="date"
          textColor="black"
          display="default"
          onChange={e => {
            if (Platform.OS === 'android') {
              setShowDateTimePicker(false);
            }
            if (e.nativeEvent.timestamp !== undefined) {
              setValue(new Date(e.nativeEvent.timestamp));
              validateDate(value);
            }
          }}
        />
      )}
    </DateContainer>
  );
};

export default DateFieldBirth;

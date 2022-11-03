import Translation from '../../constants/i18n';
import moment from 'moment';

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

export const dateFormatter = (d, showAgo = true, showCounter = false) => {
  const differenceMills =
    new Date().getTime() - new Date(Math.round(d * 1000)).getTime();
  const seconds = Math.floor(differenceMills / 1000);
  const minutes = Math.floor(differenceMills / (1000 * 60));
  const hours = Math.floor(differenceMills / (1000 * 60 * 60));
  const days = Math.floor(differenceMills / (1000 * 3600 * 24));
  const weeks = Math.floor(differenceMills / (1000 * 3600 * 24 * 7));
  const months = Math.floor(differenceMills / (1000 * 3600 * 24 * 7 * 4));
  const years = Math.floor(differenceMills / (1000 * 3600 * 24 * 7 * 4 * 12));
  const ago = Translation.t(`socialApp.DateAbbreviation.ago`);
  const lessThanAMinute = Translation.t(
    `socialApp.DateAbbreviation.lessThanAMinute`,
  );
  const secondText = Translation.t(`socialApp.DateAbbreviation.second`);
  const secondsText = Translation.t(`socialApp.DateAbbreviation.seconds`);
  const minuteText = Translation.t(`socialApp.DateAbbreviation.minute`);
  const minutesText = Translation.t(`socialApp.DateAbbreviation.minutes`);
  const hourText = Translation.t(`socialApp.DateAbbreviation.hour`);
  const hoursText = Translation.t(`socialApp.DateAbbreviation.hours`);
  const dayText = Translation.t(`socialApp.DateAbbreviation.day`);
  const daysText = Translation.t(`socialApp.DateAbbreviation.days`);
  const weekText = Translation.t(`socialApp.DateAbbreviation.week`);
  const weeksText = Translation.t(`socialApp.DateAbbreviation.weeks`);
  const monthText = Translation.t(`socialApp.DateAbbreviation.month`);
  const monthsText = Translation.t(`socialApp.DateAbbreviation.months`);
  const yearText = Translation.t(`socialApp.DateAbbreviation.year`);
  const yearsText = Translation.t(`socialApp.DateAbbreviation.years`);
  const times = [
    {value: years, single: yearText, multiple: yearText},
    {value: months, single: monthText, multiple: monthsText},
    {value: weeks, single: weekText, multiple: weeksText},
    {value: days, single: dayText, multiple: daysText},
    {value: hours, single: hourText, multiple: hoursText},
    {value: minutes, single: minuteText, multiple: minutesText},
    {value: seconds, single: secondText, multiple: secondsText},
  ];
  let TimeAgo = '';
  if (minutes < 1) TimeAgo = lessThanAMinute;
  else if (1 <= minutes && minutes < 60)
    TimeAgo = `${minutes} ${minutes === 1 ? minuteText : minutesText} `;
  else if (60 <= minutes && hours < 24)
    TimeAgo = `${hours} ${hours === 1 ? hourText : hoursText} `;
  else if (24 <= hours && days < 7)
    TimeAgo = `${days} ${days === 1 ? dayText : daysText} `;
  else if (7 <= days && weeks < 4)
    TimeAgo = `${weeks} ${weeks === 1 ? weekText : weeksText} `;
  else if (4 <= weeks && months < 12)
    TimeAgo = `${months} ${months === 1 ? monthText : monthsText} `;
  else TimeAgo = `${years} ${years === 1 ? yearText : yearsText} `;
  if (showAgo && !showCounter) {
    switch (Translation.locale) {
      case 'en':
        return TimeAgo + ago;
      case 'de':
        return ago + TimeAgo;
    }
  }
  const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };
  if (!showAgo && showCounter) {
    let b = moment(Date.now()); //now
    let a = moment(date);
    let minutes = a.diff(b, 'minutes');
    let hours = a.diff(b, 'hours');
    let days = a.diff(b, 'days');
    let weeks = a.diff(b, 'weeks');
    return minutes < 60
      ? `${minutes}m`
      : hours < 24
      ? `${hours}h`
      : days < 7
      ? `${days}d`
      : `${weeks}w`;
  }
  return TimeAgo;
};

export const fullDate = _date => {
  const date = new Date(_date);
  return new Date(_date).toLocaleString().toString();
};

export const diffDate = date => {
  var a = moment(Date.now()); //now
  var b = moment(date);

  let minutes = a.diff(b, 'minutes');
  let hours = a.diff(b, 'hours');
  let days = a.diff(b, 'days');
  let weeks = a.diff(b, 'weeks');

  return minutes < 60
    ? `${minutes}m`
    : hours < 24
    ? `${hours}h`
    : days < 7
    ? `${days}d`
    : `${weeks}w`;
};

export const fullDiffDate = (date1, date2) => {
  const duration = moment.duration(moment(date1).diff(moment(date2)));

  //Get Days
  const days = Math.floor(duration.asDays());
  const daysFormatted = days ? `${days}d ` : '';

  //Get Hours
  const hours = duration.hours();
  const hoursFormatted = `${hours}h `;

  //Get Minutes
  const minutes = duration.minutes();
  const minutesFormatted = `${minutes}m`;

  return new Date(date1).toLocaleString().toString();
};

export const isSameDay = (date1, date2) => {
  return date1 && date2 ? moment(date1).isSame(date2, 'day') : false;
};

export const getHourAndMinutes = _date => {
  const date = new Date(_date);
  return `${date.getHours().toLocaleString()}:${date
    .getMinutes()
    .toLocaleString()}`;
};

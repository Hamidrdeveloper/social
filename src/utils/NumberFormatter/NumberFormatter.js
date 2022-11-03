import Translation from '../../constants/i18n';

export default number => {
  const thousandText = Translation.t(`socialApp.NumberAbbreviation.thousands`);
  const millionsText = Translation.t(`socialApp.NumberAbbreviation.millions`);

  let finalNumber;

  if (number < 1000) {
    finalNumber = number;
  } else if (number >= 1000000) {
    finalNumber = (number / 1000000).toFixed(1) + ' ' + millionsText;
  } else if (number => 1000 && number < 1000000) {
    finalNumber = (number / 1000).toFixed(1) + ' ' + thousandText;
  }
  return finalNumber;
};

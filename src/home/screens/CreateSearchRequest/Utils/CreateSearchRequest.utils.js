//Translation
import Translation from '../../../../constants/i18n';

export const visiblePickerData = [
  //TODO Add the following options: "Nie", "1Tag", "2 Tage", "3 Tage", "4 Tage", "5 Tage", "6 Tage", "7 Tage".
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.visiblePickerData.visibleAll',
    ),
    value: 'visibleAll',
  },
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.visiblePickerData.visibleMeOnly',
    ),
    value: 'visibleMeOnly',
  },
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.visiblePickerData.follower',
    ),
    value: 'follower',
  },
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.visiblePickerData.paidFollower',
    ),
    value: 'paidFollower',
  },
];

export const deleteRequestPickerData = [
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.deleteRequestPickerData.never',
    ),
    value: 'never',
  },
  {
    name: Translation.t(
      'socialApp.CreateSearchRequest.deleteRequestPickerData.oneYear',
    ),
    value: 'oneYear',
  },
];

// React & React Native
import React from 'react';

// Styled Components
import {
  SafeAreaViewContainer,
  ReportScreenContainer,
  MainReportContainer,
  InfoText,
  InfoTextContainer,
} from './Report.styles';
import {CustomButton, TopBarNavigator1, CustomOutlineButton} from '../../index';

//Translation
import Translation from '../../../constants/i18n';

// Report API
import {postReport, profileReport, searchReport} from '../../../api/report';

// Components
import Toast from 'react-native-toast-message';

const showToast = (error, data) => {
  const successMessage = String(Translation.t('socialApp.ReportToast.success'));
  const errorMessage = Translation.t('socialApp.ReportToast.error');

  Toast.show({
    type: `${error ? 'error' : 'success'}`,
    text1: `${error ? errorMessage : successMessage}`,
    text2: `${error ? data.errorMessage : successMessage}`,
  });
};

const Report = ({hideModal, type, reference, id, onPress = async () => {}}) => {
  let reportResponse = {};

  const handleReport = async (type, reference, id) => {
    if (type === 'profile') {
      reportResponse = await profileReport(reference);
    } else if (type === 'search') {
      reportResponse = await searchReport(id);
    } else if (type === 'post') {
      reportResponse = await postReport(id);
    }
    return reportResponse;
  };

  const handlePress = async () => {
    if (type === 'deletePost' || type === 'deleteSearchRequest') {
      await onPress();
    } else {
      hideModal();
      const {error, data} = await handleReport(type, reference, id);
      showToast(error, data);
    }
  };

  return (
    <SafeAreaViewContainer>
      <ReportScreenContainer>
        <TopBarNavigator1 onPressBack={hideModal} title={'Antworten'} />
        <MainReportContainer>
          <InfoTextContainer>
            <InfoText>{messageBuilder(type, reference)}</InfoText>
          </InfoTextContainer>
          <CustomButton
            title={
              type === 'deletePost' || type === 'deleteSearchRequest'
                ? Translation.t('socialApp.Delete.Label')
                : Translation.t('socialApp.Report.Label')
            }
            onPress={handlePress}
            style={{marginBottom: 10}}
          />
          <CustomOutlineButton title={'Cancel'} onPress={hideModal} />
        </MainReportContainer>
      </ReportScreenContainer>
    </SafeAreaViewContainer>
  );
};

const messageBuilder = (reportType, reference) => {
  let messageTemplate = {
    profile: `${Translation.t(
      'socialApp.Report.MessageSecondPartProfile',
    )}${reference}?`,
    post: Translation.t('socialApp.Report.MessageSecondPartPost'),
    search: `${Translation.t('socialApp.Report.MessageSecondPartSearch')} ?`,
    deletePost: Translation.t('socialApp.Delete.DeletePost'),
    deleteSearchRequest: Translation.t('socialApp.Delete.DeleteSearchRequest'),
  };

  return reportType === 'deletePost'
    ? messageTemplate[reportType]
    : Translation.t('socialApp.Report.MessageFirstPart') +
        messageTemplate[reportType];
};

export default Report;

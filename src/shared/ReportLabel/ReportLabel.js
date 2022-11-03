//React & React Native
import React from 'react';

//Styled Components
import {
  ReportContainer,
  TouchableContainer,
  LabelText,
} from './ReportLabel.styles';

//Translation
import Translation from '../../constants/i18n';

const ReportLabel = ({onPress, showText = true, type}) => {
  return (
    <ReportContainer>
      <TouchableContainer onPress={onPress}>
        <LabelText>
          {type === 'deletePost' || type === 'deleteSearchRequest'
            ? Translation.t('socialApp.Delete.Label')
            : Translation.t('socialApp.Report.LabelWithIcon')}
        </LabelText>
      </TouchableContainer>
    </ReportContainer>
  );
};

export default ReportLabel;

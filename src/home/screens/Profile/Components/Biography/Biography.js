//React & React Native
import React from 'react';
import {View} from 'react-native';

//Components
import {Description} from '../../../../components/ComponentsPost';

//Colors
import colorSchema from '../../../../../constants/colorSchema';

//Translation
import Translation from '../../../../../constants/i18n';

//Style Components
import {HrView} from './Biography.styles';
import {ReportModal} from '../../../../../shared';

const Biography = ({profile, personalView = false}) => {
  return (
    <View>
      <Description
        description={profile?.bio_content}
        showMoreText={Translation.t('socialApp.Profile.biography.showMore')}
        showLessText={Translation.t('socialApp.Profile.biography.showLess')}
        styleShowMoreText={{
          color: colorSchema.text.lightBlue,
          fontSize: 16,
          marginTop: 10,
        }}
      />
      {/* {!personalView && (
        <ReportModal type={'profile'} reference={profile?.username} />
      )} */}
      <HrView />
    </View>
  );
};

export default Biography;

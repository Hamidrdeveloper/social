//React & React Native
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  DescriptionContainer,
  ShowMoreText,
  DescriptionText,
} from './Description.styles';

//Translation
import Translation from '../../constants/i18n';

const Description = ({
  description = '',
  showMoreText = Translation.t('socialApp.Description.showMore'),
  showLessText = Translation.t('socialApp.Description.showLess'),
  styleShowMoreText = {},
}) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <DescriptionContainer>
      {description ? (
        <>
          <DescriptionText numberOfLines={isShowMore ? null : 3}>
            {description}
          </DescriptionText>
          <TouchableOpacity onPress={() => setIsShowMore(!isShowMore)}>
            <ShowMoreText style={styleShowMoreText}>
              {isShowMore ? showLessText : showMoreText}
            </ShowMoreText>
          </TouchableOpacity>
        </>
      ) : null}
    </DescriptionContainer>
  );
};

export default Description;

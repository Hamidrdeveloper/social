import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchPostFilterContext} from '../../../../../../contexts/SearchPostFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './ContentType.styles';

//Shared Components
import {AlternativeConditionsCheckBox} from '../../../../../../shared';
import Translation from '../../../../../../constants/i18n';

const ContentType = () => {
  const {state, setContent} = useContext(SearchPostFilterContext);

  const [showPhotos, setPhotos] = useState(state.photos);
  const [showVideos, setVideos] = useState(state.videos);
  const [showQuestions, setQuestions] = useState(state.questions);

  useEffect(() => {
    setContent({
      photos: showPhotos,
      videos: showVideos,
      questions: showQuestions,
    });
  }, [showPhotos, showVideos, showQuestions]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Post.Title`)}
      </TitleOptionText>
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentTypePhotos`)}
        value={showPhotos}
        setValue={setPhotos}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentTypeVideos`)}
        value={showVideos}
        setValue={setVideos}
      />
      <AlternativeConditionsCheckBox
        text={Translation.t(`socialApp.Filter.Post.ContentTypeQuestions`)}
        value={showQuestions}
        setValue={setQuestions}
      />
    </OptionSectionContainer>
  );
};

export default ContentType;

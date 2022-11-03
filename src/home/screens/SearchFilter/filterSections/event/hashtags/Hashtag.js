import React, {useContext, useEffect, useState} from 'react';

//Context
import {Context as SearchEventFilterContext} from '../../../../../../contexts/SearchEventFilterContext';

//Styled Components
import {OptionSectionContainer, TitleOptionText} from './Hashtag.styles';
import {Input} from 'react-native-elements';
import Translation from '../../../../../../constants/i18n';

const PersonCount = () => {
  const {state, setHashtags: setHashtagsContext} = useContext(
    SearchEventFilterContext,
  );

  const [hashtags, setHashtags] = useState('');
  useEffect(() => {
    if (state.tag) {
      setHashtags(state.tag);
    }
   
  }, []);
  useEffect(() => {
    setHashtagsContext({tag: hashtags});
  }, [hashtags]);

  return (
    <OptionSectionContainer>
      <TitleOptionText>
        {Translation.t(`socialApp.Filter.Event.HashtagSection`)}
      </TitleOptionText>
      <Input
        label={Translation.t(`socialApp.Filter.Event.HashtagInputLabel`)}
        value={hashtags}
        onChangeText={setHashtags}
        labelStyle={{fontSize: 15, fontWeight: 'normal'}}
        placeholder={'#gaming'}
        containerStyle={{marginLeft: -5}}
      />
    </OptionSectionContainer>
  );
};

export default PersonCount;

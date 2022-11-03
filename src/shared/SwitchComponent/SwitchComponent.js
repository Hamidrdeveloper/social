import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import {SubtitleText, ViewContainer} from './SwitchComponent.styles';

//Translation
import Translation from '../../constants/i18n';
import {TitleSwitchText} from '../Switch/SwitchView.styles';

export const SwitchComponent = ({title, value, onChange = () => {}}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ViewContainer>
      <View style={{flexDirection: 'row'}}>
        {title && <TitleSwitchText>{title}</TitleSwitchText>}
        <Switch
          style={{
            transform: [{scaleX: 0.7}, {scaleY: 0.7}],
          }}
          trackColor={{false: '#8D8C8F', true: '#7BB1E8'}}
          thumbColor={value ? '#2975B5' : '#8D8C8F'}
          onValueChange={onChange}
          value={value}
        />
      </View>
    </ViewContainer>
  );
};

//React & React Native
import React from 'react';
import {Switch, View} from 'react-native';

//Style Components
import {
  ContainerSwitchView,
  SwitchComponentView,
  TextSwitchText,
  TitleSwitchText,
} from './SwitchView.styles';

const SwitchView = ({config, array, setter}) => {
  const onChangeSwitch = (index, array, setter) => {
    const newArrayConfig = array.map(config => {
      if (config.index === index) {
        config.value = !config.value;
        config.api();
      }
      return config;
    });
    setter(newArrayConfig);
  };

  return (
    <ContainerSwitchView>
      <SwitchComponentView>
        <View style={{flexDirection: 'row'}}>
          <TitleSwitchText>{config.title}</TitleSwitchText>
          <Switch
            style={{
              transform: [{scaleX: 0.7}, {scaleY: 0.7}],
            }}
            trackColor={{false: '#8D8C8F', true: '#7BB1E8'}}
            thumbColor={config.value ? '#2975B5' : '#8D8C8F'}
            onValueChange={() => onChangeSwitch(config.index, array, setter)}
            value={config.value}
          />
        </View>
        {config?.text && <TextSwitchText>{config.text}</TextSwitchText>}
      </SwitchComponentView>
    </ContainerSwitchView>
  );
};

export default SwitchView;

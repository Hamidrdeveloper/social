//React & React Native
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Styled components
import {TouchableContainer, ButtonText} from './ButtonDrops.styles';

const ButtonsDrops = () => {
  return (
    <TouchableContainer>
      <LinearGradient
        colors={['#2975B5', '#53ADDB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientStyle}
      >
        <ButtonText>Drops aufladen</ButtonText>
      </LinearGradient>
    </TouchableContainer>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default ButtonsDrops;

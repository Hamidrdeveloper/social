import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

export const ContainerView = styled.View`
  flex-direction: row;
  width:100%;

`;

export const BackTouchableOpacity = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  margin-left:0
}

;
`;

export const TitleView = styled.View`
  margin-left: ${wp('8%')};
  width: ${wp('68%')};
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

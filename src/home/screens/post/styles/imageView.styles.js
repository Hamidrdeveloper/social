import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  align-items: center;
`;

export const TouchableOpacityImage = styled.TouchableOpacity`
  margin-top: ${hp('-32%')};
`;

export const ImageSelected = styled.Image.attrs(props => ({
  source: props.source,
}))`
  width: ${wp('85%')};
  height: ${hp('30%')};
  border-radius: 2;
  margin-top: ${hp('3%')};
`;

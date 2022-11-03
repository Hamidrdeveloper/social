import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  flex-direction: row;
  margin-top: ${hp('10%')};
  margin-left: ${wp('30%')};
`;

export const GalleryIconView = styled.View`
  margin-left: ${wp('2.8%')};
`;

export const PhotoIconView = styled.View`
  margin-left: ${wp('0.5%')};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 6%;
`;

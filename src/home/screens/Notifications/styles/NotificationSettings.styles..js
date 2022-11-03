import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerScrollview = styled.ScrollView`
  margin-bottom: ${hp('5%')};
`;

export const TitleSectionText = styled.Text`
  font-weight: bold;
  font-size: ${wp('5%')};
  margin-left: ${wp('3%')};
  margin-top: ${hp('3%')};
`;

export const DescriptionSectionView = styled.View`
  align-items: center;
  margin-top: ${hp('1%')};
`;

export const DescriptionSectionText = styled.Text`
  width: 93%;
  color: #444444;
`;

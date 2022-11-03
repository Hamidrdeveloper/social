import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../constants/colorSchema';

export const ContainerScrollView = styled.ScrollView`
  max-height:100%;
  background:#fff;
`;

export const PlaceholderText = styled.Text`
  margin-top: ${hp('2%')};
  margin-bottom: ${hp('-0.5%')};
  color: ${colorSchema.general.lightGray};
  padding-left: ${wp('5%')};
  padding-right: ${wp('5%')};
`;

export const ContainerInput = styled.View`
  padding-left: ${wp('3%')};
  padding-right: ${wp('3%')};
`;

export const PeopleText = styled.Text`
  margin-top: ${hp('2%')};
  font-size: ${wp('4%')};
  padding-left: ${wp('5%')};
  padding-right: ${wp('5%')};
`;

export const ContainerQuantityPeople = styled.View`
  flex-direction: row;
  margin-top: ${hp('1%')};
  margin-left: ${wp('40%')};
`;

export const PeopleNumberText = styled.Text`
  margin-top: ${hp('0.3%')};
  margin-left: ${wp('4%')};
  margin-right: ${wp('4%')};
  font-size: ${wp('5%')};
`;

export const ContainerPeopleSection = styled.View`
  margin-top: ${hp('2%')};
`;

export const ContainerCategorySection = styled.View`
  margin-top: ${hp('4%')};
  margin-bottom: ${hp('1%')};
`;

export const ContainerButtonSection = styled.View`
  margin-top: ${hp('3%')};
  margin-left: ${wp('48%')};
`;

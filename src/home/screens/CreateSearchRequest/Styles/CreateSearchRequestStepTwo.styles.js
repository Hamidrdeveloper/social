import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../constants/colorSchema';

export const ContainerScrollView = styled.ScrollView`
  max-height: ${hp('100%')};
  height:100%;
  background:#fff;
  paddingTop:10;
`;

export const PlaceholderDateText = styled.Text`
  margin-top: ${hp('2%')};
  margin-bottom: ${hp('-0.5%')};
  color: ${colorSchema.general.lightGray};
  padding-left: ${wp('2%')};
`;

export const ContainerDateSection = styled.View`
  flex-direction: row;
  margin-left: ${wp('3%')};
`;

export const ContainerDateInput = styled.View`
  width: ${wp('46%')};
`;

export const ContainerSwitch = styled.View`
  margin-left: ${wp('5%')};
`;

export const ContainerMapDescription = styled.View`
  padding-left: ${wp('5%')};
  padding-right: ${wp('5%')};
`;

export const MapDescriptionText = styled.Text`
  color: ${colorSchema.general.lightGray};
  font-size: ${wp('4%')};
`;

export const ContainerOpenLinkButton = styled.View`
  margin-top: ${hp('-1%')};
`;

export const MoreInformationText = styled.Text`
  margin-top: ${hp('4%')};
  font-size: ${wp('4%')};
  text-decoration-line: underline;
  color: ${colorSchema.general.lightBlue};
`;

export const ContainerPriceSection = styled.View`
  margin-top: ${hp('3%')};
`;

export const DescriptionText = styled.Text`
  padding-left: ${wp('5%')};
  font-size: ${wp('5%')};
  margin-top: ${hp('1%')};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: ${wp('5%')};
  padding-right: ${wp('5%')};
  justify-content: space-between;
`;

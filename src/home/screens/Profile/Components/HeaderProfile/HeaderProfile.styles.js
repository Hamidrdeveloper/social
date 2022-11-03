import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../../constants/colorSchema';

export const ContainerView = styled.View`
  align-items: center;

`;

export const AvatarView = styled.View`
  margin-top: ${hp('3%')};
`;

export const ProfileNameText = styled.Text`
  margin-top: ${hp('2%')};
  font-size: ${wp('7%')};
  color: white;
  font-weight: bold;
`;

export const ProfileNicknameText = styled.Text`
  font-size: ${wp('5%')};
  color: white;
`;

export const ProfileAddressText = styled.Text`
  font-size: ${wp('5%')};
  color: white;
  margin-top: ${hp('1%')};
`;

export const VerticalLineView = styled.View`
  height: 90%;
  width: 1px;
  background-color: white;
  margin-top: 1%;
  margin-left: ${wp('5%')};
  margin-right: ${wp('5%')};
`;

export const StatisticsContainerView = styled.View`
  margin-top: ${hp('4%')};
  margin-bottom: ${hp('3%')};
  flex-direction: row;
  justify-content: center;

  width:100%;
`;

export const StatisticsSectionView = styled.View`
  align-items: center;
  height: ${hp('6%')};
`;

export const StatisticsTitleSectionText = styled.Text`
  font-size: ${wp('3.5%')};
  font-weight: 700;
  color: white;
`;

export const StatisticsSubtitleSectionText = styled.Text`
  padding: 5px;
  font-size: ${wp('5%')};
  font-weight: bold;
  color: white;
`;

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

export const ViewText = styled.Text`
  margin-top: 28px;
`;

export const ViewText2 = styled.Text`
  margin-top: 20px;
`;

export const ViewContainerSwitch = styled.View`
  margin-top: 5px;
`;

export const ViewContainer = styled.View`
  margin-top: 17px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
`;

export const SubtitleText = styled.Text`
  font-size: 16px;
  font-family: Montserrat-Medium;
  color: #343434;
`;

export const ViewBotton = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${wp('-4%')};
  margin-top: ${hp('2%')};
`;

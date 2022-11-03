import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  margin-left: ${wp('4%')};
  margin-top: ${hp('2%')};
`;

export const UserInfoContainerView = styled.View`
  flex-direction: row;
`;

export const UserDataWraper = styled.View`
  margin-left: 10px;
`;

export const UserNameText = styled.Text`
  font-size: ${wp('4.5%')};
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const DateText = styled.Text`
  font-size: ${wp('3%')};
  color: #343434;
  font-family: ${props => props.theme.fontFamily};
`;

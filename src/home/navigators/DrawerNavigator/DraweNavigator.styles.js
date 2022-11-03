import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../constants/colorSchema';

export const DrawerContainer = styled.SafeAreaView`
  flex: 1;
  background:#fff;
`;

export const TopContainer = styled.View`
  margin-bottom: 20px;
  margin-horizontal: 20px;
  height: 150px;
  padding-vertical: 20px;
  border-color: ${colorSchema.general.line.border};
  border-bottom-width: 0.4px;
`;

export const RoutesContainer = styled.View`
  flex: 1;
`;

export const LineView = styled.View`
  border-bottom-color: ${colorSchema.general.line.border};
  border-bottom-width: 0.5px;
  margin-bottom: ${hp('2%')};
  width: 85%;
  margin-left: ${wp('5%')};
`;

export const SignOutContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-start;
  margin-horizontal: 20px;
  height: 30px;
  
`;

export const SignOutText = styled.Text`
  color: #343434;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamily};
`;

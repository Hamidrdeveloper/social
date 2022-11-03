import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const FormContainer = styled.ScrollView`
  padding-bottom: 0px;
`;

export const NavLinkView = styled.View`
  margin-left: ${wp('3%')};
`;

import styled from 'styled-components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ViewContainer = styled.View`
  margin-top: 19px;
  align-items: center;
`;

export const PhoneNumberAndButtonView = styled.View`
  align-items: center;
  width: ${wp('90%')};
`;

export const ViewBotton = styled.View`
  align-items: center;
  justify-content: center;
`;

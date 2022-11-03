import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const fontSizeInformationText = `font-size: ${wp('5%')};`;

export const Container = styled.View`
  align-items: center;
`;

export const ContainerView = styled.View`
  width: ${wp('90%')};
`;

export const InformationText = styled.Text`
  margin-top: ${hp('2%')};
  ${fontSizeInformationText}
`;

export const CheckBoxAndTextView = styled.View`
  flex-direction: row;
  width: ${wp('80%')};
  margin-top: ${hp('4%')};
  margin-left: ${wp('-4%')};
`;

export const InformationCheckBoxText = styled.Text`
  margin-top: ${hp('1%')};
  ${fontSizeInformationText}
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  margin-top: ${hp('9%')};
`;

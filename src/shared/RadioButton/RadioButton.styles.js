import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colorSchema from '../../constants/colorSchema';

export const ContainerView = styled.View`
  flex-direction: row;
`;

export const RadioButtonUnseleted = styled.TouchableWithoutFeedback`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${colorSchema.general.line.border};
  align-items: center;
  justify-content: center;
`;

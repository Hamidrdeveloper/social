import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ModalView = styled.View`
  flex: ${props => (props.flex_2 ? '2' : '1')};
  marginTop: ${props => (props.flex_2 ? hp('20%') : '0')};
  justifyContent: center;
  alignContent: center;
`;

export const ModalHeaderText = styled.Text`
  fontSize: ${hp('6%')};
  color: white;
  marginBottom: ${hp('4%')};
  textAlign: center;
  fontWeight:bold;
`;

export const ModalPressableText = styled.Text`
  fontSize: ${hp('2.5%')};
  color: ${props => (props.black ? 'black' : '#fff')};
  fontWeight:bold;
  textTransform: uppercase;
  textAlign: center;
`;

export const ModalPressable = styled.Pressable`
  backgroundColor: ${props => (props.secondary ? 'rgba(0, 0, 0, 0)' : 'white')};
  border: ${props => (props.secondary ? '2px solid #fff' : '2px solid #fff')};
  borderRadius: 5;
  width: ${wp('80%')};
  paddingTop: ${props => (props.secondary ? hp('0.8%') : hp('2.5%'))};
  paddingBottom: ${props => (props.secondary ? hp('0.8%') : hp('2.5%'))};
  marginTop: ${hp('1%')};
  marginBottom: ${hp('1%')};
  alignSelf: center;
`;

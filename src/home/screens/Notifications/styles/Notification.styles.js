import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerView = styled.View`
  width: 95%;
  border-width: 0.6;
  border-color: #343434;
  border-radius: 5;
  padding: 10px;
  margin-top: ${hp('1%')};
`;

export const ProfileAndMessageView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarView = styled.View`
  margin-right: ${wp('1%')};
`;

export const MessageText = styled.View`
  width: ${'100%'};
  justify-content: space-between;
  color: #444444;
  flex-direction: row;
`;

export const UsernameText = styled.Text`
  align-self: center;
  font-weight: bold;
  color: black;
`;

export const DateText = styled.Text`
  font-size: 12;
  textAlign: right;
  color: #707070;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  margin-top: ${hp('1%')};
`;

export const NotificationImage = styled.Image.attrs(props => ({
  source: props.source,
}))`
  width: ${wp('25%')};
  height: ${hp('10%')};
  margin-left: ${wp('6%')};
  margin-top: ${hp('1%')};
`;

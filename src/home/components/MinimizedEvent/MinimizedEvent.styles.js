import styled from 'styled-components';

export const MinimizedPostContainer = styled.View`
  padding-bottom: 5px;
  border-radius: 10px;
  background:#fff;
  background-color : "#fff"
  width:100%;
  
`;

export const ImageContainer = styled.View``;

export const ExtraPostContainer = styled.View``;

export const TitleImageText = styled.Text`
  position: absolute;
  bottom: 50px;
  font-weight: bold;
  left: 10px;
  color: white;
  font-size: 20px;
  padding-left:10;
  padding-right:10;
`;

export const EventDetailContainer = styled.View`
  margin-left: 10px;
  flex-direction: row;
`;

export const ReportLabelContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const PersonNeededText = styled.Text`
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
`;

export const EventCountDownDetail = styled.Text`
  font-family: ${props => props.theme.fontFamily};
`;
export const PersonNeededRRTText = styled.Text`
  font-family: ${props => props.theme.fontFamily};
`;
export const ReportLabelBoseContainer = styled.Text`
  font-family: ${props => props.theme.fontFamily};
`;
export const EventCountDownContain = styled.Text`
  font-family: ${props => props.theme.fontFamily};
`;

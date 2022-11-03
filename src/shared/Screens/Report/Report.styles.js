import styled from 'styled-components';

export const SafeAreaViewContainer = styled.SafeAreaView`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const ReportScreenContainer = styled.View`
  flex: 1;
`;

export const MainReportContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 25px;
  background-color: #f2f2f2;
`;

export const InfoTextContainer = styled.View`
  margin-bottom: 20px;
`;
export const InfoText = styled.Text`
  font-size: 24px;
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
`;

import styled from 'styled-components';

export const DescriptionContainer = styled.View`
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const ShowMoreText = styled.Text`
  font-weight: bold;
  text-decoration-line: underline;
  font-family: ${props => props.theme.fontFamily};
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  font-family: ${props => props.theme.fontFamily};
`;

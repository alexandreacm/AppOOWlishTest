import styled from 'styled-components/native';
import { handlePixels } from '@/helpers/functions/utils';

export const StyledContainer = styled.View`
  flex: 1;
  width: ${({ width }) => handlePixels(width) || 'auto'};
  flex-direction: column;
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom || 0)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft || 0)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight || 0)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop || 0)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop || 0)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight || 16)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft || 16)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom || 0)};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const StyledSelectContainer = styled(StyledContainer)`
  flex: none;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
`;

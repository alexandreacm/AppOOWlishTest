import React, { memo } from 'react';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/theme/colors';
import { SourcePropType } from '@/helpers/constants/propTypes';

const CardDetail = ({
  image,
  onPress,
  title,
  price,
  issueNumber,
  description,
  style
}) => {
  return (
    <StyledContainer style={style} onPress={onPress}>
      <StyledContainerCharacters>
        <StyledCover source={image} resizeMode='cover' />
        <StyledContent>
          <StyledName>{title}</StyledName>
          <StyledIssueNumber>N° Edição: {issueNumber}</StyledIssueNumber>
          <StyledPrice>Preço: {price}</StyledPrice>
        </StyledContent>
      </StyledContainerCharacters>
      <StyledSummery>
        <StyledSummeryText>Summary</StyledSummeryText>
      </StyledSummery>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
`;

const StyledContainerCharacters = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`;

const StyledContent = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledName = styled.Text`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 6px;
`;

const StyledSummery = styled.View`
  width: 100%;
  background-color: #f3f3f3;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

const StyledSummeryText = styled.Text`
  font-size: 16px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
`;
const StyledPrice = styled.Text`
  font-size: 14px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  color: ${colors.DEFAULT_TEXT};
`;

const StyledDescription = styled.Text`
  font-size: 16px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

const StyledIssueNumber = styled.Text`
  font-size: 14px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  color: ${colors.DEFAULT_TEXT};
`;
const StyledCover = styled.Image`
  width: 70px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
`;

CardDetail.defaultProps = {
  style: {},
  description: '',
  onPress: () => {}
};

CardDetail.propTypes = {
  image: SourcePropType.isRequired,
  style: ViewPropTypes.style,
  issueNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  onPress: PropTypes.func
};

export default memo(CardDetail);

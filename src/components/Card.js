import React, { memo } from 'react';
import { ViewPropTypes, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import colors from '@/theme/colors';

import { SourcePropType } from '@/helpers/constants/propTypes';

const Card = ({ image, onPress, name, id, description, style }) => {
  return (
    <StyledContainer style={style}>
      <StyledTouchable onPress={onPress}>
        <StyledImage source={image} resizeMode='cover' />
        <StyledContent>
          <StyledRowId>
            <StyledBadgeLinearGradient colors={colors.GRADIENT_BADGE} />
            <StyledTitle testID='labelId'>ID: </StyledTitle>
            <StyledTitle testID='Id'>{id}</StyledTitle>
          </StyledRowId>
          <StyledRow>
            <StyledName numberOfLines={1} testID='name'>
              {name}
            </StyledName>
          </StyledRow>
          <StyledRow>
            <StyledDescription testID='description' numberOfLines={3}>
              {description}
            </StyledDescription>
          </StyledRow>
        </StyledContent>
      </StyledTouchable>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding: 8px;
  border-radius: 8px;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
`;

const StyledTouchable = styled(TouchableOpacity)`
  flex-direction: row;
`;

const StyledContent = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const StyledRowId = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const StyledImage = styled.Image`
  width: 80px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
`;

const StyledTitle = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.SECUNDARY};
`;

const StyledName = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.SECUNDARY};
`;

const StyledDescription = styled.Text`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.DARK_TEXT};
`;

const StyledBadgeLinearGradient = styled(LinearGradient)`
  width: 12px;
  height: 12px;
  border-radius: 100px;
  margin-right: 8px;
`;

Card.defaultProps = {
  style: {},
  description: '',
  onPress: () => {}
};

Card.propTypes = {
  image: SourcePropType.isRequired,
  style: ViewPropTypes.style,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  onPress: PropTypes.func
};

export default memo(Card);

import React from 'react';
import styled from 'styled-components/native';

import colors from '@/theme/colors';
import Header from '@/components/Header';

import MarvelComicsHome from '@/screens/HomeScreen/MarvelComicsScreen';

const HomeScreen = () => {
  return (
    <>
      <Header
        leftIcon
        backgroundColor={colors.PRIMARY}
        backButtonColor={colors.COLOR_WHITE}
      />
      <StyledContainer>
        <MarvelComicsHome />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;
export default HomeScreen;

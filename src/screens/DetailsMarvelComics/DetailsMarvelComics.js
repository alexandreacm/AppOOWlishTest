import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import {
  useRoute,
  useIsFocused,
  useNavigation
} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import colors from '@/theme/colors';
import Header from '@/components/Header';
import CardDetail from '@/components/CardDetail';

import { LOADING_DETAILS_CHARACTERS } from '@/store/slices/marvelComicsSlice';

const DetailsMarvelComics = () => {
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const dispatch = useDispatch();

  const { isLoading, detailsCharactersData, errorMessage } = useSelector(
    ({ comics }) => comics
  );

  const {
    params: { id }
  } = useRoute();

  const handleGoBack = () => goBack();

  const contentDetailComic = useMemo(() => {
    if (isLoading)
      return <ActivityIndicator color={colors.SECUNDARY} size='large' />;

    return detailsCharactersData.map(detailCharactersData => (
      <CardDetail
        key={detailCharactersData?.id}
        image={{
          uri: `${detailCharactersData?.thumbnail.path}.${detailCharactersData?.thumbnail.extension}`
        }}
        title={detailCharactersData?.title}
        issueNumber={detailCharactersData?.issueNumber}
        price={detailCharactersData?.prices[0].price}
        description={
          detailCharactersData?.description
            ? detailCharactersData?.description
            : 'Sem descrição'
        }
      />
    ));
  }, [isLoading, detailsCharactersData]);

  useEffect(() => {
    dispatch(LOADING_DETAILS_CHARACTERS({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Header
        showBackButton
        leftIcon
        onBackPress={handleGoBack}
        backgroundColor={colors.PRIMARY}
        backButtonColor={colors.COLOR_WHITE}
        isFocuse={isFocused}
      />
      {errorMessage && (
        <StyledViewLabel>
          <StyledLabel>{errorMessage}</StyledLabel>
        </StyledViewLabel>
      )}
      <StyledScrollView showsVerticalScrollIndicator={false}>
        <StyledContainerDefault>{contentDetailComic}</StyledContainerDefault>
      </StyledScrollView>
    </>
  );
};

const StyledContainerDefault = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_WHITE};
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
  color: ${colors.PRIMARY};
`;

const StyledViewLabel = styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: ${colors.DANGER};
`;

const StyledScrollView = styled.ScrollView`
  flex: 1;
  background: ${colors.COLOR_WHITE};
`;
export default DetailsMarvelComics;

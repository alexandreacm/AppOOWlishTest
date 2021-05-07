import React, { useCallback, memo, useEffect, useState, useRef } from 'react';

import { FlatList } from 'react-native';

import styled, { css } from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import TextInput from '@/components/TextInput';
import Card from '@/components/Card';

import { LOADING_MARVEL_CHARACTERS } from '@/store/slices/marvelComicsSlice';

const MarvelComics = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [nameCharacter, setNameCharacter] = useState('');
  const passwordRef = useRef(null);

  const { isLoading, listCharactersData, hasError, errorMessage } = useSelector(
    ({ comics }) => comics
  );

  const handleTitleSubmit = () => passwordRef.current?.focus();

  const onHandleNavigate = useCallback(
    id => {
      navigate('details-comics', { id });
    },
    [navigate]
  );

  const renderItem = ({ item: { id, thumbnail, name, description } }) => (
    <StyledCardCharacter
      key={id}
      id={id}
      image={{
        uri: `${thumbnail.path}.${thumbnail.extension}`
      }}
      onPress={() => onHandleNavigate(id)}
      name={name}
      description={description || 'Sem descrição do herói'}
    />
  );

  useEffect(() => {
    dispatch(LOADING_MARVEL_CHARACTERS({ nameCharacter }));
  }, [dispatch, nameCharacter]);

  return (
    <>
      <StyledHeader>
        <TextInput
          onSubmitEditing={handleTitleSubmit}
          width='100%'
          label='Pesquisar Heróis'
          value={nameCharacter}
          onChangeText={setNameCharacter}
          marginBottom={8}
          hasError={hasError}
        />
        {errorMessage && (
          <StyledViewLabe>
            <StyledLabel>{errorMessage}</StyledLabel>
          </StyledViewLabe>
        )}
      </StyledHeader>
      <StyledContainer>
        {isLoading ? (
          <StyledLoading />
        ) : (
          <FlatList
            data={listCharactersData}
            keyExtractor={item => String(item.id)}
            renderItem={renderItem}
          />
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

const StyledHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

const StyledLoading = styled.ActivityIndicator.attrs(
  ({ theme: { colors } }) => ({
    color: colors.SECUNDARY
  })
)``;

const StyledLabel = styled.Text`
  width: 100%;
  font-weight: 400;
  font-size: 14;
  margin-bottom: 8;
  ${({ theme: { colors } }) => css`
    color: ${colors.COLOR_WHITE}};
  `};
`;
const StyledViewLabe = styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.DANGER}};
  `};
`;

const StyledCardCharacter = styled(Card)`
  margin-bottom: 8px;
`;

export default memo(MarvelComics);

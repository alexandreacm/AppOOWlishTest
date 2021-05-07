/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offset: null,
  limit: null,
  total: null,
  count: null,
  listCharactersData: [],
  detailsCharactersData: [],
  isLoading: false,
  errorMessage: null,
  errorStatus: null,
  hasError: false
};

const marvelComicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    LOADING_MARVEL_CHARACTERS: state => ({ ...state, isLoading: true }),
    LOADING_MARVEL_CHARACTERS_SUCCESS: (
      state,
      { payload: { offset, limit, total, count, charactersData } }
    ) => ({
      ...state,
      offset,
      limit,
      total,
      count,
      listCharactersData: charactersData,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      errorStatus: null
    }),
    LOADING_MARVEL_CHARACTERS_FAILURE: (
      state,
      { payload: { errorMessage, errorStatus } }
    ) => ({
      ...state,
      errorMessage,
      errorStatus,
      hasError: true,
      isLoading: false
    }),
    LOADING_DETAILS_CHARACTERS: state => ({ ...state, isLoading: true }),
    LOADING_DETAILS_SUCCESS: (
      state,
      { payload: { offset, limit, total, count, detailsCharactersData } }
    ) => ({
      ...state,
      offset,
      limit,
      total,
      count,
      detailsCharactersData,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      errorStatus: null
    }),
    LOADING_DETAILS_FAILURE: (
      state,
      { payload: { errorMessage, errorStatus } }
    ) => ({
      ...state,
      errorMessage,
      errorStatus,
      hasError: true,
      isLoading: false
    })
  }
});

const { actions, reducer } = marvelComicsSlice;

export const marvelComicsState = initialState;

export const {
  LOADING_MARVEL_CHARACTERS,
  LOADING_MARVEL_CHARACTERS_SUCCESS,
  LOADING_MARVEL_CHARACTERS_FAILURE,
  LOADING_DETAILS_CHARACTERS,
  LOADING_DETAILS_SUCCESS,
  LOADING_DETAILS_FAILURE
} = actions;
export default reducer;

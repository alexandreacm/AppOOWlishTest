import { all, call, put, takeEvery } from 'redux-saga/effects';

import api from '@/services/api';
import { API_KEY } from '@/helpers/constants/storageKeys';

import {
  LOADING_MARVEL_CHARACTERS,
  LOADING_MARVEL_CHARACTERS_SUCCESS,
  LOADING_MARVEL_CHARACTERS_FAILURE,
  LOADING_DETAILS_CHARACTERS,
  LOADING_DETAILS_SUCCESS,
  LOADING_DETAILS_FAILURE
} from '@/store/slices/marvelComicsSlice';

export function* loadingMarvelCharacters({
  payload: { nameCharacter = '', page = 0 }
}) {
  try {
    const urlbase = nameCharacter
      ? `/characters?ts=1&offset=${page}&nameStartsWith=${nameCharacter}&apikey=${API_KEY}`
      : `/characters?ts=1&offset=${page}&apikey=${API_KEY}`;

    const response = yield call(api.get, urlbase);

    const {
      data: { offset, limit, total, count, results }
    } = response.data;

    const charactersData = results;
    yield put(
      LOADING_MARVEL_CHARACTERS_SUCCESS({
        offset,
        limit,
        total,
        count,
        charactersData
      })
    );
  } catch (error) {
    yield put(
      LOADING_MARVEL_CHARACTERS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os dados dos heroís',
        errorStatus: error.response ? error.response.status : 400
      })
    );
  }
}

export function* loadingDetailsCharacters({ payload: { id } }) {
  try {
    const urlbase = `/characters/${id}/comics?ts=1&apikey=${API_KEY}`;

    const response = yield call(api.get, urlbase);

    const {
      data: { offset, limit, total, count, results }
    } = response.data;

    const detailsCharactersData = results;

    yield put(
      LOADING_DETAILS_SUCCESS({
        offset,
        limit,
        total,
        count,
        detailsCharactersData
      })
    );
  } catch (error) {
    yield put(
      LOADING_DETAILS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os detalhes do seu heroí',
        errorStatus: error.response ? error.response.status : 400
      })
    );
  }
}

export default function* watcher() {
  yield all([
    takeEvery(LOADING_MARVEL_CHARACTERS, loadingMarvelCharacters),
    takeEvery(LOADING_DETAILS_CHARACTERS, loadingDetailsCharacters)
  ]);
}

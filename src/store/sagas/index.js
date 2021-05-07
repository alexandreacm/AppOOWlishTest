import { all } from 'redux-saga/effects';
import marvelComicsSaga from './marvelComicsSaga';

export default function* rootSaga() {
  yield all([marvelComicsSaga()]);
}

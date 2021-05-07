import { combineReducers } from '@reduxjs/toolkit';

import comics, { marvelComicsState } from './marvelComicsSlice';

export const globalState = {
  comics: marvelComicsState
};

export default combineReducers({ comics });

import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import MarvelComicsScreen from '@/screens/HomeScreen/MarvelComicsScreen';

describe('tests in MarvelComicsScreen Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<MarvelComicsScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<MarvelComicsScreen />);
  });
});

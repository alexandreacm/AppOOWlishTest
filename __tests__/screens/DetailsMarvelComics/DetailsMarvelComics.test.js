import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import DetailsMarvelComics from '@/screens/DetailsMarvelComics';

describe('tests in DetailsMarvelComics Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<DetailsMarvelComics />);
  });

  test('renders correctly', () => {
    renderWithTheme(<DetailsMarvelComics />);
  });
});

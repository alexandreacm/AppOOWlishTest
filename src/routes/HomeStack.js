import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/HomeScreen';
import DetailsMarvelComics from '@/screens/DetailsMarvelComics';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Navigator initialRouteName='Home' headerMode>
        <Screen name='Home' component={Home} />
        <Screen name='details-comics' component={DetailsMarvelComics} />
      </Navigator>
    </>
  );
};

export default HomeStack;

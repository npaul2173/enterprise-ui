import React from 'react';
import {Home} from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';
import {StatusBar} from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

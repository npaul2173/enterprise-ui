import React from 'react';
import {Home} from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

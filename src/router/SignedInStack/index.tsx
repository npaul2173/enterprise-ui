import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {PureComponent} from 'react';
import {Home} from '../../screens/home';
import {MainDrawer} from '../DrawerNavigation';

const Stack = createNativeStackNavigator();

export const SignedInStack = () => {
  return (
    // <MyDrawer />
    <Stack.Navigator
      initialRouteName="Home2"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home2" component={MainDrawer} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

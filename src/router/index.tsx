import React, {PureComponent} from 'react';
import {Home} from '../screens/home';
import {Meetings} from '../screens/meetings';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {BlurView} from '@react-native-community/blur';
import {SignedInStack} from './SignedInStack';

export const Router = () => {
  return <SignedInStack />;
};

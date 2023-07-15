import React, {PureComponent} from 'react';
import {Home} from '../../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './Custom';

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {backgroundColor: 'transparent'},
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Home} />
    </Drawer.Navigator>
  );
}

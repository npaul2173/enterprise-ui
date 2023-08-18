import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {themeStyles} from '@common/theme';
import {Home} from '@screens/home';
import {CustomDrawerContent} from './Custom';
import {Mail} from '@screens/mail';

export const DRAWER_WIDTH = 320;
const Drawer = createDrawerNavigator();

export function MainDrawer() {
  const {palette} = themeStyles.useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: `${palette.grey002}55`,
        drawerStyle: {width: DRAWER_WIDTH},
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="Mail" component={Mail} />
    </Drawer.Navigator>
  );
}

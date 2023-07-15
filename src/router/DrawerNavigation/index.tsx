import React, {PureComponent} from 'react';
import {Home} from '../../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {themeStyles} from 'common/theme';
import {CustomDrawerContent} from './Custom';

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  const {palette} = themeStyles.useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: `${palette.grey003}55`,
        drawerStyle: {width: 300},
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Home} />
    </Drawer.Navigator>
  );
}

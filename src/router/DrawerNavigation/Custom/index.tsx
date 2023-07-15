import React from 'react';
import {StyleSheet, View} from 'react-native';
import {themeStyles} from '../../../common/theme';
import {Header} from './Header';
import {SlideButton} from './PushBackButton';
import {DRAWER_WIDTH} from '..';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
  },
});

export function CustomDrawerContent(props: any) {
  return (
    <View style={{height: '100%', width: DRAWER_WIDTH}}>
      <Header />
      {/* <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </DrawerContentScrollView> */}
    </View>
  );
}

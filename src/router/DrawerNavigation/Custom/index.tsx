import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DRAWER_WIDTH} from '..';
import {Header} from './Header';
import {Messages} from './Messages';
import {Divider, Flex, Spacer, Stack} from 'react-native-flex-layout';

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
    <Stack style={{height: '100%', width: DRAWER_WIDTH}}>
      <Header />
      <Divider />

      {/* <DrawerContentScrollView {...props}> */}
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Divider />

      {/* </DrawerContentScrollView> */}
      <Messages />
    </Stack>
  );
}

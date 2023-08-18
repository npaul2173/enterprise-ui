import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DRAWER_WIDTH} from '..';
import {Header} from './Header';
import {Messages} from './Messages';
import {Divider, Flex, Spacer, Stack} from 'react-native-flex-layout';
import DrawerItemList from './DrawerItemsList';
import {useStyles} from './index.styles';
import {UserMode} from './UserMode';

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

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  console.log('Descriptors -----> ', props.descriptors);
  // console.log('State -----> ', props.state);

  const {styles} = useStyles({});
  return (
    <Stack style={styles.root}>
      <Header />
      <UserMode />
      {/* <Divider /> */}
      {/* <DrawerItemList {...props} /> */}
      {/* <Divider /> */}
      {/* <Messages /> */}
    </Stack>
  );
}

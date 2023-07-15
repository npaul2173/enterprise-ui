import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import {BlurView} from '@react-native-community/blur';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

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
    <View style={{height: '100%', backgroundColor: '#ffffff55'}}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />

      {/* <View
        style={{
          height: 300,
          width: 200,
          backgroundColor: '#ffffff66',
          margin: 30,
          borderWidth: 0.5,
          borderColor: '#9a9a9a',
          borderRadius: 10,
        }}></View> */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    </View>
  );
}

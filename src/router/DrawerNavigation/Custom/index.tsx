import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import WebView from 'react-native-webview';

import {BlurView} from '@react-native-community/blur';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ImageSource} from '../../../assets/images';
import {themeStyles} from '../../../common/theme';
import {FontFamilyEnum} from '../../../common/components/TextView/enum';

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
  const theme = themeStyles.useTheme();
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#ffffff55',
          position: 'absolute',
          top: 0,
          left: 0,
          width: 300,
          zIndex: 100,
        }}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={20}
          overlayColor={'transparent'}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      <View
        style={{
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          width: 300,
          zIndex: 999,
        }}>
        <View
          style={{
            margin: 20,
            backgroundColor: theme.palette.white,
            width: 60,
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImageSource.profilePicture}
            style={{width: 50, height: 50}}
          />
        </View>
        <Text style={{fontSize: 30, fontFamily: FontFamilyEnum.extraBold}}>
          I'm the non blurred text because I got rendered on top of the BlurView
        </Text>

        <View
          style={{
            width: 200,
            height: 200,
            margin: 20,
            backgroundColor: theme.palette.primaryColor,
          }}></View>
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
    </View>
  );
}

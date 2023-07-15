import React, {PureComponent} from 'react';
import {Image, View} from 'react-native';
import {ImageSource} from 'src/assets/images';
export const Header = () => {
  return (
    <View
      style={{
        borderRadius: 10,
      }}>
      <Image
        source={ImageSource.profilePicture}
        style={{width: 50, height: 50}}
      />
    </View>
  );
};

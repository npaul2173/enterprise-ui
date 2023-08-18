import {TextView} from '@common/components/TextView';
import React, {PureComponent} from 'react';
import {Image, ImageStyle, View} from 'react-native';
import {HStack, VStack} from 'react-native-flex-layout';
import {ImageSource} from 'src/assets/images';
import {useStyles} from './index.styles';
import {UserStatusOption} from './UserStatusOption';

export const Header = () => {
  const {styles} = useStyles({});
  return (
    <HStack items="center" spacing={15} style={styles.container}>
      <View>
        <Image
          source={ImageSource.profilePicture}
          resizeMode="cover"
          style={styles.profilePictureContainer as ImageStyle}
        />
      </View>
      <VStack spacing={5}>
        <TextView
          variant="bold"
          ellipsizeMode="tail"
          numberOfLines={1}
          style={styles.nameTextStyle}>
          Connor Benitez
        </TextView>
        <UserStatusOption />
      </VStack>
    </HStack>
  );
};

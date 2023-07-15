import {TextView} from '@common/components/TextView';
import React, {PureComponent} from 'react';
import {Image, ImageStyle, View} from 'react-native';
import {HStack, VStack} from 'react-native-flex-layout';
import {ImageSource} from 'src/assets/images';
import {useStyles} from './index.styles';
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
      <VStack>
        <TextView
          variant="bold"
          ellipsizeMode="tail"
          numberOfLines={1}
          style={styles.nameTextStyle}>
          Connor Benitez
        </TextView>
        <TextView variant="light" style={styles.designationTextStyle}>
          Product designer
        </TextView>
      </VStack>
    </HStack>
  );
};

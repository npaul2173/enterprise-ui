import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useStyles} from './index.styles';
import {IconView} from '../../common/components/Icon';
import {IconSetEnum} from '../../common/components/Icon/enums';

export const Home = () => {
  const {styles} = useStyles({});
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.root}>
        <IconView name={IconSetEnum.rightArrow} />
        <Text style={styles.title}>Today</Text>
        <Text>
          Ullamco commodo adipisicing nisi elit do dolor esse cillum
          exercitation. Voluptate officia irure duis voluptate mollit culpa sunt
          id ipsum voluptate ut exercitation. Occaecat amet excepteur duis et
          sit est occaecat
        </Text>
      </View>
    </>
  );
};

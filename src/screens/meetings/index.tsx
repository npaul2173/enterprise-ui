import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {IconView} from '../../common/components/Icon';
import {IconSetEnum} from '../../common/components/Icon/enums';
import {useStyles} from './index.styles';

export const Meetings = () => {
  const {styles} = useStyles({});

  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.root}>
        <IconView name={IconSetEnum.rightArrow} />

        <Text style={styles.title}>Today</Text>

        <View>
          <Text>Intel</Text>
          <Text>Category overview:</Text>
          <Text>{'Bottles and packaging,\nNorth America'}</Text>
          <View>
            <Text>Updated</Text>
            <Text>May 27</Text>
          </View>
          <Text>View report</Text>
        </View>
      </View>
    </>
  );
};

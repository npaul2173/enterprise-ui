import React from 'react';
import {Button, ScrollView, StatusBar, Text, View} from 'react-native';
import {IconView} from '../../common/components/Icon';
import {IconSetEnum} from '../../common/components/Icon/enums';
import {useStyles} from './index.styles';
import {useNavigation} from '@react-navigation/native';
import {TextView} from '../../common/components/TextView';
import {EventCard} from './components/EventCard';
import {useCommonStyles} from '../../common/style/commonStyles';
import {HStack, Stack, VStack} from 'react-native-flex-layout';

export const Home = () => {
  const {styles, cx} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});
  const events = new Array(5).fill({});

  return (
    <View style={styles.container}>
      <View>
        <TextView
          variant="bold"
          style={cx(styles.headerText, commonStyles.blackText)}>
          Events
        </TextView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.eventContainer}>
          <HStack spacing={20} divider={<View />}>
            {events.map((item, index) => {
              return <EventCard key={index} />;
            })}
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
};

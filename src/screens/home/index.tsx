import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {IconView} from '../../common/components/Icon';
import {IconSetEnum} from '../../common/components/Icon/enums';
import {useStyles} from './index.styles';
import {useNavigation} from '@react-navigation/native';
import {TextView} from '../../common/components/TextView';
import {EventCard} from './components/EventCard';
import {useCommonStyles} from '../../common/style/commonStyles';
import {HStack, Stack, VStack} from 'react-native-flex-layout';
import {MeetingCard} from './components/MeetingCard';

export const Home = ({navigation}: any) => {
  const {styles, cx} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});
  const events = new Array(5).fill({});

  const meetings = new Array(10).fill({});

  return (
    <View style={styles.container}>
      <View style={{marginTop: 10}}>
        <Button
          title="open"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>

      <View>
        <TextView
          variant="bold"
          style={cx(styles.headerText, commonStyles.blackText)}>
          Today
        </TextView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack
          style={styles.meetingsContainer}
          spacing={10}
          divider={<View />}>
          {meetings.map((_, index) => {
            return (
              <Stack spacing={20} key={index} divider={<View />}>
                <MeetingCard />
                <MeetingCard />
              </Stack>
            );
          })}
        </HStack>
      </ScrollView>

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

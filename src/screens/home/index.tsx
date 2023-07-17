import React from 'react';
import {Button, ScrollView, View} from 'react-native';
import {HStack, Stack} from 'react-native-flex-layout';
import {useCommonStyles} from '../../common/style/commonStyles';
import {EventCard} from './components/EventCard';
import {MeetingCard} from './components/MeetingCard';
import {useStyles} from './index.styles';
import {TextView} from '@common/components/TextView';
import {AppHeader} from '@common/components/AppHeader';
import {Container} from '@common/components/Container';

export const Home = ({navigation}: any) => {
  const {styles, cx} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});
  const events = new Array(5).fill({});

  const meetings = new Array(10).fill({});

  return (
    <Container>
      <AppHeader navType="drawer" />

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
                <MeetingCard index={index} />
                <MeetingCard index={index} />
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
    </Container>
  );
};

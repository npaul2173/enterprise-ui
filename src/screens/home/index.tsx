import {AppHeader} from '@common/components/AppHeader';
import {Container} from '@common/components/Container';
import {LinearProgress} from '@common/components/Progress';
import {Spacing} from '@common/components/Space';
import {TextView} from '@common/components/TextView';
import React from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
import {HStack, Stack} from 'react-native-flex-layout';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ImageSource} from 'src/assets/images';
import {useCommonStyles} from '../../common/style/commonStyles';
import {EventCard} from './components/EventCard';
import {MeetingCard} from './components/MeetingCard';
import {useStyles} from './index.styles';
import {Explore} from './components/Explore';

const {width: screenWidth} = Dimensions.get('screen');
export const Home = ({navigation}: any) => {
  const {styles, cx} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});
  const events = new Array(5).fill({});

  const meetings = new Array(10).fill({});

  return (
    <Container>
      <AppHeader navType="drawer" />
      <KeyboardAwareScrollView>
        <Stack spacing={30}>
          <Stack>
            {/* IMAGE BACKGROUND */}
            <Stack style={{position: 'absolute', top: 0, zIndex: -20}}>
              <Image
                style={{height: 400, width: screenWidth}}
                source={ImageSource.background.gradientIllustration}
              />
            </Stack>

            <Stack spacing={20}>
              <Stack style={styles.exploreHeaderContainer}>
                <TextView
                  variant="bold"
                  style={cx(styles.headerText, commonStyles.blackText)}>
                  Explore
                </TextView>
              </Stack>

              <Explore />
            </Stack>

            <Stack>
              <Stack
                direction="row"
                justify="between"
                items="end"
                style={styles.todayHeaderContainer}>
                <Stack direction="row" items="end" spacing={5}>
                  <TextView
                    variant="bold"
                    style={cx(styles.headerText, commonStyles.blackText)}>
                    Today
                  </TextView>
                  <TextView variant="bold" style={cx(styles.subHeaderText)}>
                    4th Jan
                  </TextView>
                </Stack>

                <Stack>
                  <Stack direction="row" items="end" spacing={5}>
                    <TextView
                      variant="bold"
                      style={cx(styles.headerText, commonStyles.blackText)}>
                      12
                    </TextView>
                    <TextView variant="bold" style={cx(styles.subHeaderText)}>
                      out of 22
                    </TextView>
                  </Stack>
                  <LinearProgress current={12} total={22} />
                </Stack>
              </Stack>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack
                  style={styles.meetingsContainer}
                  spacing={5}
                  divider={<View />}>
                  {meetings.map((_, index) => {
                    return (
                      <Stack
                        style={{paddingTop: 10}}
                        spacing={20}
                        key={index}
                        divider={<View />}>
                        <MeetingCard isCurrent={index === 0} />
                        <MeetingCard />
                      </Stack>
                    );
                  })}
                </HStack>
              </ScrollView>
            </Stack>
          </Stack>

          <Stack>
            <Stack
              direction="row"
              justify="between"
              items="end"
              style={styles.todayHeaderContainer}>
              <TextView
                variant="bold"
                style={cx(styles.headerText, commonStyles.blackText)}>
                Events
              </TextView>
            </Stack>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.eventContainer}>
                <HStack spacing={20} divider={<View />}>
                  {events.map((item, index) => {
                    return <EventCard key={index} />;
                  })}
                </HStack>
              </View>
            </ScrollView>
          </Stack>

          <Spacing size={100} />
        </Stack>
      </KeyboardAwareScrollView>
    </Container>
  );
};

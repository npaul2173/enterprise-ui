import {TextView} from '@common/components/TextView';
import {themeStyles} from '@common/theme';
import React, {PureComponent} from 'react';
import {Image, ImageStyle, View} from 'react-native';
import {useStyles} from './index.styles';
import {ImageSource} from 'src/assets/images';
import {HStack, Stack} from 'react-native-flex-layout';
import LinearGradient from 'react-native-linear-gradient';

export const Messages: React.FC = () => {
  const {styles, theme} = useStyles({});

  const arr = [
    {id: 1, name: 'Braden Benitez', count: 12},
    {id: 2, name: 'Rihanna Mcdaniel', count: 6},
    {id: 3, name: 'Dayanara Pope', count: 1},
    {id: 4, name: 'Denver Laws Harris', count: 5},
  ];

  return (
    <View>
      <Stack spacing={20} style={styles.container}>
        <TextView isUpperCase style={styles.title}>
          Messages
        </TextView>

        <View>
          <TextView>See all</TextView>
          <Stack spacing={14}>
            {arr.map(item => {
              return (
                <HStack justify="between">
                  <HStack spacing={15} items="center">
                    <Image
                      style={styles.imageView as ImageStyle}
                      //    @ts-ignore
                      source={ImageSource.sampleUsers[`user${item.id}`]}
                    />
                    <TextView>{item.name}</TextView>
                  </HStack>
                  <Stack style={styles.counter} justify="center" items="center">
                    <TextView style={styles.counterTextStyles}>
                      {item.count}
                    </TextView>
                  </Stack>
                </HStack>
              );
            })}
          </Stack>

          <LinearGradient
            colors={[`${theme.palette.white}00`, `${theme.palette.white}`]}
            style={styles.linearGradient}
          />
        </View>
      </Stack>
    </View>
  );
};

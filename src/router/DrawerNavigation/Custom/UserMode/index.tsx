import {TextView} from '@common/components/TextView';
import React from 'react';
import {Stack} from 'react-native-flex-layout';
import {useStyles} from './index.styles';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native';
import {themeStyles} from '@common/theme';

export const UserMode: React.FC = () => {
  const {styles, cx} = useStyles({});
  const {palette} = themeStyles.useTheme();
  const modeSharedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: modeSharedValue.value}],
    };
  });

  const firstButtonStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        modeSharedValue.value,
        [0, 150],
        [palette.white, palette.black],
      ),
    };
  });
  const secondButtonStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        modeSharedValue.value,
        [0, 150],
        [palette.black, palette.white],
      ),
    };
  });
  return (
    <Stack style={styles.container}>
      <Stack style={styles.modeContainer}></Stack>
      <Animated.View
        style={[styles.floatingButton, animatedStyle]}></Animated.View>

      <Stack justify="between" direction="row" style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            modeSharedValue.value = withTiming(0, {
              easing: Easing.elastic(0.8),
              duration: 300,
            });
          }}>
          <Stack
            justify="center"
            style={cx(styles.firstButton, styles.commonButtonBlockStyles)}>
            <TextView style={styles.activeTitle} variant="semiBold">
              <Animated.Text style={firstButtonStyles}>Personal</Animated.Text>
            </TextView>
          </Stack>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            modeSharedValue.value = withTiming(150, {
              easing: Easing.elastic(0.8),
              duration: 300,
            });
          }}>
          <Stack
            justify="center"
            style={cx(styles.secondButton, styles.commonButtonBlockStyles)}>
            <TextView style={styles.activeTitle} variant="semiBold">
              <Animated.Text style={secondButtonStyles}>Business</Animated.Text>
            </TextView>
          </Stack>
        </TouchableOpacity>
      </Stack>
    </Stack>
  );
};

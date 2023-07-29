import {TextView} from '@common/components/TextView';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 80; // Define the height of your header

const Mail = () => {
  const arr = new Array(20).fill({});

  const scrollY = useSharedValue(0);
  const prevScrollY = useRef(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    const currentScrollY = event.contentOffset.y;
    const diff = currentScrollY - prevScrollY.current;
    console.log('diff-- > ', diff);

    if (diff < 0 || currentScrollY <= 0) {
      scrollY.value = withSpring(0, {
        damping: 200, // Lower damping for faster response
        stiffness: 100, // Higher stiffness for a quicker animation
      }); // Bring back the header
    } else {
      scrollY.value = withSpring(-HEADER_HEIGHT, {
        damping: 20, // Adjust the damping for a smoother or bouncier motion
        stiffness: 150, // Adjust the stiffness for a more or less rigid spring
      });
    }
    prevScrollY.current = currentScrollY;
  });

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: scrollY}]}]}>
        {/* <View style={{width: '100%', backgroundColor: 'white', padding: 20}}> */}
        <TextView style={{fontSize: 20}} variant="bold">
          Header
        </TextView>
        {/* </View> */}
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <KeyboardAwareScrollView bounces={false} overScrollMode={'never'}>
          {arr.map(item => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  margin: 20,
                  backgroundColor: 'skyblue',
                }}
              />
            );
          })}
        </KeyboardAwareScrollView>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2, // Ensure the header appears above other content
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {Mail};

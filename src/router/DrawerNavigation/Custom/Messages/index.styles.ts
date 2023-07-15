import {themeStyles} from '@common/theme';
import {ImageStyle} from 'react-native';

export const useStyles = themeStyles.create(({theme: {palette}}) => ({
  // Styles of the specified selectors can be created using a css object, ..

  container: {
    paddingHorizontal: 20,
  },
  linearGradient: {
    height: 120,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 99,
  },
  title: {
    fontSize: 12,
    letterSpacing: 5,
  },
  imageView: {
    width: 30,
    height: 30,
  } as ImageStyle,
  counter: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: palette.grey004,
  },
  counterTextStyles: {
    fontSize: 12,
  },
}));

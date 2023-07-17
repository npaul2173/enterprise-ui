import {themeStyles} from '@common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 20,
  },
  titleTextStyle: {
    fontSize: 12,
    letterSpacing: 5,
  },
}));

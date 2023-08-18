import {themeStyles} from '@common/theme';
import {DRAWER_WIDTH} from '..';

export const useStyles = themeStyles.create(() => ({
  // Styles of the specified selectors can be created using a css object, ..
  root: {
    height: '100%',
    width: DRAWER_WIDTH,
  },
}));

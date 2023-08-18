import {themeStyles} from '@common/theme';
import {ImageStyle} from 'react-native';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  container: {
    height: 30,
    borderRadius: 4,
    backgroundColor: theme.palette.seaGreen,
    paddingHorizontal: 10,
    maxWidth: 80,
  },
  statusText: {
    fontSize: 12,
    color: theme.palette.white,
  },
}));

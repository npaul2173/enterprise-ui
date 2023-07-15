import {themeStyles} from '@common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  root: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor: theme.component.backgroundColor,
  },
}));

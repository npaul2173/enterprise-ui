import {themeStyles} from '../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    flex: 1,
    backgroundColor: theme.component.backgroundColor,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  headerText: {fontSize: 20, padding: 15, paddingLeft: 45},
}));

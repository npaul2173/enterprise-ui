import {themeStyles} from '../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    flex: 1,
    backgroundColor: theme.component.backgroundColor,
  },
  meetingsContainer: {
    paddingHorizontal: 20,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  todayHeaderContainer: {
    padding: 15,
    paddingLeft: 30,
  },
  headerText: {fontSize: 25, letterSpacing: -1},
  subHeaderText: {
    fontSize: 14,
    marginBottom: 5,
    letterSpacing: -1,
    color: theme.palette.grey003,
  },
}));

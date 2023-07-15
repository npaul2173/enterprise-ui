import {themeStyles} from '../../../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    backgroundColor: theme.palette.white,
    width: 300,
    padding: 30,
    borderRadius: theme.borderRadius.default,
  },
  companyTitle: {
    fontSize: 16,
    color: theme.palette.grey003,
  },
  headerText: {
    fontSize: 20,
  },
  separator: {
    width: 20,
  },
  section2: {
    marginTop: 10,
  },
  section3: {
    marginTop: 10,
    flexDirection: 'row',
  },
  section3Text1: {
    letterSpacing: 1.85,
    fontSize: 10,
    color: theme.palette.grey003,
    marginRight: 5,
  },
  reportView: {
    color: theme.palette.grey003,
    letterSpacing: 1.85,
    fontSize: 10,
    marginRight: 10,
  },
  reportSection: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
}));

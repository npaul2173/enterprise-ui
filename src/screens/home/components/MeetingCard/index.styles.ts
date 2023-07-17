import {themeStyles} from '../../../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    width: 170,
    height: 170,
    padding: 20,
    borderRadius: theme.borderRadius.default,
  },
  time: {
    fontSize: 10,
  },
  title: {
    fontSize: 12,
    letterSpacing: -0.51,
  },
  personaText: {
    color: theme.palette.seaGreen,
  },
  detailsContainer: {
    marginTop: 30,
  },
  personaContainer: {
    borderRadius: 5,
    height: 40,
    width: 40,
    borderWidth: 1,
  },
}));

import {themeStyles} from '../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  root: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    // backgroundColor: '#efefef',
    backgroundColor: theme.component.backgroundColor,
  },
  title: {
    fontSize: 40,
    color: 'black',
    letterSpacing: -2,
    fontFamily: 'Inter-Bold',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: theme.palette.primaryColor,
  },
}));

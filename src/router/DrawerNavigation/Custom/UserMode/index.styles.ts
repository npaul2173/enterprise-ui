import {themeStyles} from '@common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  container: {
    paddingHorizontal: 10,
  },
  floatingButton: {
    width: 150,
    position: 'absolute',
    top: 0,
    left: 10,
    // zIndex: 10,
    height: 45,
    borderRadius: 5,

    backgroundColor: theme.palette.primary,
  },

  modeContainer: {
    position: 'absolute',
    width: '100%',
    // zIndex: 999,
    top: 0,
    left: 10,
    // backgroundColor: 'red',
    borderColor: theme.palette.grey003,
    borderWidth: 1,
    height: 45,
    borderRadius: 3,
  },
  activeTitle: {
    color: theme.palette.white,
  },
  inActiveTitle: {
    color: theme.palette.black,
  },
  buttonsContainer: {
    height: 45,
  },
  commonButtonBlockStyles: {
    height: 45,

    // backgroundColor: 'red',
  },
  firstButton: {
    paddingLeft: 40,
  },

  secondButton: {
    paddingRight: 40,
  },
}));

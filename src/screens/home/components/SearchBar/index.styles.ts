import {themeStyles} from '@common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff80',
  },
  placeholder: {letterSpacing: -0.2, color: theme.palette.grey002},
}));

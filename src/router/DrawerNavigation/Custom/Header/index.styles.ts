import {ImageStyle} from 'react-native';
import {themeStyles} from '../../../../common/theme';

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  container: {
    height: 120,
    width: '100%',
    paddingLeft: 20,
  },
  nameTextStyle: {
    fontSize: 20,
    width: 200,
  },
  designationTextStyle: {
    fontSize: 14,
    width: 200,
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
  } as ImageStyle,
}));

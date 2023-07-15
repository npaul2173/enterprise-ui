import {themeStyles} from '@common/theme';
import React from 'react';
import {Pressable, View} from 'react-native';

interface SlideButtonProps {
  onPress?: () => void;
}
export const SlideButton: React.FC<SlideButtonProps> = ({onPress}) => {
  const styles = useStyles({});
  return <Pressable style={styles.styles.container} onPress={onPress} />;
};

export const useStyles = themeStyles.create(({theme}) => ({
  // Styles of the specified selectors can be created using a css object, ..
  container: {
    position: 'absolute',
    backgroundColor: 'wheat',
    borderRadius: 25,
    height: 50,
    width: 50,
    zIndex: 999,
    right: -20,
    top: 30,
  },
}));

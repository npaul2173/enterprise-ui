import {themeStyles} from '@common/theme';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface ContainerProps {
  onRetry?: () => void;
  children: React.ReactNode;
  noSpacing?: boolean;
  onPress?: () => void;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
  const {styles, theme} = useStyles({});

  return (
    <>
      <StatusBar
        backgroundColor={theme.palette.white}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[`${theme.palette.white}`, `${theme.palette.white}00`]}
          style={styles.fadeWhite}
        />
        <>{children}</>
      </SafeAreaView>
    </>
  );
};

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    flex: 1,
    backgroundColor: theme.component.backgroundColor,
  },
  fadeWhite: {
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -10,
  },
}));

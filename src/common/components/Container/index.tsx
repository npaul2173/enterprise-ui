import {themeStyles} from '@common/theme';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
interface ContainerProps {
  onRetry?: () => void;
  children: React.ReactNode;
  noSpacing?: boolean;
  onPress?: () => void;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
  const {styles} = useStyles({});

  return (
    <>
      <StatusBar backgroundColor={'#F5F5F9'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
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
  titleTextStyle: {
    fontSize: 12,
    letterSpacing: 5,
  },
}));

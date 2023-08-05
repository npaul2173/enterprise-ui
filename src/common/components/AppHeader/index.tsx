import React, {PureComponent} from 'react';
import {Pressable, View} from 'react-native';
import {TextView} from '../TextView';
import {useStyles} from './index.styles';
import {IconView} from '../Icon';
import {Stack} from 'react-native-flex-layout';
import {NavigationTypeEnumPremixValue} from './enum';
import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

interface AppHeaderProps {
  navType: keyof NavigationTypeEnumPremixValue;
}

export const AppHeader: React.FC<AppHeaderProps> = () => {
  const {styles} = useStyles({});
  const navigation = useNavigation();
  const LeftSection: React.FC = () => {
    return (
      <Ripple
        rippleContainerBorderRadius={20}
        style={{height: 40, width: 40}}
        onPress={() => {
          // @ts-ignore
          navigation.openDrawer();
        }}>
        <IconView name="menu" size={10} />
      </Ripple>
      // <Pressable
      //   onPress={() => {
      //     // @ts-ignore
      //     navigation.openDrawer();
      //   }}>

      // </Pressable>
    );
  };
  const RightSection: React.FC = () => {
    return <IconView name="circleMenu" />;
  };

  return (
    <Stack justify="between" direction="row" style={styles.container}>
      <LeftSection />
      <TextView isUpperCase style={styles.titleTextStyle}>
        Enterprise
      </TextView>
      <RightSection />
    </Stack>
  );
};

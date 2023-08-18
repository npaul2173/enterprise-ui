import {IconView} from '@common/components/Icon';
import {TextView} from '@common/components/TextView';
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Stack} from 'react-native-flex-layout';
import {useStyles} from './index.styles';
import {themeStyles} from '@common/theme';

export const UserStatusOption: React.FC = () => {
  const {styles} = useStyles({});
  const {palette} = themeStyles.useTheme();
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Stack
        style={styles.container}
        direction="row"
        items="center"
        justify="center"
        spacing={10}>
        <TextView variant="bold" style={styles.statusText}>
          Online
        </TextView>
        <IconView name={'dropdownBold'} size={8} color={palette.white} />
      </Stack>
    </TouchableOpacity>
  );
};

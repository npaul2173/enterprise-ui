import {IconView} from '@common/components/Icon';
import {TextView} from '@common/components/TextView';
import {useCommonStyles} from '@common/style/commonStyles';
import {themeStyles} from '@common/theme';
import React from 'react';
import {Stack} from 'react-native-flex-layout';
import {useStyles} from './index.styles';

export const SearchBar = () => {
  const {styles, cx} = useStyles({});
  const theme = themeStyles.useTheme();
  const {styles: commonStyles} = useCommonStyles({});

  return (
    <Stack
      items="center"
      justify="between"
      direction="row"
      style={cx(styles.container)}>
      <TextView style={cx(styles.placeholder)}>
        Search Projects, Tasks, and More
      </TextView>
      <IconView size={18} name="search" color={theme.palette.grey002} />
    </Stack>
  );
};

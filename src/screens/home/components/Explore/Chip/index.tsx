import {IconView} from '@common/components/Icon';
import {TextView} from '@common/components/TextView';
import {themeStyles} from '@common/theme';
import React from 'react';
import {Text} from 'react-native';
import {Stack} from 'react-native-flex-layout';

interface ChipProps {
  title: string;
}

export const Chip: React.FC<ChipProps> = ({title}) => {
  const {styles} = useStyles({});

  return (
    <Stack wrap>
      <Stack
        style={styles.container}
        direction="row"
        items="center"
        spacing={10}>
        <TextView numberOfLines={1} style={styles.title}>
          {title}
        </TextView>
        <IconView name="Cancel" size={10} />
      </Stack>
    </Stack>
  );
};

export const useStyles = themeStyles.create(({theme}) => ({
  container: {
    minHeight: 37,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    maxWidth: 140,
    backgroundColor: `${theme.palette.white}99`,
  },
  title: {
    fontSize: 14,
    color: theme.palette.grey001,
  },
}));

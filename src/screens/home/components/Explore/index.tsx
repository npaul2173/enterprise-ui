import React, {PureComponent} from 'react';
import {Stack} from 'react-native-flex-layout';
import {SearchBar} from './SearchBar';
import {Chip} from './Chip';
import {ScrollView, View} from 'react-native';
import {themeStyles} from '@common/theme';

const recentList = [
  {title: 'Events'},
  {title: 'Create work item'},
  {title: 'Documents folder'},
  {title: 'Ace Service'},
];

export const Explore: React.FC = () => {
  const {styles} = useStyles({});
  return (
    <Stack spacing={10} divider={<View />}>
      <Stack style={styles.searchbox}>
        <SearchBar />
      </Stack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Stack
          style={styles.recentInnerContainer}
          direction="row"
          spacing={10}
          divider={<View />}>
          {recentList.map(item => {
            return <Chip title={item.title} />;
          })}
        </Stack>
      </ScrollView>
    </Stack>
  );
};

export const useStyles = themeStyles.create(({theme}) => ({
  searchbox: {
    paddingHorizontal: 20,
  },
  recentInnerContainer: {
    paddingHorizontal: 20,
  },
}));

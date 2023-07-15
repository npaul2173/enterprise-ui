import React from 'react';
import {View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {IconView} from '../../../../common/components/Icon';
import {TextView} from '../../../../common/components/TextView';
import {useCommonStyles} from '../../../../common/style/commonStyles';
import {useStyles} from './index.styles';
import {HStack, Stack} from 'react-native-flex-layout';

interface MeetingCardProps {
  index: number;
}
export const MeetingCard: React.FC = () => {
  const {styles, cx, theme} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});

  return (
    <Shadow
      distance={10}
      startColor={'#00000005'}
      endColor={'#00000000'}
      paintInside
      offset={[0, 0]}>
      <View style={styles.container}>
        <HStack justify="between">
          <Stack center style={styles.personaContainer}>
            <TextView style={styles.personaText}>BP</TextView>
          </Stack>
          <IconView name="optionMenu" color={theme.palette.black} size={12} />
        </HStack>

        <Stack style={styles.detailsContainer}>
          <TextView style={styles.time}>{`1:00 pm`}</TextView>
          <TextView variant={'semiBold'} style={styles.title}>
            {`Create work\nestimation for client`}
          </TextView>
        </Stack>
      </View>
    </Shadow>
  );
};

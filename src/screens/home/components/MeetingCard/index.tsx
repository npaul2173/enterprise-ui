import {IconView} from '@common/components/Icon';
import {TextView} from '@common/components/TextView';
import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {HStack, Stack} from 'react-native-flex-layout';
import {Shadow} from 'react-native-shadow-2';
import {useStyles} from './index.styles';

interface MeetingCardProps {
  isCurrent?: boolean;
}
export const MeetingCard: React.FC<MeetingCardProps> = ({isCurrent}) => {
  const {
    styles,
    cx,
    theme: {palette},
  } = useStyles({});

  const backgroundColor = {
    backgroundColor: !isCurrent ? palette.white : palette.primary,
  } as ViewStyle;
  const personaStyles = {
    borderColor: isCurrent ? palette.white : palette.seaGreen,
  } as ViewStyle;
  const personaTextStyles = {
    color: isCurrent ? palette.white : palette.seaGreen,
  } as TextStyle;

  const timeStyles = {
    color: isCurrent ? palette.primaryLight : palette.grey002,
  } as TextStyle;

  const titleStyles = {
    color: isCurrent ? palette.white : palette.black,
  } as TextStyle;

  const optionIconColor = isCurrent ? palette.white : palette.black;
  return (
    <Shadow
      distance={10}
      startColor={'#00000005'}
      endColor={'#00000000'}
      paintInside
      offset={[0, 0]}>
      <Stack justify="between" style={[styles.container, backgroundColor]}>
        <HStack justify="between">
          <Stack center style={[styles.personaContainer, personaStyles]}>
            <TextView style={[styles.personaText, personaTextStyles]}>
              BP
            </TextView>
          </Stack>
          <IconView name="optionMenu" color={optionIconColor} size={12} />
        </HStack>

        <Stack style={styles.detailsContainer}>
          <TextView style={[styles.time, timeStyles]}>{`1:00 pm`}</TextView>
          <TextView variant={'semiBold'} style={[styles.title, titleStyles]}>
            {`Create work\nestimation for client`}
          </TextView>
        </Stack>
      </Stack>
    </Shadow>
  );
};

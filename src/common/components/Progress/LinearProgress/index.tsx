import {themeStyles} from '@common/theme';
import React from 'react';
import * as Progress from 'react-native-progress';

export interface LinearProgressProps extends Progress.DefaultPropTypes {
  total?: number | undefined;
  current?: number | undefined;
}

export const LinearProgress: React.FC<LinearProgressProps> = ({
  total,
  current,
  progress,
  ...props
}) => {
  const progressValue = total && current ? current / total : progress;
  const {palette} = themeStyles.useTheme();
  return (
    <Progress.Bar
      progress={progressValue}
      borderWidth={0}
      unfilledColor={palette.grey004}
      color={palette.seaGreen}
      {...props}
    />
  );
};

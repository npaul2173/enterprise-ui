import React, {PureComponent} from 'react';
import {ViewStyle} from 'react-native';
import {FlexProps, Spacer} from 'react-native-flex-layout';

interface SpacingProps extends FlexProps {
  size?: number;
}
export const Spacing: React.FC<SpacingProps> = ({size, ...props}) => {
  const style: ViewStyle = {
    height: size,
  };
  return <Spacer {...props} style={style} />;
};

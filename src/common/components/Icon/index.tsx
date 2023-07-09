import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import iconsConfig from '../../../assets/fonts/selection.json';
import {IconSetEnum} from './enums';
import {themeStyles} from '../../theme';
const Icon = createIconSetFromIcoMoon(iconsConfig);

interface IconViewProps {
  name: IconSetEnum;
  size?: number;
  color?: string;
}
export const IconView: React.FC<IconViewProps> = ({name, size, color}) => {
  const theme = themeStyles.useTheme();

  return (
    <>
      <Icon
        name={name ? name : IconSetEnum.circleMenu}
        size={size ? size : 20}
        color={color ? color : theme.palette.black}
      />
    </>
  );
};

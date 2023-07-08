import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import iconsConfig from '../../../assets/fonts/selection.json';
import {IconSetEnum} from './enums';
const Icon = createIconSetFromIcoMoon(iconsConfig);

interface IconViewProps {
  name: IconSetEnum;
  size?: number;
}
export const IconView: React.FC<IconViewProps> = ({name, size}) => {
  return (
    <>
      <Icon
        name={name ? name : IconSetEnum.circleMenu}
        size={size ? size : 20}
      />
    </>
  );
};

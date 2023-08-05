import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import iconsConfig from '../../../assets/fonts/selection.json';
import {IconSetEnum} from './enums';
import {themeStyles} from '@common/theme';
import FluentIcons from './Fluent';

const Icon = createIconSetFromIcoMoon(iconsConfig);

type IconSetEnumValue = keyof typeof IconSetEnum;
type IconSetEnumWithoutPrefix = `${Extract<IconSetEnumValue, string>}`;
type IconSetEnumWithoutPrefixEnum = {
  [K in IconSetEnumValue as IconSetEnumWithoutPrefix]: IconSetEnumWithoutPrefix;
};

interface IconViewProps {
  name: keyof IconSetEnumWithoutPrefixEnum;
  size?: number;
  color?: string;
}
const IconView: React.FC<IconViewProps> = ({name, size, color}) => {
  const theme = themeStyles.useTheme();

  return (
    <>
      <Icon
        name={name ? IconSetEnum[name] : IconSetEnum['circleMenu']}
        size={size ? size : 20}
        color={color ? color : theme.palette.black}
      />
    </>
  );
};

export {FluentIcons as FluentIconsView, IconView};

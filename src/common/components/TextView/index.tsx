import React, {PureComponent} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {TextProps} from 'react-native';
import {FontFamilyEnum} from './enum';

type FontFamilyValue = keyof typeof FontFamilyEnum;
type FontFamilyWithoutPrefix = `${Extract<FontFamilyValue, string>}`;
type FontFamilyWithoutPrefixEnum = {
  [K in FontFamilyValue as FontFamilyWithoutPrefix]: FontFamilyWithoutPrefix;
};

export type TextViewProps = TextProps & {
  variant?: keyof FontFamilyWithoutPrefixEnum;
  isUpperCase?: boolean;
};

export const TextView: React.FC<TextViewProps> = ({
  style,
  children,
  isUpperCase,
  variant,
  ...props
}) => {
  const textStyles: StyleProp<TextStyle> = [
    style ? style : {},
    {fontFamily: variant ? FontFamilyEnum[variant] : FontFamilyEnum.regular},
  ];

  const renderedText =
    typeof children === 'string' && isUpperCase
      ? children.toUpperCase()
      : children;

  // RETURN
  return (
    <Text {...props} style={textStyles}>
      {renderedText}
    </Text>
  );
};

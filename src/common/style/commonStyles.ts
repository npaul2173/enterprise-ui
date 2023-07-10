import React, {PureComponent} from 'react';
import {themeStyles} from '../theme';

export const useCommonStyles = themeStyles.create(({theme}) => ({
  blackText: {
    color: theme.palette.black,
  },
}));

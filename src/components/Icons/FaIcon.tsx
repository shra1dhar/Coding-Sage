import React from 'react';
import { IconSizes } from './constants';
import { IconProps } from 'react-native-vector-icons/Icon';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

FontAwesomeIcon.loadFont();

export const FaIcon = ({ size, name, color }: IconProps) => (
  <FontAwesomeIcon name={name} size={IconSizes[size || 'medium']} color={color} />
);

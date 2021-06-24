import React, { FC } from 'react';
import { View } from 'react-native';
import { Fonts } from '../../global/Fonts/Size';
interface Props {
  opacity?: number;
  size?: number;
  color?: string;
}

const Circle: FC<Props> = props => {
  const { opacity = 1, size = Fonts.xs, color = '#eee' } = props;
  return <View style={{ backgroundColor: color, opacity, width: size, height: size, borderRadius: 50, margin: 1 }} />;
};

export default Circle;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const NewMexico: React.FC<SvgProps> = ({ width = 62, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 62 80" {...props}>
    <Path d="M26.48 59.6l-0.8-1.84h32.080l-0.16-52.4h-25.36l-25.52-0.96-2.72 59.68 7.36 0.32 0.32-4.8 15.44 0.56z" fill={color} />
  </Svg>
);

export default NewMexico;

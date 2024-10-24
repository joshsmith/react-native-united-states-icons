import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Kansas: React.FC<SvgProps> = ({ width = 98, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 98 80" {...props}>
    <Path d="M93.76 56.8l-1.040-32.32-2.72-1.12-0.96-2.48-2.32-2.24 1.44-2.96 1.12-0.080-1.12-2.48-1.44 0.64-2.56-2.080-38.96 0.48-39.2-1.040-2 45.44 45.040 0.96z" fill={color} />
  </Svg>
);

export default Kansas;

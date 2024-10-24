import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Arizona: React.FC<SvgProps> = ({ width = 59, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 59 80" {...props}>
    <Path d="M54.4 14.48v-9.28l-41.68-0.56-0.48 8.24-0.64 1.68-0.96 0.16-1.040-1.12-1.6-0.4-1.36 0.4-0.32 0.96 0.64 1.52-0.32 3.76 0.72 3.2-0.64 0.8 0.24 2.64 1.52 2.56 0.32 1.84 2.16 1.92-2.4 1.6-1.2 1.6 0.24 2.56-0.48 1.68-1.040 1.12-0.8 0.4v0.8l0.32 1.36-0.080 1.2 1.6 0.72 0.24 1.6-0.72 1.36h-1.6l-1.040 2.32 32.96 12.96 18 0.080z" fill={color} />
  </Svg>
);

export default Arizona;

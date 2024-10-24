import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Pennsylvania: React.FC<SvgProps> = ({ width = 78, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 78 80" {...props}>
    <Path d="M73.52 27.28l-0.48-1.36-2.96-0.88-0.88-1.44-0.48-3.68-1.84-0.8-0.24-0.88-0.96-0.8h-51.76v-4.16l-4.24 2.16 0.56-0.8-1.68 1.28-3.52 1.52-1.040 35.6 57.44 0.24 0.8-1.36 1.28-0.64 2 0.4 3.52-1.44 0.24-1.12 4.48-3.36-3.040-3.68h-0.64l-0.64-2.24-1.36-0.16-0.080-1.92v-0.96l1.040-0.64 0.48-1.2-0.96-1.92 2.16-2.16 1.84-3.2z" fill={color} />
  </Svg>
);

export default Pennsylvania;

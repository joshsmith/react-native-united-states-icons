import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Nebraska: React.FC<SvgProps> = ({ width = 90, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 90 80" {...props}>
    <Path d="M73.44 21.44l-1.2-0.4-0.64-1.6-3.92-1.12-1.52-1.28-5.12 0.4-1.44 1.040-4.48-2.4h-25.28l-24.72-0.88-1.12 24.4 18.64 0.8-0.32 12.16 32 0.24 31.44-1.12-1.040-0.56-0.56-2.48-1.68-0.64-0.64-2.48-1.6-2.48-0.24-5.68-0.64-0.48 0.48-1.040-0.88-0.24 0.24-1.36-0.8-0.48 0.080-0.64-0.8-0.16v-2.96l-2.72-4.56-0.64-3.84z" fill={color} />
  </Svg>
);

export default Nebraska;

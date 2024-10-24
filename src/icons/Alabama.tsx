import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Alabama: React.FC<SvgProps> = ({ width = 47, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 47 80" {...props}>
    <Path d="M8.080 65.36l-0.4-0.24-2.16 0.24h2.56zM35.68 4.56l-27.52-0.4 0.96 1.36-5.12 38.72 0.32 19.36 1.2-0.080 1.92 1.040 1.44-5.28 1.040 1.84-0.24 1.36 0.24 1.040h0.96l0.72 1.6-3.040 0.64 4.24-0.4 1.12-0.64h-0.4v-0.32l0.56 0.16 1.68-1.52-0.4-1.36 0.4-1.52-2.48-2.56 0.4-1.6 28.56 0.16-0.080-1.2-1.040-1.28 0.72-4.64-1.2-3.76 1.2-4.24 1.52-1.36-1.12-0.96 0.080-1.36-1.28-2.56-1.12-3.6z" fill={color} />
  </Svg>
);

export default Alabama;

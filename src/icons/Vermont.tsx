import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Vermont: React.FC<SvgProps> = ({ width = 46, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 46 80" {...props}>
    <Path d="M41.76 12.4v-0.56l-1.84-4 0.48-1.76 2-2.64-0.48-2.16 0.56-1.12-36.4 0.32 0.16 1.76-0.88 2.4 0.88 1.92-0.96 4.56 1.68 4.88-0.88 2.48 0.16 3.28-1.12 1.28-1.12 3.84 1.36 7.84-1.36 4.8 0.24 1.12 1.28-1.52h0.88l1.28 2-1.040 20.72 0.72 1.6 16.080 0.72-1.52-2.88-0.24-1.28 0.64-2.72 0.96-0.96 0.88-6.8 0.64-1.36 0.32-7.040 1.040-1.6 0.56-3.040 1.84-1.92 0.72-2.72 1.6-2.56-0.4-0.64 1.36-3.040 0.16-4.8 1.28-1.76 2.4-0.16 3.6-2.8 1.52-2 0.16-1.44z" fill={color} />
  </Svg>
);

export default Vermont;

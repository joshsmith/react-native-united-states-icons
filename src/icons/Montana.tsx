import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Montana: React.FC<SvgProps> = ({ width = 80, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" {...props}>
    <Path d="M86.72 41.84l-2.32-30.64-39.6 1.2-40-1.84-0.8 10 2 3.2-0.080 1.44 0.4 0.8-0.72 0.32 2.64 2.080 3.6 5.92 0.64-0.48 0.64 0.96h1.76l-1.76 5.12 0.64 2.56-1.12 1.28-0.16 1.92 1.6 1.040 2.4-2 1.36 0.96 0.32 2.96 1.84 3.12v1.6l1.92 1.12 1.12 3.12 1.12 0.96 0.48-1.28 2.72 0.4 1.28-0.96 5.52 0.32-0.32-0.96 0.96-1.12 2.24 2.72 0.080-5.12h25.44l24.8-1.12z" fill={color} />
  </Svg>
);

export default Montana;

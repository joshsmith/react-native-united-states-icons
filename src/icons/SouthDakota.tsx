import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const SouthDakota: React.FC<SvgProps> = ({ width = 73, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 73 80" {...props}>
    <Path d="M66.72 15.2l-30.24 0.56-30.56-0.88-1.92 34.24 23.6 0.72h24.080l4.080 2.48 1.36-1.2 4.96-0.16 1.36 1.040 3.6 1.28 0.8 1.36 1.28 0.24-0.64-1.6-0.88-0.96 1.2-4.4-0.16-1.040-0.8-0.080 0.4-1.84-0.64-1.28 1.2-0.080-0.96-20.96-0.96-1.12-1.28-0.24-1.2-2.16 1.68-1.92z" />
  </Svg>
);

export default SouthDakota;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const NorthDakota: React.FC<SvgProps> = ({ width = 89, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 89 80" {...props}>
    <Path d="M84.48 56.32l-0.72-5.76-2.32-4.88 0.16-4.4-0.8-1.040-0.8-9.36-3.040-8.080-0.64-6.16 0.4-1.68-1.36-5.36-34.96 0.8-34.32-0.96-2.080 47.040 40.4 0.96z" />
  </Svg>
);

export default NorthDakota;

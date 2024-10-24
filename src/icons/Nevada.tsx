import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Nevada: React.FC<SvgProps> = ({ width = 50, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 50 80" {...props}>
    <Path d="M45.84 55.84l-0.8-51.84-19.92 0.16-19.76-0.88-1.36 26.88 37.92 36.32 0.32-1.84-0.56-2.8-0.72-5.12 1.28-0.48h1.44l1.28 1.040 0.48-0.16z" />
  </Svg>
);

export default Nevada;

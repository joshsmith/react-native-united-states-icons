import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Wyoming: React.FC<SvgProps> = ({ width = 84, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 84 80" {...props}>
    <Path d="M80.16 35.12l-0.4-28.88-36.64-0.32-35.2-1.84-3.92 57.84 37.36 1.84 39.12 0.32z" />
  </Svg>
);

export default Wyoming;

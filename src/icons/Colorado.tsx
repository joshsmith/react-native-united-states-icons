import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Colorado: React.FC<SvgProps> = ({ width = 80, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 80 80" {...props}>
    <Path d="M85.28 19.040l-0.4-14.72-39.68 0.64-38.88-0.8-2.32 59.12 42.72 0.88 40.64-0.88z" fill={color} />
  </Svg>
);

export default Colorado;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const NewHampshire: React.FC<SvgProps> = ({ width = 41, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 41 80" {...props}>
    <Path d="M30.32 1.36l-0.24-1.28-1.28 1.44-2.64-1.2-2.24 1.6 0.64 0.56-2.16 5.12 0.4 2.56-2.16 3.84 1.52 3.76-0.8 0.4-0.24 1.36-1.28 1.6-3.040 2.56-2.32 0.16-1.040 1.44-0.24 4.4-1.12 2.4 0.32 0.72-1.52 2.24-0.48 2.4-1.68 1.6-0.48 2.72-1.2 1.28-0.24 6.4-0.64 0.96-0.64 6.16-0.8 0.88-0.72 2.24 0.080 1.12 1.6 2.56 21.040 0.72 1.84-1.28 1.040-1.52h1.28l2.64-1.76 2.080 0.16 1.76-4.16v-0.4l-0.88 0.16 0.24-0.56-1.52-1.92v-2.080l-2.8-3.68 0.48-4.16z" fill={color} />
  </Svg>
);

export default NewHampshire;

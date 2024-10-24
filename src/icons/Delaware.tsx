import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Delaware: React.FC<SvgProps> = ({ width = 34, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 34 80" {...props}>
    <Path d="M16.32 3.84l-2.24-1.36-3.76-0.080-3.44 1.52-2.88 3.68 2.48 56.4h21.92l0.24-0.32 0.96 0.32-0.48-7.2-1.2 2.080-1.040-0.96-2.96 0.88 0.72-0.88h-0.72l0.56-0.64 2.48-0.88 0.72-0.56-1.76-0.96h1.040l-0.56-1.76h1.68l0.48 0.56 0.080 2.16 0.4-1.68-0.4-4.72-0.24-0.72-2.96-0.24-4.96-5.36-0.24-2.72-1.76-3.2-0.88-0.56-0.48-4.24 0.16-3.84-0.96-2.56-1.040-1.44-1.12-0.24-3.2-6.16 0.88-2.48-0.24-1.68-1.44-1.44 0.48-1.84 1.52-0.72 2-2.88 0.48-1.76z" fill={color} />
  </Svg>
);

export default Delaware;

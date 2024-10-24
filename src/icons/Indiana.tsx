import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Indiana: React.FC<SvgProps> = ({ width = 51, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 51 80" {...props}>
    <Path d="M46.24 2.16v-0.8l-25.040-0.080-2.4 1.28-2.96 0.8-1.6-0.32-0.080-0.88-0.4 0.4-0.88-0.88-0.88 38.64-1.12 0.56 0.16 1.92-0.8 1.44 1.6 2.64-0.24 1.36 0.48 2-2.080 2.96 0.080 1.28-1.52 0.48 0.080 0.56-1.12 2.080-0.24-0.32-0.48 0.64-0.48-0.32-0.72 1.12 0.72 1.040-1.2 1.040 0.8 0.32-0.88 0.4v2.4l-1.040 0.24 1.040 1.040-0.88 0.32 1.84 0.48 0.56-0.72-0.24-1.12 0.24-0.4 1.44 0.56 1.6-0.16v1.12h0.64l0.48-0.96-0.080-1.28 0.48 0.88 1.92-0.4 3.36 1.76 0.48 0.8 1.36-2.16 2.56-1.2 0.48 1.2 1.6 0.4-0.080 0.48 0.4 0.4 0.48-1.040 0.88-0.32 0.080-1.84 0.8-0.4-0.080-1.28 0.48 0.72 1.28-0.8-0.88-0.64 1.36 0.56 0.32 1.52 2.72 1.76 1.52-1.12 0.32-2.48 1.040-1.76 0.8 0.32 1.44-0.72 0.8-2.4 0.96-0.16 1.28-1.52-0.48-2.64 2.48-0.24 1.040 0.64 3.040-1.68h1.76l0.16-1.52-1.12-0.32 0.72-1.12-0.72-1.36 0.72-0.56z" fill={color} />
  </Svg>
);

export default Indiana;

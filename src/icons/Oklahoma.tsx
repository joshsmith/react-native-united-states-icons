import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Oklahoma: React.FC<SvgProps> = ({ width = 90, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 90 80" {...props}>
    <Path d="M83.52 21.040l-0.16-5.92-39.36 0.56-39.68-1.2-0.32 5.84 28.32 1.040-0.32 22.56h0.96l2.16 2.4 2.48 0.16 0.48-1.12 1.68 1.76 0.080 1.040 4.48 1.2 1.28-0.32 0.96 1.040 1.44-0.8h2.4l0.16 1.44 1.28 0.24 0.32 1.52h0.8l2-1.52 2 2.080 2.16-0.96 0.72 2.16 0.64-1.76 1.44-1.040 1.68 1.2 1.52-0.56 0.080 0.56 2.56 1.68 0.56-0.64 3.2-1.6 1.6 0.24 1.68-1.2 1.040 1.040h1.36l1.36-1.2 2.4 1.2 1.12 1.12 3.84 1.2-0.32-20.24z" fill={color} />
  </Svg>
);

export default Oklahoma;

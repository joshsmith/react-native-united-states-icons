import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Connecticut: React.FC<SvgProps> = ({ width = 94, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 94 80" {...props}>
    <Path d="M36.88 4.48l-21.6-0.96-3.12 44.96 2.72 4.64-10.88 6.4 3.36 5.6 2-1.040 0.8 0.8 2.56-1.36 0.32 0.48 0.8-1.6 1.36 0.080 5.68-3.6 2.64-1.36 1.52 0.48 1.44-1.76 0.56 0.32 2-1.36 0.96 1.12 1.28-0.56 3.2-2.48 1.84-0.4 4.32-5.12 0.24 1.76 0.88 1.12h3.44l2.88-0.56 2.24 0.64 1.28-0.8 2.56-0.64 2.8 1.12 0.88-0.32 0.56 0.64 2.4-1.76 3.76 0.56 0.96-0.72-0.8-0.56 0.56-1.28-1.84-2.48 2.16 1.040v2.16l2.56 1.6 2.8-1.68 1.2 0.64 0.4-1.6 3.68 0.88 1.12-2.48 2.080 2.080 3.2-1.52h3.52l1.12 0.56-0.64 0.96 1.36-0.48 0.64-4 1.040-1.36 0.4-6.4-0.64-29.76-42.32-0.16-0.080 1.28-1.84 0.16-0.24-1.44z" />
  </Svg>
);

export default Connecticut;
import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const RhodeIsland: React.FC<SvgProps> = ({ width = 48, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 48 80" {...props}>
    <Path d="M18.88 67.040l1.28-0.88-0.96-1.92v-2.32l-0.96-0.32v1.84l-1.36 0.72-0.48 1.6 0.24 0.88 0.64 0.56zM28.64 44.48l1.28-1.36 0.72-4.16v-2.16l-1.12-0.64-0.88 3.68 0.64 0.64-0.96 0.96-0.080 2.56zM37.2 41.76l0.24-7.92 0.8-3.84-2.64 2.24-0.64 2.64-1.6 1.92v1.52l-0.88 1.84 0.88 1.92-2.24 1.28-0.32 1.52 0.48 0.32 1.36-1.2 1.040 0.32 2-2.4 1.76 0.56zM43.52 40.72l-0.32-5.84-0.64-1.040 0.64-3.84-3.52-1.28-0.72 2.32-0.16 3.12 0.88 6-0.32 1.28 0.8 2.48zM29.68 12.88l-0.64-8.88-22.48 0.4 0.080 36.080-0.64 7.28-0.64 0.32-0.72 1.6-0.64 5.28 4.72-0.88 9.28-3.28 2.48-0.16 2.56 0.88 0.56-0.24 3.44-7.28 0.080-1.36-0.080-3.68-1.2-2.64 1.84-2.72 0.32-1.36-0.88-2.8-1.36-0.72 1.36-1.28 1.2 0.4 0.96 0.96 1.28-2.56-0.48-0.88-1.2-1.36v-5.52l1.040 1.92 0.88 3.36 1.12 0.96 1.44 0.8 0.48-2.4 0.8 0.4-1.28 4.72 0.48 1.84 1.76-0.4 1.36-1.12 0.24-2.24-1.6-2.8-2.96-2.32-1.12-1.2 0.32-6.72z" fill={color} />
  </Svg>
);

export default RhodeIsland;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Wisconsin: React.FC<SvgProps> = ({ width = 67, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 67 80" {...props}>
    <Path d="M61.6 24.48l-0.88 1.36-1.2 0.48-0.24 1.68-1.040 1.28-0.080 1.040 0.72 0.96 1.52-1.84-0.080-0.56 1.36-1.84-0.56-0.56 0.56 0.16-0.080-1.44 0.64-0.16-0.16-0.56h-0.48zM62.56 22.8l-0.32 0.96h1.040l0.080-0.88zM25.28 4.080l1.44-0.8-0.16-0.48-2 1.6zM27.040 2l0.24-0.32-1.28 0.48 1.040 0.24v-0.4zM24.48 1.84l-0.64-0.4-0.8 0.4-1.44 1.12-0.96-0.4-1.92 1.44-3.68 1.12-1.68 0.16-1.28-1.28-1.2 1.52h-0.64l-0.16 8.16-0.72 0.64h-0.72l-2.88 1.6-1.76 2.88v1.84l1.28 0.080 0.8 2.080-1.12 1.76v2.32l-0.48 0.72 0.48 2.080-0.72 2.48 2.16 2 1.92 0.4 1.040 1.52 1.84 0.64 1.6 1.44 1.28 2.56 1.52 1.36 2.48 0.72 1.12 1.28 0.4 2.72v3.68l0.4 1.44 1.12 0.8-0.8 2.16 0.8 5.12 0.8 1.2 3.2 0.8 0.48 2h29.6l0.080-4.080-1.36-3.36-0.16-3.36 1.92-6.24-0.4-3.28 0.88-2.32 1.44-1.44-0.64-1.76 1.92-6.72-1.12-1.12-1.28 0.56-1.76 2.64-1.6 1.6-0.64 0.16-0.64-0.48 1.92-4.8 1.92-1.12 0.48-1.6-1.28-1.12 0.4-2.72-2 0.16 0.72-1.68-0.080-2.72-0.88-0.88-2.16-0.56 0.16-1.12-0.96-1.040-3.44-0.96-2.96-0.16-2.72-1.44-9.84-2.64-1.040-2.48-1.52-0.4-0.24-0.72-1.6-0.16-1.76-1.36-0.24 0.88-1.52 0.4 1.76-4zM25.6 2.16v-0.32l-0.48-0.32-0.24 0.32zM23.2 1.44l0.24-0.32-0.24-0.24-0.32 0.4zM28.32 0.88v-0.88l-0.64 1.12z" />
  </Svg>
);

export default Wisconsin;
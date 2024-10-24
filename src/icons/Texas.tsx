import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Texas: React.FC<SvgProps> = ({ width = 82, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 82 80" {...props}>
    <Path d="M56.88 62.56l1.68 4.72-1.44-7.040-0.24 0.080-0.16 0.16zM57.76 58.080l0.32-0.8 0.8-1.68-1.12 1.68-0.88 2.8zM59.6 54l-0.56 1.6 0.8-1.12v-0.56zM60.64 53.28l1.76-0.88-2 0.88-0.56 0.88zM63.040 51.68l-0.4 0.080 0.88-0.4zM71.52 45.2h-0.4v0.24l-1.36 1.44zM40.72-0.72h-15.92l-0.88 29.68-19.92-0.8 0.32 1.12 6.48 6.96 2.4 1.52 2.64 6.64 6.16 4.16 1.36 0.32 1.68-1.84 0.96-3.36 1.6-0.16 0.48-0.64 0.96 0.4 4.16 0.24 0.56 1.36 0.64-0.16 3.2 3.040 2.32 5.52 1.2 1.2 1.44 2.4 1.92 0.96 0.4 3.6 1.44 1.68 0.8 2.64 1.6 0.16 3.92 1.76 3.12 0.16 1.84 1.44 0.16-0.72 1.12-0.56-0.32-0.4-0.24 0.24 0.16-0.56-0.72-0.080-1.68-4.64 0.48-0.48-0.48-0.64 0.64-1.76h-1.92l0.72-0.16-0.72-1.12 0.88 1.12 0.72-0.8-0.32 0.96 0.64-0.24 1.040-2.56-1.68-1.28 2 0.24 0.96-1.84-0.72 0.72-0.24-0.96 0.96-0.56 0.32 0.72 0.32-0.16 0.72-0.72-0.080-1.36 0.8 0.8 1.28-0.72-0.8-0.080 0.4-0.48-0.88-1.28 1.040 0.32-0.16 0.72 0.4-0.4 0.080-0.32-0.32-0.64 0.24 0.080 0.24 0.56 1.040-0.32 0.32 0.32-0.48 0.32 1.28-0.56-1.28 1.36 2.8-1.76-1.2 0.4v-0.080l2.96-1.44 1.44-1.44v-0.8l1.6-1.040-0.56-0.48-0.8-2 0.96 0.24 0.72-0.56-0.32 1.52 2.080-0.4v0.16l-1.44 0.56-0.24 0.96 3.84-2.48 1.12-0.32-0.48-0.88 1.2-1.6-0.48-3.28 1.2-3.12-2.24-3.44v-1.36l-1.36-1.2-0.64-10.32-1.92 0.24-4.8-2.48-0.64 0.72-1.2-0.24-1.12 0.48-0.72-0.24-2.16 1.28-1.76-1.040-0.8 0.32-0.8-0.56-1.2 1.52-0.32-1.28-1.28 0.8-1.28-1.12-1.36 0.64-1.040-1.6-2.16 0.72-0.48-0.72-3.040-0.48-1.28-1.36-0.24 0.32h-1.2l-2.080-1.2z" />
  </Svg>
);

export default Texas;

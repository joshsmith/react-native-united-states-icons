import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Iowa: React.FC<SvgProps> = ({ width = 82, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 82 80" {...props}>
    <Path d="M72 26.16l-0.8-2.32-3.6-0.8-0.8-0.96-1.28-5.76 1.040-2.4-1.28-0.64-0.8-2.24-28.96 0.32-30.72-0.4 0.56 1.92-0.56 2.080 0.96 0.4 0.4 1.36-2.16 5.76 0.96 1.36 0.48 2.24 0.88 0.4 0.56 4.64 2.080 3.040v1.36l0.8 1.36-0.4 4.16 1.2 0.24v0.88l0.96 0.32-0.72 2 1.2 0.32-0.72 1.6 0.8 0.56-0.4 1.68 0.64 2.64-0.48 2.48 0.96 1.12v0.96l20.56 0.64 26.72-0.8 2.88 3.2 1.36 0.080-0.4-2.72 2.88-1.68 0.8-2.72 1.68-2.080-0.4-2.16-1.68-1.52 0.8-3.040 3.6-0.56 3.12-1.44 0.96-1.040 0.32-2.32 1.36-1.2 0.4-3.2-0.24-1.040-2.8-2.080-0.48-1.84-2.24-1.44v-0.72z" />
  </Svg>
);

export default Iowa;

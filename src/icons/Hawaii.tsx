import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Hawaii: React.FC<SvgProps> = ({ width = 109, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 109 80" {...props}>
    <Path d="M90.48 42.16l-5.28-2.32 0.88 5.28-4.24 4.64 2.88 13.84 4.4 2.88 16.24-12.24-7.68-8.96zM72.4 34.96l-0.48-1.68-2.16 1.36 0.8 0.48zM66.080 30.48l0.56-2.56-3.84-0.48 1.52 3.040h1.76zM71.68 25.040l-2.32 2.24 5.44 6.48 7.76-2.72-4.48-4.16-4.56 0.8zM59.68 21.2l-1.040 2.48 10.72-1.28h-3.28zM47.12 13.84l-1.12-2.32-5.84 2.8 3.12 5.28 2.080-1.6 5.44 2.32-0.48-3.44zM4.32 9.6l2.4-2.32 0.24-1.76-2.96 2.4zM20 1.36l-4.24-0.080-3.92 3.92 6.4 3.2z" />
  </Svg>
);

export default Hawaii;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Tennessee: React.FC<SvgProps> = ({ width = 104, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 104 80" {...props}>
    <Path d="M78 19.28l-45.76-0.48-2.48-0.72 0.080 2.64-15.28-0.48-0.64 0.8-0.72-0.8 0.16 1.52-1.040 0.56 0.72 1.12-1.52 0.080 0.88 1.44-1.12 1.52 0.4 2.080-0.96-0.4 0.32 1.12-2.56 1.28 0.32 2.56-2.4 2.24 0.48 3.12-2.88 1.76 40.16 1.28 26.8-0.24 0.4-3.28 2.32-0.4 0.72-2.24 1.36-1.12 4.48-0.96 3.44-2.72 2.080-0.4 0.72-2.32 1.28 0.32 1.92-1.84 0.64 1.36 3.92-2.8 1.52 0.48 1.84-2.8 1.92-0.4 0.48-3.68z" fill={color} />
  </Svg>
);

export default Tennessee;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const Washington: React.FC<SvgProps> = ({ width = 88, height = 80, color, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 88 80" {...props}>
    <Path d="M10.8 50.24l0.16-0.48-0.32-0.64-0.32 0.88zM23.92 40.48l0.32-0.48-0.32-0.32-0.48 0.32zM22.32 39.68v-1.28l0.16-0.48-0.8 0.96zM26.8 36.32l-0.32-1.44-0.48 0.8-0.16 1.76 0.64-0.96 0.24 0.16-0.4 0.8 1.12-0.64zM26.24 33.44l-0.56-1.6-0.32 1.6 0.88 0.48v-0.48zM24.64 26.72l-0.4-0.64-0.080-0.24 0.080 1.44zM25.52 21.52l-0.8 0.16-0.96 2.32 0.88 1.2h0.56l0.48 2.48h0.8l0.8 1.2 0.16-1.6-1.2-1.040-0.4 1.28-0.32-2.88-1.36-0.64 1.2-1.2 0.88 0.32zM22.96 20.48l-0.32-1.52-0.56 1.28 1.040 0.96zM24.64 19.28l0.080-0.32-0.48-0.56-0.080 0.48zM21.52 19.6l-0.96-1.44-0.8 0.24 0.32 1.6 1.6 0.56zM22.96 16.72h-0.8l-0.8 0.96 0.16 0.72 0.16-0.48 0.48 0.56 0.64-0.080-0.32-1.52 0.8 1.52 0.64-0.88zM25.36 17.68l-0.24-0.48-0.72-0.8v0.32zM21.2 12.56l0.16-0.16h-0.64v0.32zM80.4 11.92l-27.12 0.8-29.12-0.16 0.080 0.48-0.64 0.32 0.56 0.32 0.56 2.72 0.96-0.56 0.8 0.4 0.48 2.64-0.24 0.24-1.040-0.48 0.8 1.92-0.8-0.48v0.48l-0.56-0.8-0.72 0.24 0.24 1.040 0.24 0.4 0.8-0.48 0.32 0.96 1.44 1.12v0.96h-1.2l0.080 1.6 1.44 1.12-1.040-1.6 0.24-1.12 0.72 0.24 0.080 2 1.6 0.96-1.2 1.2-0.96 2.16-0.4 2.080 0.96 0.88-0.080 0.48-0.72-0.080 0.8 3.2-1.040 1.44-1.040-0.8-0.48 1.6-1.6 1.6-0.96-0.96-0.32 0.48v-0.48l-0.48 1.6-0.32-1.28-0.8 0.8 0.8-1.44-1.44 1.28 0.64-0.64h-0.64l0.16-0.16 0.96-0.48 1.76-3.2 0.32 3.36 0.48-2.56 0.96-0.96v0.48l-0.56 1.12 1.2 0.64 0.64-3.84-0.48-0.96-1.28 0.8 0.48-0.8-0.56-0.64 0.080-0.48 0.96 1.12-0.56-2.32 0.56 0.72 0.48-0.8 0.8-0.16-0.64-2.32-0.72-0.56 0.4 1.92-0.64-0.48-1.44 2.72-1.92 0.96-1.76 3.040 0.64 0.32 2.24-0.96-2.4 1.28-0.96-0.16 3.36-5.76-0.16-1.12 0.32 0.64 0.32-0.96v2.4l2-2.88-1.68-3.040 0.16-0.88-1.12 0.32 0.48 1.12-0.48 0.72-0.4-1.68-1.2 0.88-1.28-1.6 0.48-0.48-1.44 0.96-6.72-0.96-7.68-3.68 0.64 0.96-0.88 2.56 0.4 2.32 2.88 5.36 0.24 4.32 1.12 2.56v3.84l0.96-1.76 1.040 1.12 1.76 0.48-2.32 0.8v0.96l-0.96-1.12 0.4 2.72 2.080-0.080 1.28 0.96-0.72 0.080-0.56-0.48-0.16 1.52-0.64-0.4 0.4 1.12-0.24 1.2 0.96 0.72-0.8-0.24-0.48 0.72-0.8-3.76-0.72 5.36 0.96-0.48 1.52 0.96 1.76-0.72 0.88 0.64h1.68l1.44 1.6 1.92-0.4 1.44 0.88 1.76 2.4 0.64 4.96 4.8 1.28 5.040-2.24 5.44 0.32 1.28 1.28 2.56-0.32 2.88-1.28 4.16-0.16 3.040-1.52 2.96-0.56 0.96-0.8 4.88-0.48 0.96-0.72 22.24-0.88-0.96-1.44 0.48-0.96-0.48-1.44-1.12-1.6z" fill={color} />
  </Svg>
);

export default Washington;

import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const DistrictOfColumbia: React.FC<SvgProps> = ({ width = 60, height = 80, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 60 80" {...props}>
    <Path d="M56.4 36.8l-34.16-34.24-18.24 18.56 9.84 8.32 2.24 2.96 10.32 6.48 1.76 16v10.8z" />
  </Svg>
);

export default DistrictOfColumbia;

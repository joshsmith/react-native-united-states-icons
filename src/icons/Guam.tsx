import type { SvgProps } from 'react-native-svg';
import { Svg, Polygon } from 'react-native-svg';
import React from 'react';

const Guam: React.FC<SvgProps> = ({ width = 24, height = 30, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 24 30" {...props}>
    <Polygon points="17.4 -5.68434189e-14 16.5 -5.68434189e-14 15.1 2.2 15.2 4.3 14.6 5.5 12.8 8.6 12.9 9.8 12.4 10.7 11.2 10.4 10.5 11 10.8 12.2 9.2 12.5 7.5 12.4 4.8 13.5 2.7 13.7 4.4 14 3 14.4 4.1 14.5 4.1 15.1 3.3 15.1 3.3 15.6 3.8 15.8 3.4 17 2.9 16.2 3.1 15.4 2.4 15 1.4 15.3 5.68434189e-14 14.9 0.3 15.8 1.2 16.1 1.5 17 2.5 17.5 2.8 18.3 2.1 19.7 1.8 21.6 1.1 22.7 1.9 23.2 2.6 25.8 2.9 27.8 3.5 28.3 3.9 28.9 4.6 28.9 5.9 29.5 6.9 29.3 7.3 29.4 9.2 27.5 10 26.8 10.7 25.6 10.7 23.2 10.2 22.8 10.7 22.8 10.6 20.8 11 19.2 10.8 18.8 11.4 18.4 11.8 17.3 11.6 16.7 13.2 16.3 13.8 15.4 14.6 15.3 15.5 14.2 17.9 12.2 19.1 11.5 19.3 10.6 21.4 9.6 22.4 7.5 22.5 6.5 23.2 5.6 23.7 3.9 21.3 3.8 20.1 3.5 19.6 2.2" />
  </Svg>
);

export default Guam;
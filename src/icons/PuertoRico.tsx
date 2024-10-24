import type { SvgProps } from 'react-native-svg';
import { Svg, Path } from 'react-native-svg';
import React from 'react';

const PuertoRico: React.FC<SvgProps> = ({ width = 66, height = 19, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 66 19" {...props}>
    <Path d="M0.1,3.8 L0,4.4 L0.8,4.4 L0.6,3.9 L0.1,3.8 Z M62.3,4.9 L62.9,5.9 L63.7,6.9 L64.4,7.3 L64.2,6.5 L65.5,6.6 L65.5,5.9 L64.1,5.3 L63.2,5.5 L62.3,4.9 Z M64.5,11.5 L64.3,11.1 L63.6,11.3 L61.3,10.7 L59.8,10.8 L59.4,11.2 L58,11.4 L56.7,12 L55.7,12.2 L56.2,13.2 L57.2,13.3 L58.4,12.9 L59.4,13 L60.3,12.8 L60.2,12.5 L61.5,12.4 L62.1,12 L62.4,12.3 L63.6,11.8 L64.5,11.5 Z M9.4,1.2 L9.5,3.1 L6.5,4.5 L6.4,5.4 L7.4,6.7 L8.7,7.2 L9.2,9.9 L8.4,13.1 L8.5,15.3 L7.8,16.9 L8.8,18 L9,17.1 L11.5,17.6 L12.3,16.7 L14.3,16.9 L16.3,18.1 L20.4,16.9 L20.9,16 L23.8,17 L26.8,17 L29.4,16.2 L32.1,17.5 L33.6,16.9 L36.6,18 L37.5,17.2 L38.7,18 L41.3,16.9 L42.2,17.3 L43,16.6 L44.1,16.7 L45.7,16.9 L47.4,15.7 L48.7,14.1 L49.3,14 L50.4,11.6 L51.4,10.1 L53.9,9.6 L54.3,8.7 L54.9,9.3 L55.2,8.4 L54.2,7.6 L54.3,5.1 L54.6,3.9 L53,4.5 L49.4,3 L46.4,2 L43.6,1.7 L40.4,2 L31.7,0.6 L30.2,1.3 L25,0.7 L22.7,1.1 L20,0.7 L17,0.9 L13.1,0 L10.5,0.1 L9.4,1.2 Z" />
  </Svg>
);

export default PuertoRico;

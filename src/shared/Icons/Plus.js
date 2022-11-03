import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#53addb" />
        <Stop offset={1} stopColor="#2975b5" />
      </LinearGradient>
    </Defs>
    <Path
      data-name="Combined Shape"
      d="M4.667 10a1 1 0 0 1-1-1V6.333H1a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1h2.667V1a1 1 0 0 1 1-1h.667a1 1 0 0 1 1 1v2.667H9a1 1 0 0 1 1 1v.667a1 1 0 0 1-1 1H6.333V9a1 1 0 0 1-1 1Z"
      fill="url(#a)"
    />
  </Svg>
);

export default SvgComponent;

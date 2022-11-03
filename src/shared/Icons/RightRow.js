import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function RightRow(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={10} {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x2={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#2975b5" />
          <Stop offset={1} stopColor="#53addb" />
        </LinearGradient>
      </Defs>
      <G data-name="Icons/angle-down">
        <Path
          data-name="Combined Shape"
          d="M0 6.333V.667A.667.667 0 01.667 0h5.666a.666.666 0 110 1.333h-5v5a.666.666 0 11-1.333 0z"
          transform="rotate(135 3.915 4.548)"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  );
}

export default RightRow;

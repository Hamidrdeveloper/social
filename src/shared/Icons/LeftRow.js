import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/angle-left"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={-0.194}
          y1={0.807}
          x2={0.8}
          y2={-0.191}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#2975b5" />
          <Stop offset={1} stopColor="#53addb" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Combined Shape"
        d="M2 63a2 2 0 01-2-2V2a2 2 0 012-2h59a2 2 0 012 2v8a2 2 0 01-2 2H12v49a2 2 0 01-2 2z"
        transform="rotate(-45 62.878 2.003)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

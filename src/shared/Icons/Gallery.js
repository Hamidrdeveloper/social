import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 150 50"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
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
        d="M1 90a1 1 0 01-1-1V1a1 1 0 011-1h88a1 1 0 011 1v88a1 1 0 01-1 1zM5 6v78a1 1 0 001 1h78a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1zm7 69v-8.889L27 51.3l7.5 7.4 24-23.7L78 54.259V75zm0-52.5a7.5 7.5 0 117.5 7.5 7.5 7.5 0 01-7.5-7.5z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

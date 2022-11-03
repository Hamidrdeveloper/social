import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.001 20.001"
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
      <G data-name="Second Icon">
        <Path
          data-name="Combined Shape"
          d="M18.1 19.935l-8.1-8.1-8.1 8.1a.222.222 0 01-.314 0L.065 18.414a.222.222 0 010-.314l8.1-8.1L.067 1.9a.222.222 0 010-.314L1.587.067a.222.222 0 01.314 0l8.1 8.1 8.1-8.1a.222.222 0 01.314 0l1.521 1.521a.222.222 0 010 .314l-8.1 8.1 8.1 8.1a.222.222 0 010 .314l-1.52 1.52a.222.222 0 01-.314 0z"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;

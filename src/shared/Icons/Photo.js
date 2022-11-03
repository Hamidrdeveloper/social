import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/camera"
      xmlns="http://www.w3.org/2000/svg"
      width={90}
      height={90}
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
        d="M88 70H2a2 2 0 01-2-2V13a2 2 0 012-2h21l3.281-9.025A3.009 3.009 0 0129.1 0h31.8a3.009 3.009 0 012.82 1.975L67 11h21a2 2 0 012 2v55a2 2 0 01-2 2zM45 20a20.931 20.931 0 108.172 1.651A20.864 20.864 0 0045 20zm0 35a14 14 0 1114-14 13.9 13.9 0 01-14 14z"
        transform="translate(0 10)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

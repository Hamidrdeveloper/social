import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 10.092 10.062"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#53addb" />
          <Stop offset={1} stopColor="#2975b5" />
        </LinearGradient>
      </Defs>
      <G data-name="Icons/arrow-down">
        <Path
          data-name="\uE5C4"
          d="M0 4.427v1.239h7.65l-3.5 3.541.883.885 5.031-5.046L5.031 0l-.882.885 3.5 3.541z"
          transform="rotate(90 5.046 5.046)"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;

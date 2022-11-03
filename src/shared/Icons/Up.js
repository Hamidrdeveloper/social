import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.092 10.062"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={1}
          y1={0.5}
          x2={0}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#53addb" />
          <Stop offset={1} stopColor="#2975b5" />
        </LinearGradient>
      </Defs>
      <G data-name="Icons/gray/Artboard Copy 27">
        <Path
          data-name="\uE5C4"
          d="M0 4.427v1.239h7.65l-3.5 3.541.883.885 5.031-5.046L5.031 0l-.882.885 3.5 3.541z"
          transform="rotate(-90 5.032 5.031)"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;

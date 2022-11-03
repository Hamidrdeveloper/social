import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/ellipsis-vertical"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 10 10.016"
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
        d="M0 8.683a1.333 1.333 0 112.667 0 1.333 1.333 0 01-2.667 0zM0 5.01a1.333 1.333 0 012.667 0A1.333 1.333 0 110 5.01zm0-3.673a1.333 1.333 0 012.667 0 1.333 1.333 0 11-2.667 0z"
        transform="translate(3.667)"
        fill="url(#prefix__a)"
      />
      <Path
        data-name="Combined Shape"
        d="M0 8.681a1.333 1.333 0 111.333 1.335A1.334 1.334 0 010 8.681zm0-3.673a1.333 1.333 0 111.333 1.336A1.334 1.334 0 010 5.008zm0-3.673a1.333 1.333 0 111.333 1.336A1.334 1.334 0 010 1.335z"
        transform="translate(3.667)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

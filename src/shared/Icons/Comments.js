import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/heart-empty Copy"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
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
        data-name="\uF0E5"
        d="M20 8.333c0 4.609-4.475 8.333-10 8.333a13.213 13.213 0 01-1.618-.1 11.778 11.778 0 01-5.134 3.151A8.012 8.012 0 011.975 20a.557.557 0 01-.536-.495c-.056-.339.134-.534.3-.768a8.545 8.545 0 002.031-3.88A7.9 7.9 0 010 8.333C0 3.724 4.475 0 10 0s10 3.724 10 8.333z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

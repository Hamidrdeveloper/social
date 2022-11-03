import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.092 20.185"
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
          <Stop
            offset={0}
            stopColor={props.firstColor ? props.firstColor : '#53addb'}
          />
          <Stop
            offset={1}
            stopColor={props.secondColor ? props.secondColor : '#2975b5'}
          />
        </LinearGradient>
      </Defs>
      <Path
        data-name="\uE5C4"
        d="M19.681 8.436v2.479H4.406L11.4 18l-1.765 1.767L-.411 9.675 9.635-.417l1.765 1.77-6.994 7.083z"
        transform="translate(.411 .417)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

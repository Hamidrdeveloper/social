import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function DotsThreeVertical(props) {
  return (
    <Svg
      data-name="Second Icon"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
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
        data-name="Combined Shape"
        d="M0 17.333A2.667 2.667 0 112.667 20 2.667 2.667 0 010 17.333zM0 10a2.667 2.667 0 112.667 2.667A2.667 2.667 0 010 10zm0-7.333a2.667 2.667 0 112.667 2.666A2.667 2.667 0 010 2.667z"
        transform="translate(7.333)"
        fill="url(#prefix__a)"
      />
      <Path
        data-name="Combined Shape"
        d="M0 17.333A2.667 2.667 0 112.667 20 2.667 2.667 0 010 17.333zM0 10a2.667 2.667 0 112.667 2.667A2.667 2.667 0 010 10zm0-7.333a2.667 2.667 0 112.667 2.666A2.667 2.667 0 010 2.667z"
        transform="translate(7.333)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default DotsThreeVertical;

import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={17.333}
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
            stopColor={props.firstColor ? props.firstColor : '#2975b5'}
          />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Combined Shape"
        d="M11.495 16.9a2.442 2.442 0 01-.884-1.119H0V14h10.611a2.446 2.446 0 014.556 0H20v1.778h-4.833a2.446 2.446 0 01-3.672 1.122zm-.161-2.008a1.556 1.556 0 101.555-1.556 1.557 1.557 0 00-1.556 1.553zm-7.617-4.217a2.442 2.442 0 01-.884-1.119H0V7.778h2.833a2.446 2.446 0 014.556 0H20v1.778H7.389a2.446 2.446 0 01-3.672 1.119zm-.161-2.008a1.556 1.556 0 101.555-1.556 1.557 1.557 0 00-1.555 1.556zm10.828-4.214a2.442 2.442 0 01-.884-1.12H0V1.556h13.5a2.445 2.445 0 014.556 0H20v1.777h-1.945a2.446 2.446 0 01-3.672 1.119zm-.161-2.008A1.556 1.556 0 1015.778.889a1.557 1.557 0 00-1.556 1.555z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

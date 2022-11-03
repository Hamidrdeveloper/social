import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/drop"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
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
        data-name="Combined Shape"
        d="M6.667 19.994A6.661 6.661 0 010 13.327C0 10.259 4.671 3.084 6.206.727 6.483.3 6.651.043 6.666 0c.016.043.184.3.46.725 1.535 2.358 6.207 9.533 6.207 12.6a6.661 6.661 0 01-6.667 6.667zm-5.61-6.614a.236.236 0 00-.066.01c-.075.022-.128.093-.156.212a3.19 3.19 0 00.315 1.62 5.95 5.95 0 001.386 2.044 5.648 5.648 0 003.3 1.5c.24 0 .377-.055.377-.15 0-.139-.13-.188-.389-.286a7.329 7.329 0 01-2.667-1.761 6.2 6.2 0 01-1.807-2.735c-.101-.294-.156-.454-.293-.454z"
        transform="translate(3.333 .006)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

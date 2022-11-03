import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function AddFriend(props) {
  return (
    <Svg
      data-name="Icons/cup"
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
          <Stop offset={0} stopColor="#53addb" />
          <Stop offset={1} stopColor="#2975b5" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Combined Shape"
        d="M8.222 15a5 5 0 115 5 5.006 5.006 0 01-5-5zm2.444.111a.7.7 0 00.7.7h1.263v1.263a.7.7 0 001.4 0v-1.261H15.3a.7.7 0 000-1.4h-1.264v-1.267a.7.7 0 00-1.4 0v1.263h-1.267a.7.7 0 00-.702.702zM2.774 20a2.278 2.278 0 01-1.074-.272 2.821 2.821 0 01-.882-.741A3.888 3.888 0 010 16.549a12.848 12.848 0 01.85-4.975 3.589 3.589 0 013.408-2.407 5.809 5.809 0 004.075 1.667c.144 0 .29-.005.434-.016a6.113 6.113 0 00-.947 7.043A6.176 6.176 0 009.707 20zM6.387 9.607A5 5 0 018.333 0a5 5 0 015 5 5 5 0 01-6.946 4.607z"
        transform="translate(1.778)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default AddFriend;

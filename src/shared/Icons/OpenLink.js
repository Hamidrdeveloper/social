import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const OpenLink = props => (
  <Svg
    data-name="Icons/external"
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={90}
    viewBox="0 0 150 50"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="a"
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
      data-name="\uF08E"
      d="M14.318 80A14.322 14.322 0 0 1 0 65.682V24.318A14.322 14.322 0 0 1 14.318 10h35a1.571 1.571 0 0 1 1.591 1.591v3.181a1.571 1.571 0 0 1-1.591 1.591h-35a7.977 7.977 0 0 0-7.954 7.954v41.365a7.977 7.977 0 0 0 7.954 7.954h41.364a7.977 7.977 0 0 0 7.954-7.954V49.773a1.571 1.571 0 0 1 1.591-1.591h3.182A1.571 1.571 0 0 1 70 49.773v15.909A14.322 14.322 0 0 1 55.682 80ZM45.6 49.549 40.451 44.4a1.421 1.421 0 0 1 0-2.078L69.9 12.873l-7.949-7.95a2.87 2.87 0 0 1-.859-2.032A2.911 2.911 0 0 1 63.984 0h23.125A2.911 2.911 0 0 1 90 2.891v23.125a2.911 2.911 0 0 1-2.891 2.891 2.87 2.87 0 0 1-2.032-.859l-7.95-7.948-29.449 29.449a1.421 1.421 0 0 1-2.078 0Z"
      transform="translate(0 5)"
      fill="url(#a)"
    />
  </Svg>
);

export default OpenLink;

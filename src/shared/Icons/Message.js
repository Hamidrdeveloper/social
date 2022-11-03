import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function Message(props) {
  return (
    <Svg
      data-name="Third Icon"
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
        d="M1.789 20a.384.384 0 01-.349-.323c-.043-.2.078-.334.205-.472l.018-.019c.07-.078.14-.154.212-.23.636-.683 1.357-1.457 1.618-3.984A8.045 8.045 0 010 8.51a7.872 7.872 0 012.928-6.02A10.883 10.883 0 0110 0a10.883 10.883 0 017.072 2.49A7.872 7.872 0 0120 8.51a7.872 7.872 0 01-2.928 6.02A10.883 10.883 0 0110 17.019a11.317 11.317 0 01-2.354-.239 9.323 9.323 0 01-4.856 3.044 10.18 10.18 0 01-.959.173.289.289 0 01-.042.003zm2.878-9.556a.666.666 0 100 1.333h10.666a.666.666 0 100-1.333zm0-2.667a.666.666 0 100 1.333h10.666a.666.666 0 100-1.333zm0-2.667a.666.666 0 100 1.333h10.666a.666.666 0 100-1.333z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default Message;

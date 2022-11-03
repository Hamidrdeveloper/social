import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import colorSchema from '../../constants/colorSchema';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20.001"
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
            stopColor={
              props.firstColor ? props.firstColor : colorSchema.iconColor.blue
            }
          />
          <Stop
            offset={1}
            stopColor={
              props.secondColor
                ? props.secondColor
                : colorSchema.iconColor.lightBlue
            }
          />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Combined Shape"
        d="M18.779 20a5.963 5.963 0 01-3.879-2.148 7.531 7.531 0 01-1.57.159c-3.676 0-6.666-2.544-6.666-5.673a4.871 4.871 0 01.04-.617h.183c3.422 0 6.355-2.17 6.823-5.048 3.529.171 6.29 2.658 6.29 5.666a5.363 5.363 0 01-2.329 4.308 3.8 3.8 0 001.08 2.657c.048.051.094.1.14.153l.012.013c.086.093.166.18.137.315a.257.257 0 01-.232.216zm-3.446-7.554a.666.666 0 10.667-.669.667.667 0 00-.667.667zm-2.667 0a.666.666 0 10.666-.667.667.667 0 00-.665.665zm-2.667 0a.666.666 0 10.666-.667.667.667 0 00-.665.665zm-9.04.674c-.028-.135.052-.221.137-.314l.013-.014.14-.152a3.805 3.805 0 001.08-2.658A5.364 5.364 0 010 5.673C0 2.545 2.991 0 6.666 0s6.667 2.545 6.667 5.673-2.991 5.673-6.667 5.673a7.577 7.577 0 01-1.57-.159 6.2 6.2 0 01-3.236 2.03 6.306 6.306 0 01-.64.115.155.155 0 01-.029 0 .258.258 0 01-.232-.214zm1.66-5.738a.476.476 0 00.476.476h7.143a.476.476 0 000-.952H3.1a.476.476 0 00-.481.475zm0-1.667a.476.476 0 00.481.475h7.143a.476.476 0 000-.952H3.1a.476.476 0 00-.481.476zm0-1.9a.476.476 0 00.476.476h7.143a.476.476 0 000-.952H3.1a.476.476 0 00-.481.471z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

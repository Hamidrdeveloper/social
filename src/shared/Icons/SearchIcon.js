import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import colorSchema from '../../constants/colorSchema';

function SvgComponent(props) {
  return (
    <Svg
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
        d="M18.462 20a1.5 1.5 0 01-1.082-.457l-4.123-4.111a8.35 8.35 0 01-2.285 1.11 8.458 8.458 0 115.571-5.571 8.349 8.349 0 01-1.11 2.285l4.123 4.123A1.542 1.542 0 0118.462 20zM8.444 1.333a7.111 7.111 0 107.111 7.111 7.119 7.119 0 00-7.111-7.111z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

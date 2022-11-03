import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import colorSchema from '../../constants/colorSchema';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Icons/bell"
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
        d="M8 18.222h4A1.9 1.9 0 0110 20a1.9 1.9 0 01-2-1.778zm10.667 0H.556A.556.556 0 010 17.667a.583.583 0 01.555-.583l4.925-.24a.918.918 0 01.08-.1L0 17.111A7.388 7.388 0 002.889 14.1c.667-1.406.889-6.324.889-6.324v-.111a5.977 5.977 0 01.489-2.379A6.086 6.086 0 015.6 3.345a6.252 6.252 0 013.123-1.661.824.824 0 01-.279-.573C8.444.5 9.386 0 10 0s1.556.5 1.556 1.111a.824.824 0 01-.279.573A6.252 6.252 0 0114.4 3.345a6.086 6.086 0 011.333 1.943 5.981 5.981 0 01.489 2.379v.111s.222 4.919.889 6.324A7.388 7.388 0 0020 17.111l-5.56-.371a.918.918 0 01.08.1l4.925.24a.583.583 0 01.555.583.556.556 0 01-.556.556zM10 16.444l-1.557.1 1.557.08 1.557-.076L10 16.444z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

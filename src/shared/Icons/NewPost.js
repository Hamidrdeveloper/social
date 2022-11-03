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
        d="M18 20H2a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2zm-6.333-7.222v1.111h1.112V15h1.111v-1.111H15v-1.111h-1.111v-1.111h-1.111v1.112zm-1.143-6.063L5 12.238V15h2.762l5.524-5.523zM12.57 5a.838.838 0 00-.6.254l-1.111 1.1 2.784 2.784 1.111-1.111a.856.856 0 00.247-.6.891.891 0 00-.247-.609L13.18 5.254A.868.868 0 0012.57 5zM7.4 14.143h-.7V13.3h-.843v-.7l.6-.6L8 13.545l-.6.6zM7 11.858a.143.143 0 01-.149-.15.157.157 0 01.048-.115L10.592 7.9a.162.162 0 01.115-.048.143.143 0 01.15.149.164.164 0 01-.048.116L7.123 11.81a.164.164 0 01-.117.048z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

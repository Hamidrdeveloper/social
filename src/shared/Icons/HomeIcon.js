import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import colorSchema from '../../constants/colorSchema';

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
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
        d="M16.321 20H3.679a.713.713 0 01-.557-.295A1.138 1.138 0 012.889 19v-7.5c0-.015 0-.253.006-.483V11c0-.23.006-.467.006-.483L10 4l7.1 6.517c.012.031.012.944.012.983V19a1.138 1.138 0 01-.233.705.713.713 0 01-.558.295zM1.161 9.778h-.043a.405.405 0 01-.261-.142l-.769-.961a.438.438 0 01.05-.583L9.057.34a1.478 1.478 0 011.886 0l3.027 2.64V.456a.4.4 0 01.4-.414h2.382a.4.4 0 01.4.414v5.281l2.717 2.356a.438.438 0 01.05.583l-.769.958a.405.405 0 01-.261.142.414.414 0 01-.3-.091L10 2.217 1.416 9.685a.424.424 0 01-.255.093z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;

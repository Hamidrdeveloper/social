import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function Delete(props) {
  return (
    <Svg
      data-name="Icons/trash"
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
        data-name="\uF1F8"
        d="M4.444 20a2.4 2.4 0 01-2.094-2.6V5H.419A.412.412 0 010 4.583V3.75a.412.412 0 01.419-.417h4.942l.916-2.175A2.036 2.036 0 018.018 0h4.188a2.037 2.037 0 011.741 1.159l.916 2.175h4.718A.412.412 0 0120 3.75v.833a.412.412 0 01-.419.417h-1.93v12.344A2.452 2.452 0 0115.556 20z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default Delete;

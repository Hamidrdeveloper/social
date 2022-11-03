import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <Path
      data-name="Combined Shape"
      d="M10 1v.667a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"
      fill="rgba(52,52,52,0.5)"
    />
  </Svg>
);

export default SvgComponent;

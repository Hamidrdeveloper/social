import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    data-name="Icons/times-circle"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <Path
      data-name="Combined Shape"
      d="M10 20A10 10 0 0 1 6.108.786a10 10 0 0 1 7.785 18.428A9.937 9.937 0 0 1 10 20ZM5.455 4.629a.442.442 0 0 0-.314.13l-.381.381a.445.445 0 0 0 0 .629L8.985 10l-4.278 4.273a.445.445 0 0 0 0 .629l.391.391a.444.444 0 0 0 .629 0L10 11.015l4.226 4.227a.444.444 0 0 0 .629 0l.381-.381a.444.444 0 0 0 0-.629L11.015 10l4.278-4.278a.445.445 0 0 0 0-.629l-.393-.386a.444.444 0 0 0-.629 0L10 8.985 5.769 4.759a.442.442 0 0 0-.314-.13Z"
      fill="rgba(52,52,52,0.1)"
    />
  </Svg>
);

export default SvgComponent;

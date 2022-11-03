import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-async-storage/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(reactotronRedux()) //  <- here i am!
  .use(openInEditor()) // <--- here we go!
  .use(asyncStorage()) // <--- here we go!
  .use(networking()) // <--- here we go!
  .use(trackGlobalErrors()) // <--- here we go!
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;

export default reactotron;

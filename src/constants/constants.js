import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const BASE_WIDTH = DEVICE_WIDTH * 0.94;

export {DEVICE_HEIGHT, DEVICE_WIDTH};

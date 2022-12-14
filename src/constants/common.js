import {Dimensions} from 'react-native';
import {fonts} from './Font';
import {setSize} from '../functions';

const {width: DEVICE_WIDTH} = Dimensions.get('window');

const baseWidth = DEVICE_WIDTH * 0.93;
const baseSidesSpace = DEVICE_WIDTH * 0.035;
const containerVerticalSpace = setSize(5);
const mediumRadius = setSize(7);
const largeRadius = setSize(20);
const extraLargeRadius = setSize(35);
const smallShadow = setSize(3);
const mediumShadow = setSize(5);
const baseLineHeight = setSize(24);
const baseTouchOpacity = 0.8;
const headerHeight = setSize(60);
const headerPaddingHorizontal = setSize(10);

const toastOption = {
  offsetY: setSize(250),
  titleSize: setSize(14),
  fontFamily: fonts.regFont,
};
export {
  baseWidth,
  baseSidesSpace,
  containerVerticalSpace,
  mediumRadius,
  largeRadius,
  extraLargeRadius,
  smallShadow,
  mediumShadow,
  baseLineHeight,
  baseTouchOpacity,
  headerHeight,
  headerPaddingHorizontal,
  toastOption,
};

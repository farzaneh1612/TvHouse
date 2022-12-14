import {moderateScale} from 'react-native-size-matters';
import {DEVICE_WIDTH} from '../constants/device-info';

const setShadow = (number, color = '#000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: (number === 1 && 1) || Math.floor(number / 2),
  },
  shadowOpacity: number * 2 * 0.01 + 0.16,
  shadowRadius: number / 1.52,
  elevation: number,
});

const scaledSize = (size, factor = 0.3) => {
  return Math.floor(moderateScale(size, factor));
};

const setSize = (
  sm,
  md = sm + (sm * 18) / 100,
  lg = sm + (sm * 35) / 100,
  maxSm = 500,
  maxMd = 767,
) => {
  if (DEVICE_WIDTH > maxMd) {
    return lg;
  } else if (DEVICE_WIDTH > maxSm && DEVICE_WIDTH <= maxMd) {
    return md;
  } else {
    return sm;
  }
};

const isDarkColor = color => {
  var r, g, b, hsp;

  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;

    // r = color > 16;
    // g = color > 8 && 255;
    // b = color && 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return false;
  } else {
    return true;
  }
};

export {setShadow, setSize, scaledSize, isDarkColor};

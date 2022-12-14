import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FastImage from 'react-native-fast-image';
import {colors} from '../styles';
import {setShadow} from '../functions';
import {TouchableOpacity} from 'react-native';
import {baseTouchOpacity} from '../constants';

export default function Image({
  width,
  height,
  radius,
  shadow,
  alignSelf,
  margin,
  onPress,
  activeOpacity,
  resizeMode,
  cover,
  style,
  notPlaceholder,
  source,
  placeholderIcon,
  ...props
}) {
  const [wrapperSize, setWrapperSize] = React.useState({w: 0, h: 0});
  const [placeholderSize, setPlaceholderSize] = React.useState();

  React.useEffect(() => {
    setPlaceholderSize(
      wrapperSize.w >= wrapperSize.h
        ? wrapperSize.w * 0.25
        : wrapperSize.h * 0.25,
    );
  }, [wrapperSize]);

  const imageMargin = margin && {
    marginTop: margin.top,
    marginRight: margin.right,
    marginBottom: margin.bottom,
    marginLeft: margin.left,
  };

  const styles = {
    wrapper: {
      width: cover ? '100%' : width,
      height: cover ? '100%' : height,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: alignSelf || 'center',
      backgroundColor: '#f7f7f7',
      borderRadius: radius || 0,
      ...setShadow(shadow === 0 ? 0 : shadow || 0),
      ...imageMargin,
    },
    image: {
      borderRadius: radius || 0,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  };

  return (
    <TouchableOpacity
      activeOpacity={
        activeOpacity === true ? baseTouchOpacity : activeOpacity || 1
      }
      onPress={onPress}
      style={{...styles.wrapper, ...style}}
      onLayout={event =>
        setWrapperSize({
          w: event.nativeEvent.layout.width,
          h: event.nativeEvent.layout.height,
        })
      }>
      {!notPlaceholder &&
        (placeholderIcon ? (
          placeholderIcon
        ) : (
          <Fontisto
            size={placeholderSize}
            name="picture"
            color={colors.iconColor_1}
          />
        ))}
      <FastImage
        style={styles.image}
        priority={FastImage.priority.normal}
        resizeMode={
          resizeMode
            ? FastImage.resizeMode[`${resizeMode}`]
            : FastImage.resizeMode.cover
        }
        cache={FastImage.cacheControl.cacheOnly}
        source={source}
        {...props}
      />
    </TouchableOpacity>
  );
}

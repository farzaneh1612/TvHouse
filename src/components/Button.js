import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TouchableOpacity as TouchOpacity} from 'react-native-gesture-handler';
import Icon from './Icon';
import {TextTag as Text} from './TextTag';
import {Separator} from './Containers';
import {setSize, setShadow} from '../functions';
import {colors} from '../styles';
import PropTypes from 'prop-types';
import {baseTouchOpacity} from '../constants';
import {ActivityIndicator} from 'react-native';

const ButtonWrapper = ({
  isLoading,
  opacity,
  inAbsolutePos,
  width: buttonWidth,
  height: buttonHeight,
  block,
  radius,
  circle,
  rounded,
  shadow,
  fixPosition,
  transparent,
  bgColor,
  children,
  rightAlign,
  leftAlign,
  bordered,
  onPress,
  margin,
  style,
  disabled,
  onDisablePress,
  contentColor,
  loadingColor,
  ...props
}) => {
  const width = (circle && radius) || (block && '100%') || buttonWidth;
  const height = (circle && radius) || buttonHeight;
  const borderRadius = (rounded && height) || (circle && radius) || radius;
  const backgroundColor = (transparent && 'transparent') || bgColor;
  const position = fixPosition && {position: 'absolute', ...fixPosition};
  const marginLeft = leftAlign
    ? typeof leftAlign === 'number'
      ? leftAlign
      : 0
    : 0;
  const marginRight = rightAlign
    ? typeof rightAlign === 'number'
      ? rightAlign
      : 0
    : 0;
  const alignSelf = rightAlign
    ? 'flex-end'
    : leftAlign
    ? 'flex-start'
    : 'center';
  const borderWidth = bordered ? bordered.width || 1 : 0;
  const borderColor = bordered?.color || colors.baseThemeColor;
  const buttonMargin = margin
    ? {
        marginTop: margin.top,
        marginLeft: margin.left,
        marginRight: margin.right,
        marginBottom: margin.bottom,
      }
    : {};

  const buttonWrapperStyle = {
    width,
    height,
    borderRadius,
    backgroundColor,
    marginLeft,
    marginRight,
    alignSelf,
    borderWidth,
    borderColor,
    overflow: 'hidden',
    opacity: opacity || 1,
    ...position,
    ...setShadow(transparent ? 0 : shadow === 0 ? 0 : shadow),
    ...buttonMargin,
    ...style,
  };

  return inAbsolutePos ? (
    <TouchOpacity
      disabled={isLoading || disabled}
      {...props}
      onPress={onPress}
      activeOpacity={baseTouchOpacity}
      style={buttonWrapperStyle}>
      {isLoading ? (
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={loadingColor} size={setSize(30)} />
        </View>
      ) : (
        children
      )}
    </TouchOpacity>
  ) : (
    <TouchableOpacity
      disabled={isLoading || disabled}
      {...props}
      onPress={onPress}
      activeOpacity={baseTouchOpacity}
      style={buttonWrapperStyle}>
      {isLoading ? (
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={loadingColor} size={setSize(30)} />
        </View>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default function Button({
  isLoading,
  opacity,
  inAbsolutePos,
  width,
  height,
  block,
  radius,
  circle,
  rounded,
  shadow,
  fixPosition,
  transparent,
  bgColor,
  children,
  rightAlign,
  leftAlign,
  bordered,
  onPress,
  margin,
  style,
  onDisablePress,
  disabled,
  iconLeft,
  label,
  iconRight,
  contentRightAlign,
  contentLeftAlign,
  loadingColor,
  contentColor,
  ...props
}) {
  const buttonWrapperProps = {
    isLoading,
    opacity,
    onDisablePress,
    disabled,
    inAbsolutePos,
    width,
    height,
    block,
    radius,
    circle,
    rounded,
    shadow,
    fixPosition,
    transparent,
    bgColor,
    children,
    rightAlign,
    leftAlign,
    bordered,
    onPress,
    margin,
    style,
    loadingColor,
    contentColor,
    ...props,
  };

  const buttonContent = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: contentRightAlign
      ? 'flex-end'
      : contentLeftAlign
      ? 'flex-start'
      : 'center',
    paddingLeft: contentLeftAlign
      ? typeof contentLeftAlign === 'number'
        ? contentLeftAlign
        : 0
      : 0,
    paddingRight: contentRightAlign
      ? typeof contentRightAlign === 'number'
        ? contentRightAlign
        : 0
      : 0,
    height: '100%',
  };

  return (
    <ButtonWrapper {...buttonWrapperProps}>
      <View style={buttonContent}>
        {iconLeft && iconLeft.component ? (
          iconLeft.component
        ) : (
          <Icon color={contentColor} size={24} {...iconLeft} />
        )}
        {label && iconLeft && (
          <Separator
            {...(typeof label.leftSpace === 'object'
              ? label.leftSpace
              : {
                  width:
                    label.leftSpace === 0 ? 0 : label.leftSpace || setSize(7),
                })}
          />
        )}
        {label && (
          <Text color={contentColor} {...label}>
            {label.text}
          </Text>
        )}
        {label && iconRight && (
          <Separator
            {...(typeof label.rightSpace === 'object'
              ? label.rightSpace
              : {
                  width:
                    label.rightSpace === 0 ? 0 : label.rightSpace || setSize(7),
                })}
          />
        )}
        {iconRight && iconRight.component ? (
          iconRight.component
        ) : (
          <Icon color={contentColor} size={24} {...iconRight} />
        )}
      </View>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  radius: PropTypes.number,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  shadow: PropTypes.number,
  fixPosition: PropTypes.object,
  transparent: PropTypes.bool,
  bgColor: PropTypes.string,
  children: PropTypes.any,
  rightAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  leftAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  bordered: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  iconLeft: PropTypes.object,
  label: PropTypes.object,
  iconRight: PropTypes.object,
  contentRightAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  contentLeftAlign: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  contentColor: PropTypes.string,
  loadingColor: PropTypes.string,
};

Button.defaultProps = {
  width: setSize(125),
  height: setSize(45),
  radius: setSize(5),
  shadow: 5,
  bgColor: '#fff',
  contentColor: '#fff',
  loadingColor: '#fff',
};

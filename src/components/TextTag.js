import React from 'react';
import {Animated, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors} from '../styles';
import {fonts} from '../constants';
import {priceFormatter, scaledSize} from '../functions';

export const TextTag = ({
  font,
  width,
  height,
  black,
  bold,
  medium,
  light,
  thin,
  size,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small,
  smaller,
  color,
  dark,
  muted,
  lang,
  children,
  priceFormat,
  priceDecorator,
  underline,
  lineHeight,
  textAlign,
  block,
  cover,
  style,
  animated,
  animatable,
  margin,
  ...props
}) => {
  const textSize = size
    ? scaledSize(size)
    : h1
    ? scaledSize(26)
    : h2
    ? scaledSize(24)
    : h3
    ? scaledSize(22)
    : h4
    ? scaledSize(20)
    : h5
    ? scaledSize(18)
    : h6
    ? scaledSize(16)
    : small
    ? scaledSize(12)
    : smaller
    ? scaledSize(10)
    : scaledSize(14);

  const textFont =
    lang && lang === 'en'
      ? 'system font'
      : font || black
      ? fonts.blackFont
      : bold
      ? fonts.boldFont
      : medium
      ? fonts.mediumFont
      : light
      ? fonts.lightFont
      : thin
      ? fonts.thinFont
      : fonts.regularFont;

  const textColor = color
    ? color
    : dark
    ? colors.darkTextColor
    : muted
    ? colors.mutedTextColor
    : colors.normalTextColor;

  const textLineHeight = lineHeight ? {lineHeight: scaledSize(lineHeight)} : {};

  const textDecorator = underline
    ? {textDecorationLine: 'underline'}
    : priceDecorator
    ? {
        textDecorationLine: 'line-through',
        textDecorationColor: priceDecorator.color || '#444',
        textDecorationStyle: priceDecorator.style || 'solid',
      }
    : null;

  const textMargin = margin && {
    marginTop: margin.top,
    marginRight: margin.right,
    marginBottom: margin.bottom,
    marginLeft: margin.left,
  };

  const textWidth = width ? {width} : {};
  const textHeight = (height && {height}) || {};

  const textStyle = {
    ...textWidth,
    ...textHeight,
    paddingBottom: 0,
    paddingTop: 0,
    fontFamily: textFont,
    fontWeight:
      lang && lang === 'en'
        ? bold
          ? 'bold'
          : medium
          ? '800'
          : light
          ? '400'
          : thin
          ? '200'
          : 'normal'
        : 'normal',
    fontSize: textSize,
    color: textColor,
    textAlign: textAlign || 'right',
    ...textDecorator,
    ...textLineHeight,
    ...(cover && {flex: 1}),
    ...(block && {width: '100%'}),
    ...textMargin,
  };

  const allProps = {
    ...props,
    allowFontScaling: false,
    style: {...textStyle, ...style},
  };

  const content = priceFormat ? priceFormatter(children) : children;

  return animated ? (
    <Animated.Text {...allProps}>{content}</Animated.Text>
  ) : animatable ? (
    <Animatable.Text {...allProps}>{content}</Animatable.Text>
  ) : (
    <Text {...allProps}>{content}</Text>
  );
};

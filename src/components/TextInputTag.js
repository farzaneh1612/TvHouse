import React, {useRef, useState} from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {TextTag} from './TextTag';
import {colors} from '../styles';
import {priceFormatter, scaledSize, setShadow, setSize} from '../functions';
import Icon from './Icon';
import {TextTag as Text} from './TextTag';
import {Platform} from 'react-native';
import {baseWidth, fonts} from '../constants';

const InputAndErrorWrapper = ({
  width: wrapperWidth,
  block,
  fixPosition,
  children,
  rightAlign,
  leftAlign,
  margin,
  wrapperStyle,
}) => {
  const width = (block && '100%') || wrapperWidth;
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
  const wrapperMargin = margin
    ? {
        marginTop: margin.top,
        marginLeft: margin.left,
        marginRight: margin.right,
        marginBottom: margin.bottom,
      }
    : {};

  const textAndErrorWrapperStyle = {
    width,
    marginLeft,
    marginRight,
    alignSelf,
    ...position,
    ...wrapperMargin,
    ...wrapperStyle,
  };

  return <View style={textAndErrorWrapperStyle}>{children}</View>;
};

const InputWrapper = ({
  height: inputHeight,
  radius,
  rounded,
  shadow,
  transparent,
  bgColor,
  children,
  bordered,
  inputWrapperStyle,
}) => {
  const height = inputHeight;
  const borderRadius = (rounded && height) || radius;
  const backgroundColor = (transparent && 'transparent') || bgColor;
  const borderWidth = bordered ? bordered.width || 1 : 0;
  const borderColor = bordered?.color || colors.muted;
  const inputShadow = transparent ? 0 : shadow;

  const fieldWrapperStyle = {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderColor,
    overflow: 'hidden',
    ...setShadow(inputShadow),
    ...inputWrapperStyle,
  };

  return <View style={fieldWrapperStyle}>{children}</View>;
};

export const TextInputTag = ({
  errorText,
  disableErrorText,
  font,
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
  textAlign,
  priceFormat,
  inputRef,
  width,
  block,
  fixPosition,
  rightAlign,
  leftAlign,
  margin,
  wrapperStyle,
  height,
  radius,
  rounded,
  shadow,
  transparent,
  bgColor,
  bordered,
  inputWrapperStyle,
  iconLeft,
  iconRight,
  placeholder,
  placeholderTextColor,
  textHorizontalPadding,
  value,
  onChangeText,
  defaultValue,
  clearButton,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  maxLength,
  onFocus,
  secureTextEntry,
  editable,
  ...props
}) => {
  const inputAndErrorWrapperProps = {
    width,
    block,
    fixPosition,
    rightAlign,
    leftAlign,
    margin,
    wrapperStyle,
  };

  const inputWrapperProps = {
    height,
    radius,
    rounded,
    shadow,
    transparent,
    bgColor,
    bordered,
    inputWrapperStyle,
  };

  const fontSize = size
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

  const fontFamily =
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

  const textInputStyle = {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    height,
    textAlign,
    paddingHorizontal: textHorizontalPadding
      ? textHorizontalPadding
      : iconLeft || iconRight
      ? 0
      : setSize(7),
    fontFamily,
    fontSize,
    color: textColor,
  };

  const iconWrapperStyle = {
    width: height,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const [input, setInput] = useState('');

  let textInputRef = useRef();

  const _onChangeText = inputValue => {
    const cleanText = inputValue.replace(/,/g, '');
    const formattedText = priceFormatter(cleanText);
    setInput(!priceFormat ? cleanText : formattedText);
  };

  const papularProps = {
    onFocus,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    maxLength,
    defaultValue,
    secureTextEntry,
    editable,
  };

  const spacePattern = /\s\s+/g;

  return (
    <InputAndErrorWrapper {...inputAndErrorWrapperProps}>
      <InputWrapper {...inputWrapperProps}>
        {iconLeft &&
          (iconLeft?.component ? (
            iconLeft.component
          ) : (
            <View style={iconWrapperStyle}>
              <Icon size={height / 2} {...iconLeft} />
            </View>
          ))}

        {clearButton && input.length > 0 && (
          <Icon
            margin={{left: !iconLeft && setSize(10)}}
            size={height / 2.45}
            type="material-community-icons"
            name="close"
            color="#ccc"
            {...clearButton}
            onPress={() => {
              setInput('');
              inputRef
                ? inputRef.current.clear()
                : textInputRef.current.clear();
              clearButton?.onPress && clearButton?.onPress();
            }}
          />
        )}
        <TextInput
          {...props}
          {...papularProps}
          ref={inputRef ? inputRef : textInputRef}
          placeholder={placeholder}
          style={textInputStyle}
          selectionColor="#999"
          allowFontScaling={false}
          value={(value && value) || (priceFormat && input) || null}
          onChangeText={inputText => {
            _onChangeText(inputText);
            onChangeText && onChangeText(inputText);
          }}
          blurOnSubmit={true}
          onBlur={() => {
            if (spacePattern.test(input)) {
              inputRef
                ? inputRef.current.clear()
                : textInputRef.current.clear();
            }
          }}
          placeholderTextColor={placeholderTextColor}
          multiline={
            secureTextEntry ? false : Platform.OS === 'ios' ? false : true
          }
          numberOfLines={1}
        />

        {iconRight &&
          (iconRight?.component ? (
            iconRight.component
          ) : (
            <View style={iconWrapperStyle}>
              <Icon size={height / 2} {...iconRight} />
            </View>
          ))}
      </InputWrapper>
      {!disableErrorText && (
        <View
          justifyContent="center"
          minHeight={setSize(20)}
          marginBottom={setSize(10)}>
          {errorText && (
            <Text
              small
              lineHeight={setSize(18)}
              margin={{left: setSize(8), right: setSize(8)}}
              color={errorText?.color || '#f22'}>
              {errorText?.text}
            </Text>
          )}
        </View>
      )}
    </InputAndErrorWrapper>
  );
};

TextTag.propTypes = {
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  fixPosition: PropTypes.object,
  rightAlign: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  leftAlign: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  margin: PropTypes.object,
  wrapperStyle: PropTypes.object,
  radius: PropTypes.number,
  rounded: PropTypes.bool,
  shadow: PropTypes.number,
  transparent: PropTypes.bool,
  bgColor: PropTypes.string,
  bordered: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  inputWrapperStyle: PropTypes.object,
  placeholderTextColor: PropTypes.string,
  textAlign: PropTypes.string,
  value: PropTypes.any,
};

TextInputTag.defaultProps = {
  width: baseWidth,
  height: setSize(45),
  radius: setSize(5),
  bordered: {color: colors.muted},
  bgColor: '#fff',
  shadow: 0,
  placeholderTextColor: '#999',
  textAlign: 'right',
};

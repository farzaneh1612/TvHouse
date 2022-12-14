import React, {useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DEVICE_WIDTH} from '../../constants/device-info';
import {setSize} from '../../functions';
import {Text, Badge} from '..';
import {colors} from '../../styles';

export default function SpecialOfferBox(props) {
  // props
  const {
    items, // an array of items to show
    width, // slide show width (width of each item)
    height, // slide show height (height of each item)
    itemWrapperStyle, // styles for item container
    dot, // dots properties - this is an object that contain: {color: string, width: number, height: number }
    activeDot, // active dot properties that like dot prop
    dotsSpace, // space between dots
    dotsWrapperStyle, // styles for dots container
    onPress, // onPress event for each item
    imageKeyName, // if you want to show an array of object that contain images, you must set the imageKeyName prop that is key name of images in objects
    renderItem, // render custom components for each item
    activeOpacity, // activeOpacity for item container touchable
    imageStyle, // styles for each image
  } = props;

  const scrollX = useRef(new Animated.Value(0)).current;

  const thisWidth = width || DEVICE_WIDTH;
  const thisHeight = height || '100%';

  const dotInfo = {color: '#fff', width: 10, height: 10, ...dot};
  const activeDotInfo = {color: '#ac6700', width: 20, height: 10, ...activeDot};
  const spaceBetweenDots = dotsSpace || 0;

  const lastIndex = items.length - 1;

  const dotsWidthAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.width, dotInfo.width, dotInfo.width],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.width, dotInfo.width, activeDotInfo.width],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.width,
        dotInfo.width,
        activeDotInfo.width,
        dotInfo.width,
        dotInfo.width,
      ],
    });
  });

  const dotsHeightAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.height, dotInfo.height, dotInfo.height],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.height, dotInfo.height, activeDotInfo.height],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.height,
        dotInfo.height,
        activeDotInfo.height,
        dotInfo.height,
        dotInfo.height,
      ],
    });
  });

  const dotsBgColorAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.color, dotInfo.color, dotInfo.color],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.color, dotInfo.color, activeDotInfo.color],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.color,
        dotInfo.color,
        activeDotInfo.color,
        dotInfo.color,
        dotInfo.color,
      ],
    });
  });
  const innerWidth = setSize(180, 200, 230);
  const innerHeight = setSize(230, 260, 295);
  const imageWidth = setSize(140, 166, 185);
  const infoSectionRadius = setSize(20, 22, 25);
  const titleHeight = setSize(25, 35, 40);

  const styles = StyleSheet.create({
    innerWrapper: {
      width: innerWidth,
      height: innerHeight,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    titleWrapper: {
      height: titleHeight,
      justifyContent: 'center',
      textAlign: 'right',
    },
    priceSectionWrapper: {
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    infoSection: {
      width: innerWidth,
      height: innerHeight,
      borderRadius: infoSectionRadius,
      justifyContent: 'flex-end',
      paddingRight: 20,
      paddingBottom: 3,
      paddingHorizontal: 7,
      borderColor: '#DAE3EC',
    },

    image: {
      width: imageWidth,
      height: imageWidth,
      alignSelf: 'center',
      top: 0,
      transform: [{scaleX: -1}],
      zIndex: 2,
      position: 'absolute',
    },
    wrapper: {
      width: thisWidth,
      height: thisHeight,
    },

    dotsWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
      bottom: 30,
      position: 'absolute',
      zIndex: 2,
      ...dotsWrapperStyle,
    },

    dotWrapper: {
      width: activeDotInfo.width,
      height: activeDotInfo.height,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: spaceBetweenDots,
    },

    dot: {
      height: 10,
      borderRadius: 10,
      marginHorizontal: 10,
    },

    fit: {width: '100%', height: '100%', alignSelf: 'center'},

    itemWrapper: {alignContent: 'center', justifyContent: 'center'},
  });

  return (
    <View style={styles.wrapper}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index + ''}
            activeOpacity={activeOpacity || 0.9}
            onPress={() => onPress && onPress(item)}
            style={{
              ...styles.itemWrapper,
              ...itemWrapperStyle,
              width: thisWidth,
            }}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <View style={styles.infoSection}>
                <FastImage
                  source={item.imageSrc}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text
                  bold
                  small
                  titleStyle
                  numberOfLines={1}
                  color={colors.gray}>
                  {item.name}
                </Text>
                <Text
                  bold
                  small
                  titleStyle
                  numberOfLines={1}
                  color={colors.gray}>
                  {item.size}
                </Text>

                <View style={styles.priceSectionWrapper}>
                  {item.discountPercent && (
                    <Badge
                      position={{bottom: 0}}
                      label={{text: item.discountPercent + '%', size: 12}}
                      height={23}
                      width={23}
                    />
                  )}
                  <View>
                    {item.price && (
                      <Text color={colors.priceColor} small lineHeight={20}>
                        <Text
                          color={colors.priceColor}
                          bold
                          priceFormat
                          lineHeight={25}>
                          {item.price}
                        </Text>{' '}
                        تومان
                      </Text>
                    )}
                    {item.prevPrice && (
                      <Text
                        muted
                        priceDecorator
                        small
                        priceFormat
                        lineHeight={20}>
                        {item.prevPrice}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dotsWrapper}>
        {items.map((_, i) => (
          <View key={i + ''} style={styles.dotWrapper}>
            <Animated.View
              style={{
                ...styles.dot,
                backgroundColor: dotsBgColorAnim[i],
                width: dotsWidthAnim[i],
                height: dotsHeightAnim[i],
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {setSize} from '../../functions';
import {colors} from '../../styles';
import {Text, Badge} from '..';

export default function BoxOfProduct({item}) {
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
    },
    priceSectionWrapper: {
      paddingBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    infoSection: {
      width: innerWidth,
      height: innerHeight,
      borderRadius: infoSectionRadius,
      justifyContent: 'flex-end',
      paddingBottom: 3,
      paddingHorizontal: 7,
      borderWidth: 1,
      borderColor: colors.borderColor,
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
  });

  return (
    <View>
      <TouchableOpacity style={styles.innerWrapper}>
        <View style={styles.infoSection}>
          <FastImage
            source={item.imageSrc}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.titleWrapper}>
            <Text
              bold
              small
              titleStyle
              numberOfLines={1}
              lineHeight={35}
              color={colors.gray}>
              {item.name}
            </Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text bold small titleStyle numberOfLines={1} color={colors.gray}>
              {item.size}
            </Text>
          </View>

          <View style={styles.priceSectionWrapper}>
            {item.discountPercent && (
              <Badge
                position={{bottom: 2}}
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
                <Text muted priceDecorator small priceFormat lineHeight={20}>
                  {item.prevPrice}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

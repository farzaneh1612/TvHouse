import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Badge, Button, Text} from '..';
import {baseWidth, baseSidesSpace} from '../../constants';
import {setSize} from '../../functions';
import {colors} from '../../styles';

export default function ListOfProduct({item}) {
  return (
    <View>
      <View style={styles.leftView}>
        <View style={styles.title}>
          <View>
            <Text color={colors.black} bold>
              {item.name}
            </Text>
          </View>
          <View style={styles.mainButton}>
            <Text color={'#707070'} lineHeight={45}>
              {item.size}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
            }}>
            <Text color={'#666'} bold smaller>
              <Text priceFormat color={colors.black} h4>
                {item.price}
              </Text>{' '}
              تومان
            </Text>
          </View>
          <View style={{paddingHorizontal: baseSidesSpace}}>
            {item.discountPercent && (
              <Badge
                position={{bottom: 2}}
                label={{text: item.discountPercent + '%', size: 12}}
                height={23}
                width={23}
              />
            )}
          </View>
        </View>

        <FastImage
          style={{
            width: setSize(137, 75, 85),
            height: setSize(113, 75, 85),
          }}
          source={item.imageSrc}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  leftView: {
    paddingHorizontal: baseSidesSpace,
    paddingVertical: baseSidesSpace,
    marginVertical: baseSidesSpace / 2,
    width: baseWidth,
    height: setSize(150, 130, 140),
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.borderColor,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: baseSidesSpace,
    justifyContent: 'flex-start',
  },
  mainButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  countCustom: {
    alignSelf: 'center',
  },
});

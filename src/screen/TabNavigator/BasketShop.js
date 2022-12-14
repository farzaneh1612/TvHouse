import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Image,
  Text,
  Button,
  TextInput,
  Badge,
} from '../../components';
import Header from '../../components/custom/Header';
import {setSize} from '../../functions';
import {colors} from '../../styles';
import {baseWidth, baseSidesSpace, backLight} from '../../constants';
import FastImage from 'react-native-fast-image';
import ItemRow from '../../components/custom/ItemRow';

export default function BasketShop() {
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1);

  // methods
  const addOne = () => {
    setCount(count => count + 1);
  };

  const removeOne = () => {
    setCount(count => (count > 1 ? count - 1 : 1));
  };

  return (
    <SafeContainer>
      <Header title={'سبد خرید'} iconRight={null} />
      <Container>
        <ScrollContainer>
          <View>
            <View style={styles.leftView}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.title}>
                  <View>
                    <Text color={colors.black} bold>
                      بک لایت برند سونی{' '}
                    </Text>
                  </View>
                  <View>
                    <Text color={'#707070'}>گارانتی اصالت و سلامت کالا </Text>
                    <Text color={'#707070'}>موجود در انبار </Text>
                    <Text color={'#707070'}>ارسال از ۲ روز کاری دیگر </Text>
                  </View>
                </View>

                <FastImage
                  style={{
                    width: setSize(baseWidth / 2.5, 75, 85),
                    height: setSize(113, 75, 85),
                  }}
                  source={require('../../assests/testImage/3.jpg')}
                />
              </View>

              <View style={styles.priceView}>
                <Text color={'#666'} bold smaller>
                  <Text priceFormat color={colors.black} h4>
                    30000{' '}
                  </Text>{' '}
                  تومان
                </Text>
                {/* <View
                  style={{
                    paddingHorizontal: baseSidesSpace,
                    justifyContent: 'center',
                  }}>
                  {'3%' && (
                    <Badge
                      position={{lef: baseSidesSpace * 2}}
                      label={{
                        text: backLight.discountPercent + '%',
                        size: 12,
                      }}
                      height={23}
                      width={23}
                    />
                  )}
                </View> */}
                <View style={styles.addMinusButton}>
                  <Button
                    onPress={() => removeOne()}
                    bordered={{color: colors.muted}}
                    shadow={0}
                    width={30}
                    radius={30}
                    height={30}
                    margin={{left: baseSidesSpace, right: baseSidesSpace}}
                    iconLeft={{
                      name: 'minus',
                      type: 'entypo',
                      color: colors.black,
                    }}
                  />

                  <TextInput
                    onChangeText={text => setCount({text})}
                    textAlign={'center'}
                    black
                    medium
                    value={count + ''}
                    width={60}
                    height={40}
                    disableErrorText
                    bordered={{color: colors.muted}}
                  />
                  <Button
                    onPress={() => addOne()}
                    bordered={{color: colors.muted}}
                    shadow={0}
                    radius={30}
                    width={30}
                    height={30}
                    margin={{left: baseSidesSpace}}
                    iconLeft={{
                      name: 'plus',
                      type: 'entypo',
                      color: colors.black,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: baseSidesSpace,
              }}>
              <Text textAlign={'right'} medium color={colors.baseColor1}>
                خلاصه خرید
              </Text>
              <ItemRow
                title={{text: 'قیمت کالاها '}}
                value={{text: '598000 تومان '}}
              />
              <ItemRow
                title={{text: 'تخفیف کالاها '}}
                value={{text: '299000 تومان '}}
              />
              <ItemRow
                title={{text: 'جمع سبدخرید'}}
                value={{text: '299000 تومان '}}
              />
              <ItemRow
                title={{text: 'جمع سبدخرید'}}
                value={{text: '299000 تومان '}}
              />
              <ItemRow
                title={{text: 'جمع سبدخرید'}}
                value={{text: '299000 تومان '}}
              />
              <ItemRow
                title={{text: 'جمع سبدخرید'}}
                value={{text: '299000 تومان '}}
              />
            </View>
          </View>
        </ScrollContainer>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: baseSidesSpace,
            paddingVertical: baseSidesSpace,
          }}>
          <Text color={'#666'} bold smaller>
            <Text priceFormat color={colors.black} h4>
              30000{' '}
            </Text>
            تومان
          </Text>
          <Button
            onPress={() => removeOne()}
            bordered={{color: colors.muted}}
            shadow={0}
            width={setSize(120)}
            radius={setSize(10)}
            height={setSize(60)}
            margin={{left: baseSidesSpace, right: baseSidesSpace}}
            label={{text: 'ادامه فرآیند خرید', color: colors.baseColor2}}
          />
        </View>
      </Container>
    </SafeContainer>
  );
}
const styles = StyleSheet.create({
  leftView: {
    paddingHorizontal: baseSidesSpace,
    paddingVertical: baseSidesSpace,
    marginVertical: baseSidesSpace / 2,
    width: baseWidth,
    height: baseWidth / 1.5,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.borderColor,
    alignItems: 'flex-start',
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
  priceView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingVertical: baseSidesSpace,
  },
  addMinusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

//             <View style={styles.infoSection}>
//               <View style={{borderWidth: 1}}>
//                 <View
//                   style={{
//                     paddingVertical: baseSidesSpace,
//                     justifyContent: 'flex-start',
//                     paddingHorizontal: baseSidesSpace,
//                   }}>
//                   <Text lineHeight={30} bold>
//                     بک لایت برند سامسونگ
//                   </Text>
//                   <Text lineHeight={30}>شمانت اصالت و کیفیت کالا</Text>
//                   <Text lineHeight={30}>خانه تلویزیون</Text>
//                 </View>
//                 <View style={{paddingHorizontal: baseSidesSpace}}>
//                   <Text bold>بک لایت برند سامسونگ</Text>
//                 </View>
//               </View>
//               <FastImage
//                 style={{
//                   width: baseWidth / 2 - baseSidesSpace * 2,
//                   height: setSize(113, 75, 85),
//                   borderWidth: 1,
//                 }}
//                 source={require('../../assests/testImage/2.jpg')}
//               />
//             </View>
//           </View>
//         </ScrollContainer>
//       </Container>
//     </SafeContainer>
//   );
// }

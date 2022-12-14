// import React, {useState} from 'react';
// import {View, StyleSheet, FlatList} from 'react-native';
// import Header from 'TvHouse/src/components/custom/Header';
// import {DEVICE_WIDTH} from 'TvHouse/src/constants';
// import {
//   brand,
//   swiper,
//   backLight,
//   specialOffer,
// } from 'TvHouse/src/constants/constAray';
// import {colors} from 'TvHouse/src/styles';
// import {setSize} from 'TvHouse/src/functions';
// import {
//   SafeContainer,
//   Container,
//   ScrollContainer,
//   Icon,
//   Timer,
//   Text,
//   Button,
//   Swiper,
//   Picker,
// } from '../../components';
// import BoxOfProduct from '../../components/custom/BoxOfProduct';
// import SpecialOfferBox from '../../components/custom/SpecialOfferBox';
// import {size} from '../../constants';

// export default function Home() {
//   const [subjectState, setSubject] = useState('');
//   const [sizeState, setSize] = useState('');

//   return (
//     <SafeContainer>
//       <Header title={'خانـه تلویـزیـون'} />
//       <ScrollContainer>
//         <Container>
//           <Swiper
//             activeDot={{color: colors.baseColor1, borderRadius: 10}}
//             dot={{color: colors.baseColor2}}
//             width={DEVICE_WIDTH}
//             height={200}
//             imageKeyName={'image'}
//             items={swiper}
//           />
//           <View style={styles.mainView}>
//             <View style={styles.boxStyle}>
//               <View style={styles.textTitle}>
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={8}
//                   type={'font-awesome'}
//                 />
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={10}
//                   type={'font-awesome'}
//                 />
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={12}
//                   type={'font-awesome'}
//                 />
//                 <Text
//                   textAlign={'center'}
//                   h3
//                   bold
//                   color={colors.black}
//                   style={styles.iconTitle}>
//                   مشــاهده محصـولات
//                 </Text>
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={12}
//                   type={'font-awesome'}
//                 />
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={10}
//                   type={'font-awesome'}
//                 />
//                 <Icon
//                   color={colors.black}
//                   style={styles.iconTitle}
//                   name={'circle'}
//                   size={8}
//                   type={'font-awesome'}
//                 />
//               </View>

//               <View style={styles.innerWrapper}>
//                 <View>
//                   <Text color={'#fff'} style={{paddingBottom: 2}} size={13}>
//                     برند دستگاه{' '}
//                   </Text>
//                   <Picker
//                     width={setSize(150)}
//                     radius={7}
//                     height={40}
//                     textInputStyle={styles.textInputStyle}
//                     searchEnable
//                     items={brand}
//                     keyName={'title'}
//                     placeholder="نام تجاری"
//                     iconLeft={{
//                       type: 'ion',
//                       name: 'ios-chevron-down-sharp',
//                       size: 18,
//                     }}
//                     onSelectValue={val => {
//                       setSubject(val.id);
//                     }}
//                   />
//                 </View>
//                 <View>
//                   <Text color={'#fff'} style={{paddingBottom: 2}} size={13}>
//                     اینج دستگاه{' '}
//                   </Text>
//                   <Picker
//                     width={setSize(150)}
//                     height={40}
//                     radius={7}
//                     textInputStyle={styles.textInputStyle}
//                     searchEnable
//                     items={size}
//                     keyName={'title'}
//                     placeholder="اندازه"
//                     iconLeft={{
//                       type: 'ion',
//                       name: 'ios-chevron-down-sharp',
//                       size: 18,
//                     }}
//                     onSelectValue={val => {
//                       setSize(val.id);
//                     }}
//                   />
//                 </View>
//               </View>
//               <Button
//                 block
//                 width={setSize(160)}
//                 bgColor={colors.baseColor1}
//                 label={{
//                   textAlign: 'center',
//                   text: 'نمایش محصـولات',
//                   color: '#fff',
//                 }}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'flex-start',
//                 justifyContent: 'center',
//                 marginBottom: 25,
//               }}></View>

//             <Text h2 bold textAlign={'right'}>
//               پیشنهـــاد ویـــژه
//             </Text>
//             <View
//               style={{
//                 alignSelf: 'flex-start',
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 height: 250,
//               }}>
//               <View style={{width: '60%'}}>
//                 <SpecialOfferBox
//                   dotsWrapperStyle={{bottom: 0}}
//                   items={specialOffer}
//                   width={170}
//                   activeDot={{color: colors.baseColor1}}
//                   dot={{color: colors.gray}}
//                 />
//               </View>
//               <Timer expireTime={'2021-04-29 23:59:59'} />
//             </View>
//             <Text bold style={styles.rowTitle}>
//               جدیـدترین محصـولات
//             </Text>
//             <FlatList
//               data={backLight}
//               horizontal
//               inverted
//               contentContainerStyle={styles.contentContainer}
//               showsHorizontalScrollIndicator={false}
//               keyExtractor={(item, index) => index + ''}
//               renderItem={({item, index}) => (
//                 <BoxOfProduct item={item} index={index} />
//               )}
//             />
//             <Text bold style={styles.rowTitle}>
//               محبـوب ترین محصـولات{' '}
//             </Text>
//             <FlatList
//               data={backLight}
//               horizontal
//               inverted
//               contentContainerStyle={styles.contentContainer}
//               showsHorizontalScrollIndicator={false}
//               keyExtractor={(item, index) => index + ''}
//               renderItem={({item, index}) => (
//                 <BoxOfProduct item={item} index={index} />
//               )}
//             />
//             <Text bold style={styles.rowTitle}>
//               پرفـروش ترین محصـولات
//             </Text>
//             <FlatList
//               data={backLight}
//               horizontal
//               inverted
//               showsHorizontalScrollIndicator={false}
//               keyExtractor={(item, index) => index + ''}
//               renderItem={({item, index}) => (
//                 <BoxOfProduct item={item} index={index} />
//               )}
//             />
//           </View>
//         </Container>
//       </ScrollContainer>
//     </SafeContainer>
//   );
// }
// const styles = StyleSheet.create({
//   mainView: {paddingHorizontal: 20, flex: 1},
//   boxStyle: {
//     backgroundColor: colors.baseColor2,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   textTitle: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   iconTitle: {paddingHorizontal: 2},
//   innerWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 5,
//   },
//   textInputStyle: {backgroundColor: '#f1f1f1'},
//   specialOffer: {width: setSize(150), height: setSize(150)},
//   rowTitle: {
//     marginBottom: setSize(10, 15, 15),
//     marginTop: setSize(20, 25, 30),
//   },
//   contentContainer: {paddingRight: setSize(15, 17, 20)},
// });

import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Swiper,
  Icon,
  Picker,
  Button,
  Text,
  Timer,
} from '../../components';

import SpecialOfferBox from '../../components/custom/SpecialOfferBox';
import BoxOfProduct from '../../components/custom/BoxOfProduct';

import Header from '../../components/custom/Header';
import {
  baseSidesSpace,
  baseWidth,
  swiper,
  specialOffer,
  brand,
  size,
  backLight,
} from '../../constants';
import {setSize} from '../../functions';
import {colors} from '../../styles';
export default function Home() {
  return (
    <SafeContainer>
      <Header title={'خانـه تلویـزیـون'} />
      <ScrollContainer>
        <Container>
          <View style={{paddingHorizontal: baseSidesSpace}}>
            <Swiper
              activeDot={{color: colors.baseColor1, borderRadius: 10}}
              dot={{color: colors.baseColor2}}
              width={setSize(baseWidth)}
              height={setSize(200)}
              imageKeyName={'image'}
              items={swiper}
            />
          </View>
          <View style={styles.mainView}>
            <View style={styles.boxStyle}>
              <View style={styles.textTitle}>
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={8}
                  type={'font-awesome'}
                />
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={10}
                  type={'font-awesome'}
                />
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={12}
                  type={'font-awesome'}
                />
                <Text
                  medium
                  h5
                  textAlign={'center'}
                  bold
                  color={colors.black}
                  style={styles.iconTitle}>
                  مشــاهده محصـولات
                </Text>
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={12}
                  type={'font-awesome'}
                />
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={10}
                  type={'font-awesome'}
                />
                <Icon
                  color={colors.black}
                  style={styles.iconTitle}
                  name={'circle'}
                  size={8}
                  type={'font-awesome'}
                />
              </View>

              <View style={styles.innerWrapper}>
                <View>
                  <Text color={'#fff'} style={{paddingBottom: 2}} size={13}>
                    برند دستگاه{' '}
                  </Text>
                  <Picker
                    width={setSize(150)}
                    height={setSize(40)}
                    textInputStyle={styles.textInputStyle}
                    searchEnable
                    items={brand}
                    titleKeyName={'title'}
                    placeholder="نام تجاری"
                    iconLeft={{
                      type: 'ion',
                      name: 'ios-chevron-down-sharp',
                      size: 18,
                    }}
                    onSelectValue={val => {
                      setSubject(val.id);
                    }}
                  />
                </View>
                <View>
                  <Text color={'#fff'} style={{paddingBottom: 2}} size={13}>
                    اینج دستگاه{' '}
                  </Text>
                  <Picker
                    width={setSize(150)}
                    height={setSize(40)}
                    textInputStyle={styles.textInputStyle}
                    searchEnable
                    items={size}
                    keyName={'title'}
                    placeholder="اندازه"
                    iconLeft={{
                      type: 'ion',
                      name: 'ios-chevron-down-sharp',
                      size: 18,
                    }}
                    onSelectValue={val => {
                      setSize(val.id);
                    }}
                  />
                </View>
              </View>
              <Button
                style={{marginBottom: baseSidesSpace}}
                width={setSize(160)}
                bgColor={colors.baseColor1}
                label={{
                  bold: true,
                  textAlign: 'center',
                  text: 'نمایش محصـولات',
                  color: '#fff',
                }}
              />
            </View>
            <View style={{paddingHorizontal: baseSidesSpace}}>
              <Text bold h4 textAlign={'right'}>
                پیشنهـــاد ویـــژه
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 250,
              }}>
              <View style={{width: '60%'}}>
                <SpecialOfferBox
                  dotsWrapperStyle={{bottom: 0}}
                  items={specialOffer}
                  width={170}
                  activeDot={{color: colors.baseColor1}}
                  dot={{color: colors.gray}}
                />
              </View>
            </View>
            <Text bold style={styles.rowTitle}>
              جدیـدترین محصـولات
            </Text>

            <FlatList
              data={backLight}
              horizontal
              inverted
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index + ''}
              renderItem={({item, index}) => (
                <BoxOfProduct item={item} index={index} />
              )}
            />
            <Text bold style={styles.rowTitle}>
              محبـوب ترین محصـولات{' '}
            </Text>
            <FlatList
              data={backLight}
              horizontal
              inverted
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index + ''}
              renderItem={({item, index}) => (
                <BoxOfProduct item={item} index={index} />
              )}
            />
            <Text bold style={styles.rowTitle}>
              پرفـروش ترین محصـولات
            </Text>
            <FlatList
              data={backLight}
              horizontal
              inverted
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index + ''}
              renderItem={({item, index}) => (
                <BoxOfProduct item={item} index={index} />
              )}
            />
          </View>
        </Container>
      </ScrollContainer>
    </SafeContainer>
  );
}
const styles = StyleSheet.create({
  mainView: {flex: 1},
  boxStyle: {
    backgroundColor: colors.baseColor2,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: baseSidesSpace,
    marginVertical: baseSidesSpace,
  },
  textTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconTitle: {paddingHorizontal: 2},
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: baseSidesSpace,
  },
  textInputStyle: {backgroundColor: '#f1f1f1'},
  specialOffer: {width: setSize(150), height: setSize(150)},
  rowTitle: {
    marginBottom: setSize(10, 15, 15),
    marginTop: setSize(20, 25, 30),
    paddingHorizontal: baseSidesSpace,
  },
  contentContainer: {paddingHorizontal: baseSidesSpace},
});

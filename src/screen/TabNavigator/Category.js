import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {
  Button,
  Text,
  Container,
  SafeContainer,
  ScrollContainer,
  Image,
  Icon,
  Loading,
} from '../../components';
import CheckBoxList from '../../components/CheckBoxList';
import ListOfProduct from '../../components/custom/ListOfProduct';
import Header from '../../components/custom/Header';

import {
  backLight,
  baseSidesSpace,
  baseWidth,
  brand,
  size,
  colorArray,
  categories,
  DEVICE_WIDTH,
} from '../../constants';
import {isDarkColor, setShadow} from '../../functions';
import {colors} from '../../styles';
const ButtonWidth = baseWidth / 2;
const pricePadding = baseSidesSpace / 2;
export default function Category() {
  const [showList, setShowList] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [items, setItems] = useState();
  const [type, setType] = useState();
  const [brandState, setBrandState] = useState([]);
  const [sizeState, setSizeState] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState();
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(10000);
  const [initialMax, setInitialMax] = useState(10000);
  const [initialMin, setInitialMin] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadingData();
  }, [loading]);

  const loadingData = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const select = item => {
    const indexOfItem = color.indexOf(item);

    if (indexOfItem !== -1) {
      setColor([
        ...color.slice(0, indexOfItem),
        ...color.slice(indexOfItem + 1),
      ]);
    } else {
      setColor(prevSelected => [...prevSelected, item]);
    }
  };

  const showModal = (type, array) => {
    setItems(array);
    setType(type);
    setShowList(true);
  };

  return (
    <SafeContainer>
      <Header title={'لیست محصولات'} iconRight={null} />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={showList}
              onRequestClose={() => setShowList(false)}>
              <ScrollContainer>
                <SafeContainer bgColor="transparent">
                  <View flex={1} />
                  <View style={styles.wrapper}>
                    <View style={styles.header}>
                      <Button
                        onPress={() => {
                          setShowList(false);
                          type === 'brand'
                            ? setBrandState([])
                            : setSizeState([]);
                        }}
                        circle
                        radius={50}
                        leftAlign
                        label={{text: 'انصراف', color: '#f77', size: 12}}
                        bgColor="transparent"
                        shadow={0}
                      />
                      <View style={{flex: 1}} />
                      <Button
                        onPress={() => {
                          setShowList(false);
                          setLoading(true);
                        }}
                        circle
                        radius={50}
                        leftAlign
                        label={{text: 'تایید', color: colors.gray, size: 12}}
                        bgColor="transparent"
                        shadow={0}
                      />
                    </View>
                    <View>
                      <CheckBoxList
                        onChangeCheckedItems={checkedItems => {
                          type === 'brand'
                            ? setBrandState(checkedItems)
                            : setSizeState(checkedItems);
                        }}
                        defaultCheckedItems={
                          type === 'brand' ? brandState : sizeState
                        }
                        itemsProp={items}
                      />
                    </View>
                  </View>
                </SafeContainer>
              </ScrollContainer>
            </Modal>
          </View>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={showMore}
              onRequestClose={() => setShowList(false)}>
              <ScrollContainer>
                <SafeContainer bgColor="transparent">
                  <View flex={1} />
                  <View style={styles.wrapper}>
                    <View style={styles.header}>
                      <Button
                        onPress={() => {
                          setShowMore(false);
                          setColor([]);
                          setSelectedMaxPrice(10000);
                          setSelectedMinPrice(0);
                          setSelectedCategory([]);
                        }}
                        circle
                        radius={50}
                        leftAlign
                        label={{text: 'انصراف', color: '#f77', size: 12}}
                        bgColor="transparent"
                        shadow={0}
                      />
                      <View style={{flex: 1}} />
                      <Button
                        onPress={() => {
                          setShowMore(false);
                          setLoading(true);
                        }}
                        circle
                        radius={50}
                        leftAlign
                        label={{text: 'تایید', color: colors.gray, size: 12}}
                        bgColor="transparent"
                        shadow={0}
                      />
                    </View>
                    <View>
                      <View
                        style={{
                          paddingHorizontal: baseSidesSpace,
                          backgroundColor: colors.backgroundColor,
                        }}>
                        <Text bold>رنگ ها</Text>
                        <FlatList
                          data={colorArray}
                          horizontal
                          inverted
                          contentContainerStyle={styles.contentContainer}
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={(item, index) => index + ''}
                          renderItem={({item, index}) => (
                            <TouchableOpacity
                              activeOpacity={0.9}
                              style={{
                                marginVertical: baseSidesSpace / 2,
                                marginHorizontal: baseSidesSpace / 2,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: colors.muted,
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: item.title,
                              }}
                              onPress={() => select(item)}>
                              {color.indexOf(item) !== -1 && (
                                <Icon
                                  name={'checkmark'}
                                  size={27}
                                  color={
                                    isDarkColor(item.title) ? '#fff' : '#000'
                                  }
                                />
                              )}
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                      <View
                        style={{
                          paddingHorizontal: baseSidesSpace,
                          marginVertical: baseSidesSpace / 2,
                        }}>
                        <Text h6 bold>
                          محدوده قیمت
                        </Text>
                        <View
                          style={{
                            marginVertical: baseSidesSpace / 2,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}>
                          <Text bold> تومان </Text>
                          <Text priceFormat bold>
                            {initialMax - selectedMinPrice}
                          </Text>
                          <Text bold> تا </Text>
                          <Text bold> تومان </Text>

                          <Text priceFormat bold>
                            {initialMax - selectedMaxPrice}
                          </Text>
                          <Text bold>از </Text>
                        </View>
                        <MultiSlider
                          sliderLength={DEVICE_WIDTH - 3 * baseSidesSpace}
                          values={[selectedMinPrice, selectedMaxPrice]}
                          max={initialMax}
                          min={initialMin}
                          trackStyle={{
                            backgroundColor: '#999',
                            height: 3,
                            borderRadius: 3,
                          }}
                          selectedStyle={{
                            backgroundColor: colors.muted,
                          }}
                          pressedMarkerStyle={{
                            backgroundColor: colors.baseColor2,
                            transform: [{scaleX: 1.1}, {scaleY: 1.1}],
                          }}
                          markerStyle={{
                            width: 15,
                            height: 15,
                            borderRadius: 20,
                            top: 2,
                            elevation: 3,
                            backgroundColor: colors.baseColor2,
                          }}
                          isMarkersSeparated={true}
                          onValuesChangeFinish={e => {
                            setSelectedMinPrice(e[0]);
                            setSelectedMaxPrice(e[1]);
                          }}
                        />
                      </View>
                      <View style={{paddingHorizontal: baseSidesSpace}}>
                        <Text>دسته بندی ها</Text>
                        <View>
                          <CheckBoxList
                            itemStyle={{paddingHorizontal: 0}}
                            onChangeCheckedItems={checkedItems =>
                              setSelectedCategory(checkedItems)
                            }
                            defaultCheckedItems={selectedCategory}
                            itemsProp={categories}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </SafeContainer>
              </ScrollContainer>
            </Modal>
          </View>
          <View
            style={{
              paddingHorizontal: baseSidesSpace / 2,
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              bordered={{color: colors.muted}}
              radius={30}
              shadow={0}
              width={ButtonWidth}
              iconRight={{
                name: 'filter',
                type: 'ant-design',
                size: 25,
                color: colors.gray,
              }}
              label={{
                text: 'فیلترهای بیشتر ',
                size: 14,
                color: colors.baseIconColor,
              }}
              onPress={() => setShowMore(true)}
            />
            <Button
              bordered={{color: colors.muted}}
              radius={30}
              label={{text: 'اینچ', size: 14, color: colors.baseIconColor}}
              width={80}
              shadow={0}
              onPress={() => showModal('size', size)}
            />
            <Button
              bordered={{color: colors.muted, width: 0.5}}
              radius={30}
              borderColor={colors.muted}
              label={{
                text: 'برند تجاری',
                size: 14,
                color: colors.baseIconColor,
              }}
              width={80}
              shadow={0}
              onPress={() => showModal('brand', brand)}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              paddingHorizontal: baseSidesSpace,
              paddingVertical: baseSidesSpace / 2,
            }}>
            <FlatList
              data={backLight}
              inverted
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(item, index) => index + ''}
              renderItem={({item, index}) => (
                <ListOfProduct item={item} index={index} />
              )}
            />
          </View>
        </Container>
      )}
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {paddingRight: baseSidesSpace},
  wrapper: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#ededed',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fefefe',
    ...setShadow(10),
  },

  header: {
    width: '100%',
    borderBottomWidth: 7,
    borderColor: '#f8f8f8',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: '#f9f9f9',
  },
});

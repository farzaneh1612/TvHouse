import React, {useState, useRef, useEffect} from 'react';
import {View, Modal, ScrollView, TouchableOpacity} from 'react-native';
import {SafeContainer} from './Containers';
import {TextInputTag as TextInput} from './TextInputTag';
import {TextTag as Text} from './TextTag';
import Button from './Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {baseSidesSpace, baseWidth, mediumRadius} from '../constants';
import {setShadow, setSize} from '../functions';

export default function Picker({
  items,
  titleKeyName,
  itemsStyle,
  defaultValue,
  searchEnable,
  itemTextProps,
  onSelectValue,
  contentContainerStyle,
  iconRight,
  placeholder,
  ...props
}) {
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState(items);
  const [showList, setShowList] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const title = titleKeyName || 'title';

  const searchBox = useRef();

  useEffect(() => {
    setListItems(items);
  }, [items]);

  const styles = {
    touchable: {
      height: 45,
      borderRadius: mediumRadius,
      position: 'absolute',
      backgroundColor: 'transparent',
      alignSelf: 'center',
    },

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
  };

  const textInputProps = {
    placeholder,
    iconRight,
  };

  return (
    <>
      <View>
        <TextInput
          textHorizontalPadding={baseSidesSpace}
          bordered={false}
          editable={false}
          value={selectedValue}
          {...textInputProps}
          {...props}
        />
        <TouchableOpacity
          onPress={() => setShowList(true)}
          style={{
            ...styles.touchable,
            width: baseWidth,
          }}
        />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showList}
        onRequestClose={() => setShowList(false)}>
        <SafeContainer bgColor="transparent">
          <View flex={1} />
          <View style={{...styles.wrapper, ...contentContainerStyle}}>
            <View style={styles.header}>
              <Button
                onPress={() => {
                  setShowList(false);
                  setListItems(items);
                  setSearchText('');
                }}
                circle
                radius={50}
                leftAlign
                label={{text: 'انصراف', color: '#f77', size: 12}}
                bgColor="transparent"
                shadow={0}
              />
            </View>
            {searchEnable && (
              <TextInput
                disableErrText
                inputRef={searchBox}
                value={searchText}
                onChangeText={text => {
                  const input = text.trim();
                  setSearchText(input);
                  let list = [];
                  items.map(item => {
                    if (item[`${title}`].includes(input)) {
                      list.push(item);
                    }
                  });
                  setListItems(list);
                }}
                placeholder="جستجو کنید"
                iconLeft={
                  searchText.length !== 0 && {
                    name: 'ios-close-outline',
                    size: 25,
                    onPress: () => {
                      if (searchText.length !== 0) {
                        setSearchText('');
                        setListItems(items);
                        searchBox.current.clear();
                      }
                    },
                  }
                }
                iconRight={{name: 'md-search-outline', flip: true}}
              />
            )}

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: getBottomSpace() + setSize(20),
              }}>
              {listItems &&
                listItems.map((item, index) => (
                  <TouchableOpacity
                    key={index + ''}
                    onPress={() => {
                      onSelectValue && onSelectValue(item);
                      setListItems(items);
                      setSelectedValue(item[`${title}`]);
                      setShowList(false);
                      setSearchText('');
                    }}
                    style={{...styles.item, ...itemsStyle}}>
                    <Text numberOfLines={1} {...itemTextProps}>
                      {item[`${title}`]}
                    </Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </SafeContainer>
      </Modal>
    </>
  );
}

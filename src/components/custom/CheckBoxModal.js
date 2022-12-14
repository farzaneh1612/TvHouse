import React, {useState, useRef, useEffect} from 'react';
import {View, Modal, ScrollView, TouchableOpacity} from 'react-native';
import {SafeContainer} from '../Containers';
import {setShadow, setSize} from '../../functions';
import Button from '../Button';
import CheckBoxList from '../CheckBoxList';
import {ScrollContainer} from '..';

export default function CheckBoxModal({
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
  const [listItems, setListItems] = useState(items);
  const [showList, setShowList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const title = titleKeyName || 'title';

  // const searchBox = useRef();

  // useEffect(() => {
  //   setListItems(items);
  // }, [items]);

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
                    }}
                    circle
                    radius={50}
                    leftAlign
                    label={{text: 'انصراف', color: '#f77', size: 12}}
                    bgColor="transparent"
                    shadow={0}
                  />
                </View>
                <View>
                  <CheckBoxList
                    onChangeCheckedIds={checkedIds => console.log(checkedIds)}
                    items={listItems}
                  />
                </View>
              </View>
            </SafeContainer>
          </ScrollContainer>
        </Modal>
      </View>
    </>
  );
}

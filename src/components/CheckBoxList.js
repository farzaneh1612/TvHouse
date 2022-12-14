import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {setSize} from '../functions';
import {TextTag as Text} from './TextTag';
import {RowContainer} from './Containers';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../styles';

const CheckBox = ({
  title,
  wrapperStyle,
  onPress,
  icon,

  titleStyle,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsChecked(!isChecked);
        onPress && onPress();
      }}
      activeOpacity={0.7}
      style={{...styles.CheckBoxWrapper, ...wrapperStyle}}>
      <RowContainer>
        <View style={{...styles.checkBoxTitleWrapper}}>
          <Text lineHeight={setSize(28)} {...titleStyle}>
            {title}
          </Text>
        </View>
        <View>
          <View style={styles.checkBoxIconWrapper}>
            <Icon
              name={isChecked ? 'check-box' : 'check-box-outline-blank'}
              color={isChecked ? colors.baseColor2 : colors.muted}
              size={setSize(23)}
              {...icon}
            />
          </View>
          <View flex={1} />
        </View>
      </RowContainer>
    </TouchableOpacity>
  );
};

export default function CheckBoxList({
  itemsProp,
  titleKeyName,
  itemStyle,
  onChangeCheckedItems,
  onChangeCheckedIds,
  defaultCheckedItems = [],
}) {
  const keyName = titleKeyName || 'title';

  const [selectedItems, setSelectedItems] = useState([...defaultCheckedItems]);
  const [items, setItems] = useState(itemsProp);
  useEffect(() => {
    onChangeCheckedItems && onChangeCheckedItems(selectedItems);
    const ids = [];
    selectedItems.map(checked => ids.push(checked.id));
    onChangeCheckedIds && onChangeCheckedIds(ids);
  }, [selectedItems]);
  useEffect(() => {
    setItems(itemsProp);
  }, [itemsProp]);
  const onCheck = item => {
    const indexOfItem = selectedItems.indexOf(item);

    if (indexOfItem !== -1) {
      setSelectedItems([
        ...selectedItems.slice(0, indexOfItem),
        ...selectedItems.slice(indexOfItem + 1),
      ]);
    } else {
      setSelectedItems(prevSelected => [...prevSelected, item]);
    }
  };

  return items.map((item, index) => (
    <CheckBox
      checked={selectedItems.indexOf(item) !== -1}
      onPress={() => onCheck(item)}
      wrapperStyle={itemStyle}
      title={item[`${keyName}`]}
      key={index + ''}
    />
  ));
}

const styles = StyleSheet.create({
  CheckBoxWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  checkBoxTitleWrapper: {
    flex: 1,
    minHeight: setSize(45),
    paddingVertical: setSize(8, 8, 8),
  },
  checkBoxIconWrapper: {
    width: setSize(40),
    height: setSize(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

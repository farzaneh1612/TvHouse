import React from 'react';
import {View} from 'react-native';
import {RowContainer} from '../Containers';
import Icon from '../Icon';
import {TextTag as Text} from '../TextTag';
import {baseWidth} from '../../constants';
import {setSize} from '../../functions';

export default function ItemRow({
  icon,
  title,
  value,
  hideBorder,
  minHeight,
  mediumHeight,
  maxHeight,
}) {
  const height = minHeight
    ? setSize(35)
    : mediumHeight
    ? setSize(42)
    : setSize(55);

  const valuePaddingTop = minHeight
    ? setSize(2)
    : mediumHeight
    ? setSize(7)
    : setSize(15);

  return (
    <RowContainer
      borderBottomWidth={hideBorder ? 0 : 2}
      borderBottomColor={'#eaeaea'}
      width={baseWidth}
      alignSelf="center">
      <View flex={2} paddingTop={valuePaddingTop} paddingRight={setSize(7)}>
        <Text lineHeight={setSize(27)} block h6 priceFormat {...value}>
          {value.text}
        </Text>
      </View>
      <View flex={4}>
        <RowContainer
          height={height}
          alignItems="center"
          justifyContent="flex-end">
          <Text cover margin={{right: setSize(5)}} {...title}>
            {title?.text}
          </Text>
          <Icon {...icon} />
        </RowContainer>
        <View flex={1} />
      </View>
    </RowContainer>
  );
}

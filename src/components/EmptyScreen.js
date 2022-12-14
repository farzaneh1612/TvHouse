import React from 'react';
import {setSize} from '../functions/';
import Icon from './Icon';
import {TextTag as Text} from './TextTag';
import {ContainerCenterContent} from './Containers';

export default function EmptyScreen({icon, message}) {
  return (
    <ContainerCenterContent flex={1}>
      <Icon
        name="alert-circle-outline"
        margin={{bottom: setSize(10)}}
        size={50}
        {...icon}
      />

      <Text h6>{message || 'موردی یافت نشد'}</Text>
    </ContainerCenterContent>
  );
}

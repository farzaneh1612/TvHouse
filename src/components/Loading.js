import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {ContainerCenterContent} from './Containers';
import {setSize} from '../functions';
import {colors} from '../styles';

export default function Loading(props) {
  return (
    <ContainerCenterContent flex={1}>
      <ActivityIndicator size={setSize(40)} color={colors.baseColor2} />
      {/* <SkypeIndicator
        animating
        animationDuration={1200}
        size={setSize(60)}
        color={colors.loadingColor}
        {...props}
      /> */}
    </ContainerCenterContent>
  );
}

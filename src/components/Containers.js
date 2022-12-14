import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {baseTouchOpacity} from '../constants/';
import {colors} from '../styles';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const SafeContainerCenterContent = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const Container = styled.View`
  flex: 1;
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const ContainerCenterContent = styled.View`
  align-items: center;
  justify-content: center;
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const RowContainer = styled.View`
  flex-direction: row;
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const RowTouchableContainer = props => {
  const touchable = {flexDirection: 'row'};
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={baseTouchOpacity}
      style={{...touchable, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
};

const ScrollContainer = ({children, scrollRef, ...props}) => {
  const contentContainerStyle = {
    flexGrow: 1,
  };

  return (
    <ScrollView
      {...props}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...contentContainerStyle,
        ...props.contentContainerStyle,
      }}>
      {children}
    </ScrollView>
  );
};

const Separator = styled.View`
  ${props => props.bgColor && `background-color:${props.bgColor}`};
`;

const CircleContainer = ({
  radius,
  children,
  bgColor,
  alignItems = 'center',
  justifyContent = 'center',
  ...props
}) => (
  <View
    style={{
      width: radius || 50,
      height: radius || 50,
      borderRadius: radius || 50,
      backgroundColor: bgColor || 'transparent',
      alignItems,
      justifyContent,
    }}
    {...props}>
    {children}
  </View>
);

export {
  SafeContainer,
  SafeContainerCenterContent,
  Container,
  ContainerCenterContent,
  RowContainer,
  RowTouchableContainer,
  ScrollContainer,
  Separator,
  CircleContainer,
};

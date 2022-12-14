/**
 * this file contains public styles and style-related features
 * */

import styled from 'styled-components';

// declare colors that most used in app
export const colors = {
  background: '#F8FAFB',
  baseColor1: '#fc8728',
  baseColor2: '#4f9be7',
  black: '#333',

  borderColor: '#DAE3EC',
  boxTitleColor: '#fc8728',
  priceColor: '#009800',
  statusBarColor: '#fefefe',
  baseBgColor: '#fefefe',
  baseIconColor: '#707070',
  badgeColor: '#4f9be7',
  muted: '#ccc',
  gray: '#858585',
  bgColorButton: '#4f9be7',
  confirmationColor: '#44bd32',
  cancelColor: '#c23616',
  sendingColor: '#0097e6',
  lightGray: '#e2e2e2',
};

export const Separator = styled.View`
  flex: 1;
`;

// declare styles that most used in app
export const publicStyles = {
  safeArea: {
    flex: 1,
    backgroundColor: colors.statusBarColor,
  },
  display: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.baseBgColor,
  },
  centerOfScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

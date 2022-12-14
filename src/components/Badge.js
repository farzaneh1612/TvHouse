import React from 'react';
import {colors} from '../styles/publicStyles';
import {setSize} from '../functions';
import PropTypes from 'prop-types';
import {ContainerCenterContent} from './Containers';
import {TextTag as Text} from './TextTag';

export default function Badge({label, size, width, height, bgColor, position}) {
  const badgeStyle = {
    borderRadius: height || size,
    backgroundColor: bgColor,
    position: 'absolute',
    ...position,
  };

  return (
    <ContainerCenterContent
      width={width || size}
      height={height || size}
      style={badgeStyle}>
      <Text color={colors.lightForeground} {...label}>
        {label?.text}
      </Text>
    </ContainerCenterContent>
  );
}

Badge.propTypes = {
  label: PropTypes.object,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  position: PropTypes.object,
};

Badge.defaultProps = {
  label: null,
  size: setSize(20),
  bgColor: colors.badgeColor,
  position: {},
};

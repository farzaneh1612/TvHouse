import React from 'react';
import {Image} from 'react-native';
import {setSize} from '../functions';
import PropTypes from 'prop-types';

import ZocialI from 'react-native-vector-icons/Zocial';
import EntypoI from 'react-native-vector-icons/Entypo';
import FeatherI from 'react-native-vector-icons/Feather';
import FontistoI from 'react-native-vector-icons/Fontisto';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import FoundationI from 'react-native-vector-icons/Foundation';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5ProI from 'react-native-vector-icons/FontAwesome5Pro';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles';

const Icons = props => {
  const {type} = props;
  const icon =
    type === 'zocial' ? (
      <ZocialI {...props} />
    ) : type === 'entypo' ? (
      <EntypoI {...props} />
    ) : type === 'feather' ? (
      <FeatherI {...props} />
    ) : type === 'font-is-to' ? (
      <FontistoI {...props} />
    ) : type === 'oct-icons' ? (
      <OcticonsI {...props} />
    ) : type === 'ant-design' ? (
      <AntDesignI {...props} />
    ) : type === 'evil-icons' ? (
      <EvilIconsI {...props} />
    ) : type === 'foundation' ? (
      <FoundationI {...props} />
    ) : type === 'font-awesome' ? (
      <FontAwesomeI {...props} />
    ) : type === 'font-awesome-5' ? (
      <FontAwesome5I {...props} />
    ) : type === 'font-awesome-5-pro' ? (
      <FontAwesome5ProI {...props} />
    ) : type === 'material-icons' ? (
      <MaterialIconsI {...props} />
    ) : type === 'simple-line-icons' ? (
      <SimpleLineIconsI {...props} />
    ) : type === 'material-community-icons' ? (
      <MaterialCommunityIconsI {...props} />
    ) : (
      <IoniconsI {...props} />
    );

  return icon;
};

export default function Icon(props) {
  const {flip, size, style, source, color, margin} = props;

  const iconMargin = margin && {
    marginTop: margin.top,
    marginRight: margin.right,
    marginBottom: margin.bottom,
    marginLeft: margin.left,
  };

  const styles = {
    icon: {
      transform: flip ? [{scaleX: -1}] : [{scaleX: 1}],
      ...iconMargin,
    },
    imageIcon: {
      width: setSize(size),
      height: setSize(size),
      tintColor: color,
      ...iconMargin,
    },
  };

  return source ? (
    <Image source={source} style={[styles.imageIcon, styles.icon, style]} />
  ) : (
    <Icons {...props} size={setSize(size)} style={[styles.icon, style]} />
  );
}

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  flip: PropTypes.bool,
  type: PropTypes.oneOf([
    'zocial',
    'entypo',
    'feather',
    'font-is-to',
    'ion-icons',
    'oct-icons',
    'ant-design',
    'evil-icons',
    'foundation',
    'font-awesome',
    'font-awesome-5',
    'font-awesome-5-pro',
    'material',
    'simple-line-icons',
    'material-community-icons',
  ]),
};

Icon.defaultProps = {
  size: 28,
  color: colors.iconColor_1,
  flip: false,
  type: 'ion-icons',
};

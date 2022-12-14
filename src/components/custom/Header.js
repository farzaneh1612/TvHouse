import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {setSize} from '../../functions';
import {colors} from '../../styles';
import {Icon, Text} from '..';

export default function Header({iconLeft, onPress, iconRight, title}) {
  const thisStyles = {
    outerWrapper: {
      backgroundColor: '#fefefe',
    },
    innerWrapper: {
      flexDirection: 'row',
      width: '100%',
      height: setSize(60),
      alignItems: 'center',
      backgroundColor: 'transparent',
      paddingHorizontal: setSize(3),
    },

    headerSides: {
      alignItems: 'center',
      justifyContent: 'center',
      width: setSize(45),
      marginRight: 20,
    },

    badge: {
      position: 'absolute',
      top: setSize(5, 5, 5),
      right: setSize(-2, -10, -18),
    },

    headerCenter: {
      flex: 1,
      alignItems: 'center',
    },
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />
      <View style={thisStyles.innerWrapper}>
        <View style={thisStyles.headerSides}>
          {iconLeft === null ? null : (
            <Icon name={'ios-search-outline'} size={25} color={colors.gray} />
          )}
        </View>
        <View style={thisStyles.headerCenter}>
          <Text textAlign={'center'} bold h5 color={colors.gray}>
            {title}
          </Text>
        </View>

        <View style={thisStyles.headerSides}>
          {iconRight === null ? null : (
            <FastImage
              style={{width: 83.7, height: 41.4}}
              source={require('../../assests/testImage/logo.png')}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

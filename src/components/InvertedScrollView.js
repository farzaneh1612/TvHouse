// import React from 'react';
// import {ScrollView} from 'react-native';
// import {baseSidesSpace} from '../../constants';
// export default class InvertedScroll extends React.Component {
//   contentContainerStyle = {
//     flexGrow: 1,
//     paddingRight: baseSidesSpace,
//     flexDirection: 'row-reverse',
//     justifyContent: 'flex-start',
//   };
//   render() {
//     return (
//       <ScrollView
//         {...this.props}
//         ref={(el) => (this.scroll = el)}
//         contentContainerStyle={{
//           ...this.props.contentContainerStyle,
//           ...this.contentContainerStyle,
//         }}
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//         onLayout={() => this.scroll.scrollToEnd({animated: true})}
//         onContentSizeChange={() => this.scroll.scrollToEnd({animated: true})}>
//         {this.props.children}
//       </ScrollView>
//     );
//   }
// }

import React from 'react';
import {FlatList} from 'react-native';
import {baseSidesSpace} from '../constants';

export default function InvertedScroll({data, renderItem, keyExtractor}) {
  const contentContainerStyle = {
    flexGrow: 1,
    paddingRight: baseSidesSpace,
  };

  return (
    <FlatList
      inverted
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      data={data}
      keyExtractor={(item, index) => index + ''}
      renderItem={renderItem}
    />
  );
}

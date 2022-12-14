import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import Button from './Button';
import {colors} from '../styles';
import {TextTag as Text} from './TextTag';
import {setSize} from '../functions';
import {SafeContainer, RowContainer} from './Containers';
import {largeRadius} from '../constants';
import {ActivityIndicator} from 'react-native';

const borderColor = '#dfdfdf';
const buttonsStyle = {
  transparent: true,
  width: '100%',
  height: '100%',
  radius: 0,
};

export default function DialogBox({
  showDialogBox,
  isLoading,
  title,
  acceptTitle,
  rejectTitle,
  onAccept,
  onReject,
}) {
  return (
    <Modal transparent visible={showDialogBox} onRequestClose={onReject}>
      <SafeContainer style={styles.wrapper}>
        <View style={styles.box}>
          <View style={styles.titleWrapper}>
            <Text textAlign="center" h6 medium lineHeight={setSize(28)}>
              {title}
            </Text>
          </View>

          <RowContainer style={styles.buttonsWrapper}>
            <View width="50%" alignItems="center" justifyContent="center">
              <Button
                onPress={onReject}
                {...buttonsStyle}
                label={{
                  text: rejectTitle || 'خیر',
                  color: colors.normalTextColor,
                  h6: true,
                }}
              />
            </View>
            <View width={1} height="100%" backgroundColor={borderColor} />
            <View width="50%">
              <Button
                onPress={onAccept}
                {...buttonsStyle}
                label={{
                  text: acceptTitle || 'بله',
                  color: colors.normalTextColor,
                  h6: true,
                }}
              />
            </View>
          </RowContainer>
        </View>
        {isLoading && (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator color={colors.mutedTextColor} size="large" />
          </View>
        )}
      </SafeContainer>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000022',
  },
  titleWrapper: {minHeight: setSize(100), padding: setSize(10)},
  buttonsWrapper: {
    height: setSize(55),
    width: '100%',
    borderBottomRightRadius: largeRadius,
    borderBottomLeftRadius: largeRadius,
    overflow: 'hidden',
    borderTopWidth: 1,
    borderColor,
  },
  box: {
    width: setSize(300),
    backgroundColor: '#fff',
    borderRadius: largeRadius,
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  loadingWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000055',
  },
});

import React from 'react';
import Icon from './Icon';
import {TextTag as Text} from './TextTag';
import {SafeContainer} from './Containers';

export default function ErrorBoundary() {
  return (
    <SafeContainer alignItems="center" justifyContent="center">
      <Icon />
      <Text>Error</Text>
    </SafeContainer>
  );
}

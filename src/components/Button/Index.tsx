import React, { ReactElement } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  type?: 'primary' | 'secondary';
}

function Button({ children, ...props }: ButtonProps): ReactElement {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export { Button };

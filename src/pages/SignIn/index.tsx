import { useNavigation } from '@react-navigation/core';
import React, { ReactElement } from 'react';
import { Text, Image } from 'react-native';

import bookLoverImg from '../../assets/booklover.png';
import logoImg from '../../assets/logo.png';
import { Button } from '../../components/Button/Index';
import theme from '../../themes';
import { Container, Logo } from './styles';

function SignIn(): ReactElement {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Feed');
  }

  return (
    <Container>
      <Logo source={logoImg} />
      <Image source={bookLoverImg} />
      <Button onPress={handleNavigate}>Entrar</Button>
      <Text style={{ color: theme.colors.text }}>ou</Text>
      <Button type="secondary" onPress={handleNavigate}>
        Cadastre-se
      </Button>
    </Container>
  );
}

export { SignIn };

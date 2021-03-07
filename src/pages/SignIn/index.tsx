import { useNavigation } from '@react-navigation/core';
import React, { ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function SignIn(): ReactElement {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Feed');
  }

  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Go to Feed</Text>
      </TouchableOpacity>
    </View>
  );
}

export { SignIn };
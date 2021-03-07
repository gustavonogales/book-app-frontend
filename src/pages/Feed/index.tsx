import { useNavigation } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Feed(): ReactElement {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('SignIn');
  }

  return (
    <View>
      <Text>Feed</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Go to SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Feed };
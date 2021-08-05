import React from 'react';
import {View, Text} from 'react-native';

export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>It's in details screen</Text>
    </View>
  );
}

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.outerText} numberOfLines={2}>
        <Text style={headerStyle.innerText}> Little Lemon</Text>     {' '}
      </Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#EE9972',
  },
  outerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});

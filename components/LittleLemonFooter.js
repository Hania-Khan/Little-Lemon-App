import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={footerStyle.container}>
      <Text style={footerStyle.outerText}>
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  outerText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

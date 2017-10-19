import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ containerStyles, children }) => (
  <View style={[styles.container, containerStyles]}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Container;

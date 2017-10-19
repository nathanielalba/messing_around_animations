import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from 'react-native';

const Box = ({ animatedStyles }) => (
  <Animated.View style={[styles.box, animatedStyles]} />
);

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default Box;

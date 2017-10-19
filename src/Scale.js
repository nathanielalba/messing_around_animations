import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Animated,
  StyleSheet,
  Text,
} from 'react-native'

import Container from './Container';
import Box from './Box';

export default class Scale extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    console.log('pressed');
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 1500,
    }).start();
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          scaleY: this.state.animation,
        },
      ],
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>This side forward</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

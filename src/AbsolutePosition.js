import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default class AbsolutePosition extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 1500,
    }).start();
  }

  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: 'tomato',
  },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Opacity extends Component {
  state = {
    isShowing: true,
    animation: new Animated.Value(1),
  };

  toggleAnimation = () => {
    const { isShowing } = this.state;

    if (isShowing) {
      this.hideView();
    } else {
      this.showView();
    }
  }

  hideView = () => {
    this.setState({
      isShowing: false,
    }, () => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 350,
      }).start();
    });
  }

  showView = () => {
    this.setState({
      isShowing: true,
    }, () => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  }

  render() {
    const animatedStyles = {
      opacity: this.state.animation,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

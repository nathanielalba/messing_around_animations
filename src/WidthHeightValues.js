import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default class WidthHeightValues extends Component {
  state = {
    animation: new Animated.Value(150),
    animated: false,
  };

  toggleAnimation = () => {
    const {
      animated,
    } = this.state;

    if (animated) {
      this.endAnimation();
    } else {
      this.startAnimation();
    }
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      this.setState({
        animated: true,
      });
    });
  }

  endAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 150,
      duration: 1000,
    }).start(() => {
      this.setState({
        animated: false,
      });
    });
  }

  render() {
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>fasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd</Text>
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
    // width: 150,
    // height: 150,
    backgroundColor: 'tomato',
  },
});

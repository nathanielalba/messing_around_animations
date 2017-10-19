import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const ACTION_TIMER = 400;
const COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

export default class PressAndHold extends Component {
  state = {
    pressAction: new Animated.Value(0),
    textComplete: '',
    buttonWidth: 0,
    buttonHeight: 0,
  };

  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener(v => this._value = v.value);
  }

  _getButtonWidthLayout = e => {
    this.setState({
      buttonWidth: e.nativeEvent.layout.width - 6,
      buttonHeight: e.nativeEvent.layout.height - 6,
    });
  }

  _handlePressIn = () => {
    console.log('press in');
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(this.animationActionComplete);
  }

  _handlePressOut = () => {
    console.log('press out');
    Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER,
      toValue: 0,
    }).start();
  }

  _animationActionComplete = () => {
    let message = '';
    if (this._value === 1) {
      message = 'You held it long enough to fire the action!';
    }

    this.setState({ textComplete: message });
  }

  _getProgessStyles = () => {

  }

  render() {
    const width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth],
    });

    const backgroundColor = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS,
    });

    const animatedStyles = {
      width,
      backgroundColor,
      height: this.state.buttonHeight,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this._handlePressIn}
          onPressOut={this._handlePressOut}
        >
          <View
            style={styles.button}
            onLayout={this._getButtonWidthLayout}
          >
            <Animated.View style={[styles.bgFill, animatedStyles]} />
            <Text style={styles.text}>Press and Hold Me</Text>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text>{ this.state.textComplete }</Text>
        </View>
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
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111',
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

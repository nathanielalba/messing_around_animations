import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Opacity from './src/Opacity';
// import TranslatePosition from './src/TranslatePosition';
// import Scale from './src/Scale';
// import WidthHeightValues from './src/WidthHeightValues';
// import AbsolutePosition from './src/AbsolutePosition';
// import ColorBackgroundColor from './src/ColorBackgroundColor';
// import Rotation from './src/Rotation';
// import WidthHeightPercentage from './src/WidthHeightPercentage';
// import PressAndHold from './src/PressAndHold';
// import AnimatedInterpolateColor from './src/AnimatedInterpolateColor';
// import Corners4 from './src/Corners4';
import StaggeredHeads from './src/StaggeredHeads';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StaggeredHeads />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

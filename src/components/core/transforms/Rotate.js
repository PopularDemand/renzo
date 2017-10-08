import React from 'react';
import { Animated, Easing } from 'react-native';

export default class Rotate extends React.Component {
  state = {
    rotation: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.state.rotation,
        {
          toValue: 360,
          duration: 3000,
          easing: Easing.inOut(Easing.linear)
        }
      )
    ).start();
  }

  render() {
    let rotation = this.state.rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [
            { rotateY: rotation },
            { perspective: 1000 }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
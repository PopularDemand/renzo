import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { compose, withStateHandlers, withHandlers, withPropsOnChange } from 'recompose';
import { withGameChannel } from '../../decorators/withGameChannel';
import { Rotate } from '../../core/transforms';
import {
  AidKit,
  AngryFace,
  Bug,
  CoinDollar,
  Earth,
  Fire,
  GrinFace,
  Heart,
  SadFace
} from '../../svg';

const SVGs = [
  AidKit,
  AngryFace,
  Bug,
  CoinDollar,
  Earth,
  Fire,
  GrinFace,
  Heart,
  SadFace
];

const NUM_ICONS = 4;

const randomIcons = (num = NUM_ICONS) => {
  const icons = [];
  while (icons.length < num) {
    const index = Math.floor(Math.random() * SVGs.length);
    if (icons.includes(index)) continue;
    icons.push(index);
  }
  return icons.map((i) => SVGs[i]);
};

export const enhance = compose(
  withGameChannel,
  withStateHandlers(
    { icons: randomIcons(), displayedIcon: Math.floor(Math.random() * NUM_ICONS) },
    {
      resetIcons: (state, props) => () => ({
        icons: randomIcons(),
        displayedIcon: Math.floor(Math.random() * NUM_ICONS)
      })
    }
  ),
  withHandlers({
    handleSelection: (props) => (payload) => {
      // record the selection, then...
      props.resetIcons();
    }
  })
);

export function GameScreen({ navigation, icons, displayedIcon, resetIcons }) {
  const Icon = icons[displayedIcon];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boardTitle}>
          Select The Displayed Icon
        </Text>
      </View>
      <View style={styles.displayedIcon}>
        <Rotate>
          <Icon fill="#00f" />
        </Rotate>
      </View>
      <View style={styles.selectGrid}>
        {icons.map((SVG, i) => (
          <TouchableHighlight
            style={styles.selectableIcon}
            onPress={resetIcons}
            key={i}
          >
            <View><SVG /></View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

GameScreen.navigationOptions = { title: 'RenZo' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  selectableIcon: {
    borderWidth: 1,
    borderColor: '#555',
    width: '30%',
    alignItems: 'center',
    marginBottom: '10%',
    marginHorizontal: '5%',
    paddingVertical: 20
  },
  header: {
    backgroundColor: 'powderblue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%'
  },
  boardTitle: {
    color: '#444'
  },
  displayedIcon: {
    alignItems: 'center',
    marginBottom: '10%'
  },
  selectGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default enhance(GameScreen);

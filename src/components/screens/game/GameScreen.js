import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { compose, withStateHandlers, withHandlers, withPropsOnChange, lifecycle } from 'recompose';
import { gameCreate, gameSubscribe } from '../../../store/game/actions';
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

export const enhance = compose(
  connect(
    ({ game }) => ({ ...game }),
    { gameCreate, gameSubscribe }
  ),
  lifecycle({
    componentDidMount() {
      this.props.gameCreate({ receiver_id: 1 })
      .then((game) => console.log('game: ', game))
    }
  }),
  withPropsOnChange(['icons'], (props) => ({ icons: props.icons })),
  withHandlers({
    handleSelection: (props) => async (evt) => {
      // const selected = evt.target.dataset.index;
      // await props.gameChannel.makeSelection(icons[selected]);
      // props.gameChannel.resetIcons();
    }
  })
);

export function GameScreen({ navigation, icons, displayedIcon, resetIcons }) {
  // const Icon = icons ? icons[displayedIcon] : null;
  return (
    <View style={styles.container}>
      <Text>this is a game!</Text>
    </View>
  );
}

/*        <Text style={styles.boardTitle}>
          Select The Displayed Icon
        </Text>
      </View>
      <View style={styles.displayedIcon}>
        <Rotate>
          {Icon && <Icon fill="#00f" />}
        </Rotate>
      </View>
      <View style={styles.selectGrid}>
        {icons && icons.map((SVG, i) => (
          <TouchableHighlight
            style={styles.selectableIcon}
            onPress={handleSelection}
            data-index={i}
            key={i}
          >
            <View><SVG /></View>
          </TouchableHighlight>
        ))}
      </View>
      */

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

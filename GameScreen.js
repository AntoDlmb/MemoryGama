import React from 'react';
import { View, Text } from 'react-native';
import Gameboard from './components/Gameboard.js';
import { images } from './GameOverview';

const GameScreen = ({route}) => {
  const { value } = route.params;
  const cartes = images;
  return (
    <View>
      <Text>this is the screen game mode {value} </Text>
      <Gameboard cartes={cartes} />
    </View>
  );
};

export default GameScreen;
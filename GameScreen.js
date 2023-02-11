import React from 'react';
import { View, Text } from 'react-native';
import Gameboard from './components/Gameboard.js';

const GameScreen = ({route}) => {
  const { value } = route.params;
  const cartes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return (
    <View>
      <Text>this is the screen game mode {value} </Text>
      <Gameboard cartes={cartes} />
    </View>
  );
};

export default GameScreen;
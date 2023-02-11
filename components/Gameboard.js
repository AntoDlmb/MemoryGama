import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carte from './Card';

const Gameboard = (props) => {
  return (
    <View style={styles.plateauContainer}>
      {props.cartes.map((carte, index) => (
        <Carte key={index} faceValue={carte} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  plateauContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Gameboard;

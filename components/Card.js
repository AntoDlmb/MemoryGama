import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = (props) => {
  const [showFace, setShowFace] = useState(false);

  return (
    <TouchableOpacity style={styles.carteContainer} onPress={() => setShowFace(!showFace)}>
      {showFace ? (
        <View style={styles.face}>
          <Text>{props.faceValue}</Text>
        </View>
      ) : (
        <View style={styles.dos} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carteContainer: {
    width: '30%',
    aspectRatio: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  face: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dos: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default Card;

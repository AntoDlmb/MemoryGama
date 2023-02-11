import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Card = ({ value, onPress }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {isFlipped ? (
          <Text style={styles.cardValue}>{value}</Text>
        ) : (
          <Text style={styles.cardBack}>?</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardValue: {
    fontSize: 36,
  },
  cardBack: {
    fontSize: 36,
    color: '#999',
  },
};

export default Card;

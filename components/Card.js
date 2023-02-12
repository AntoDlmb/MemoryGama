import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const Card = ({ image, label }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOnPress = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image source={{ uri: isFlipped ? image : "./assets/test.png" }} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Card;
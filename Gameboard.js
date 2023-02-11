import React, { useState } from 'react';
import { View } from 'react-native';
import Card from './Card';

const GameBoard = () => {
  const [cards, setCards] = useState([
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
  ]);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardPress = (card) => {
    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, card]);
    }
  };

  return (
    <View style={styles.container}>
      {cards.map((card) => ()

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Memory Game</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('Level Selection')}
      />
      <Button
        title="Load Picture"
        onPress={() => navigation.navigate('Loading')}
      />
      <Button
        title="Game overview"
        onPress={() => navigation.navigate('Game Overview')}
      />
    </View>
  );
};

export default HomePage;

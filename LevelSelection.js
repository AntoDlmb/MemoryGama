import React from 'react';
import { View, Text, Button } from 'react-native';

const LevelSelection = ({ navigation }) => {
  return (
    <View>
      <Text>Bot Level</Text>
      <Button
        title="Easy"
        onPress={() => navigation.navigate('Game Screen', { value: 'Easy' })}
      />
      <Button
        title="Medium"
        onPress={() => navigation.navigate('Game Screen', { value: 'Medium' })}
      />
      <Button
        title="Hard"
        onPress={() => navigation.navigate('Game Screen', { value: 'Hard' })}
      />
    </View>
  );
};

export default LevelSelection;

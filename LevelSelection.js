import React from 'react';
import { View, Text, Button } from 'react-native';

const LevelSelection = ({ navigation }) => {
  return (
    <View>
      <Text>Bot Level</Text>
      <Button
        title="Easy"
        onPress={() => navigation.navigate('Game Screen')}
      />
      <Button
        title="Medium"
        onPress={() => navigation.navigate('Game Screen')}
      />
      <Button
        title="Hard"
        onPress={() => navigation.navigate('Game Screen')}
      />
    </View>
  );
};

export default LevelSelection;

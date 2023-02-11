import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './HomePage';
import LevelSelection from './LevelSelection';
import LoadingPic from './LoadingPic';
import GameOverview from './GameOverview';
import GameScreen from './GameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Level Selection" component={LevelSelection} />
        <Stack.Screen name="Loading" component={LoadingPic} />
        <Stack.Screen name="Game Overview" component={GameOverview} />
        <Stack.Screen name="Game Screen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

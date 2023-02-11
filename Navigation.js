import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Level" component={LevelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

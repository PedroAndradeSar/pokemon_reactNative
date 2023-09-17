import { createNativeStackNavigator } from 'react-navigation/native-stack';
import { NavigationContainer } from 'react-navigation/native';
import Login from './src/components/Login';
import Pokemon from './src/components/Pokemon';
import Home from './src/components/Home';


const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Pokemon" component={Pokemon} />
      
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
    
  
   
  );
}

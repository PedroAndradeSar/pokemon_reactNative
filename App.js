

import Login from './src/components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home';
import Pokemon from './src/components/Pokemon';
import Contato from './src/components/Contato';
import QuemSomos from './src/components/QuemSomos';


const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Pokemon" component={Pokemon} />
    <Stack.Screen name="Contato" component={Contato} />
    <Stack.Screen name="Quem Somos" component={QuemSomos} />
    <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  </NavigationContainer>
    
  
   
  );
}

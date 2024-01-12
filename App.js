import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Cart from './src/screens/Cart';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import Orderplaced from './src/screens/Orderplaced';




const Stack = createNativeStackNavigator();
const App = () => {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
            <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
            <Stack.Screen name="OrderPlaced" component={Orderplaced}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
        
        
      );
}

export default App
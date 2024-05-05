import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Splash from './Screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CFDEE7'
        }
      }}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerLeft: () => {return null;}, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
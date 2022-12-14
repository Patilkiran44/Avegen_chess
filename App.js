


 import React from 'react'; 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from "@react-navigation/stack";
 import Home from './src/home';
 import Background from './src/background';

 
 const Stack = createStackNavigator();
 
  function App() {
   return (
     <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Background" component={Background} />

       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/Home'; // Adjust the import paths accordingly
import FullMenu from './screens/full_menu'; // Adjust the import paths accordingly
import Starters from './screens/starters'; // Adjust the import paths accordingly
import MainPage from './screens/main_page'; // Adjust the import paths accordingly
import Dessert from './screens/dessert';
import Login from './screens/login';
import ChefEdit from './screens/chefedit';

// Define the types for your stack
type RootStackParamList = {
  MainPage: undefined;
  Home: undefined;
  FullMenu: undefined;
  Starters: undefined;
  Dessert: undefined; 
  Login: undefined;
  ChefEdit: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="FullMenu" component={FullMenu} />
        <Stack.Screen name="Starters" component={Starters} />
        <Stack.Screen name="Dessert" component={Dessert} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChefEdit" component={ChefEdit} />
        
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

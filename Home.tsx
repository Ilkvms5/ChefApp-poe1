import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the types for stack navigation
type RootStackParamList = {
  Home: undefined;
  FullMenu: undefined; // Ensure this matches with what you have in App.tsx
  Starters: undefined; // Add Starters to the stack param list
  MainPage: undefined;
  Dessert: undefined;
  Login: undefined; // Add Login to your stack param list
};

type HomepageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage: React.FC<HomepageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Welcome to the Home Page!</Text>
        <Button
          title="Full Menu"
          onPress={() => navigation.navigate('FullMenu')}
        />
        <Button
          title="Starters "
          onPress={() => navigation.navigate('Starters')}
        />

        <Button
          title="Main"
          onPress={() => navigation.navigate('MainPage')}
        />

        <Button 
        title="Desserts" 
        onPress={() => navigation.navigate('Dessert')} // Navigate to Dessert
      />

      <Button 
        title="Chef Login" 
        onPress={() => navigation.navigate('Login')} // Navigate to Dessert
      />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

 export default Homepage;

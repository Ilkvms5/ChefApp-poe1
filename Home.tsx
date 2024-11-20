import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons

// Define the types for stack navigation
type RootStackParamList = {
  Home: undefined;
  FullMenu: undefined;
  Starters: undefined;
  MainPage: undefined;
  Dessert: undefined;
  Login: undefined;
};

type HomepageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage: React.FC<HomepageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Explore the Menu Below</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FullMenu')}>
        <Icon name="restaurant" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Full Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Starters')}>
        <Icon name="fast-food" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
        <Icon name="pizza" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Main Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dessert')}>
        <Icon name="ice-cream" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Desserts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Icon name="person" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Chef Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f3f5', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200EE', // Purple color
    padding: 12,
    borderRadius: 10,
    width: '80%',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  icon: {
    marginRight: 8,
  },
});

export default Homepage;

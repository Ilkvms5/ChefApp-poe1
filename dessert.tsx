import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import initialMenuItems from './menu_list'; // Adjust the path as necessary

// Define the types for stack navigation
type RootStackParamList = {
  MainPage: undefined;
  FullMenu: undefined;
  Starters: undefined;
  Home: undefined;
  Dessert: undefined; // Dessert type in stack param list
};

type DessertProps = NativeStackScreenProps<RootStackParamList, 'Dessert'>;

const Dessert: React.FC<DessertProps> = ({ navigation }) => {
  // Filter the dessert items from the initial menu items
  const dessertItems = initialMenuItems.filter(item => item.courseType === 'dessert');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dessert Menu</Text>
      <Text style={styles.description}>Explore our delicious desserts!</Text>

      <ScrollView>
        {dessertItems.map(item => (
          <View key={item.name} style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      <Button 
        title="Back" 
        onPress={() => navigation.navigate('Home')} // Navigate back to Home
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '100%',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default Dessert;

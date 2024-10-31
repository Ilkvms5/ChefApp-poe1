import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import initialMenuItems from './menu_list'; // Adjust the path as necessary


// Define the types for stack navigation
type RootStackParamList = {
  Home: undefined;
  OtherScreen: undefined;
  FullMenu: undefined; 
  Starters: undefined; 
};

type StartersProps = NativeStackScreenProps<RootStackParamList, 'Starters'>;

const Starters: React.FC<StartersProps> = ({ navigation }) => {
  // Filter the starters from the initial menu items
  const starters = initialMenuItems.filter(item => item.courseType === 'starter');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters Menu</Text>
      <Text>This is where you can see the starters menu!</Text>
      
      <ScrollView style={styles.scrollContainer}>
        {starters.length > 0 ? ( // Check if there are any starters
          starters.map(item => (
            <View key={item.name} style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text>No starters available at the moment.</Text> // Message if no starters are found
        )}
      </ScrollView>

      <Button 
        title="Back" 
        onPress={() => navigation.navigate('Home')} 
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    width: '100%',
  },
  menuItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '100%',
    padding: 10,
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

export default Starters;

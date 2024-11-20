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

  // Calculate the average price
  const averagePrice =
    starters.length > 0
      ? starters.reduce((sum, item) => sum + item.price, 0) / starters.length
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters Menu</Text>
      <Text style={styles.description}>Discover our delicious starter options!</Text>
      
      {starters.length > 0 && (
        <Text style={styles.averagePrice}>
          Average Price: ${averagePrice.toFixed(2)}
        </Text>
      )}
      
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {starters.length > 0 ? (
          starters.map(item => (
            <View key={item.name} style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noItemsText}>No starters available at the moment.</Text>
        )}
      </ScrollView>

      <Button 
        title="Back" 
        onPress={() => navigation.navigate('Home')} 
        color="#6200EE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  averagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e88e5',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  itemName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 5,
  },
  noItemsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: '60%',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Starters;

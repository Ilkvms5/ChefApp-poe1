import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import initialMenuItems from './menu_list'; // Adjust the path as necessary

type RootStackParamList = {
  MainPage: undefined;
  FullMenu: undefined;
  Starters: undefined;
  Home: undefined;
  Dessert: undefined; // Include Dessert in the stack param list
};

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'MainPage'>;

const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
  // Filter the main courses from the initial menu items
  const mainCourses = initialMenuItems.filter(item => item.courseType === 'main');

  // Calculate the average price of main courses
  const averagePrice = mainCourses.length > 0
    ? (mainCourses.reduce((sum, item) => sum + item.price, 0) / mainCourses.length).toFixed(2)
    : '0.00';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PrivateChef!</Text>
      <Text style={styles.description}>Explore our selection of main courses below!</Text>
      
      <Text style={styles.averagePrice}>Average Price: ${averagePrice}</Text>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {mainCourses.length > 0 ? (
          mainCourses.map(item => (
            <View key={item.name} style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noItemsText}>No main courses available at the moment.</Text>
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
    marginBottom: 20,
  },
  averagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e88e5',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
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
});

export default MainPage;

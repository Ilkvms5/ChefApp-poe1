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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PrivateChef!</Text>

      <ScrollView>
        {mainCourses.map(item => (
          <View key={item.name} style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default MainPage;

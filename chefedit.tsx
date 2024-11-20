import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList,  } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import initialMenuItems from './menu_list';

type RootStackParamList = {
  MainPage: undefined;
  FullMenu: undefined;
  Starters: undefined;
  Home: undefined;
  Dessert: undefined;
  Login: undefined;
  ChefEdit: undefined;
};

type ChefEditProps = NativeStackScreenProps<RootStackParamList, 'ChefEdit'>;

const ChefEdit: React.FC<ChefEditProps> = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([...initialMenuItems]); // Use initialMenuItems for state
  const [newDishName, setNewDishName] = useState('');
  const [newDishDescription, setNewDishDescription] = useState('');
  const [newDishPrice, setNewDishPrice] = useState('');
  const [newDishCourseType, setNewDishCourseType] = useState('starter');

  const handleDelete = (name: string) => {
    setMenuItems(menuItems.filter(item => item.name !== name));
  };

  const handleAddDish = () => {
    if (!newDishName || !newDishDescription || !newDishPrice || isNaN(Number(newDishPrice))) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newDish = {
      name: newDishName,
      description: newDishDescription,
      price: parseFloat(newDishPrice),
      courseType: newDishCourseType,
    };

    setMenuItems(prevMenuItems => [...prevMenuItems, newDish]); // Update state with the new dish
    setNewDishName('');
    setNewDishDescription('');
    setNewDishPrice('');
  };

  const renderMenuItem = ({ item }: { item: any }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Button title="Delete" onPress={() => handleDelete(item.name)} color="#FF4D4D" />
    </View>
  );

  const courseCategories = ['starter', 'main', 'dessert'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Courses</Text>
      <Text style={styles.description}>Here you can edit the courses.</Text>

      <FlatList
        data={menuItems.filter(item => item.courseType === newDishCourseType)}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
        style={styles.menuList}
      />

      <Text style={styles.addDishTitle}>Add New Dish</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={newDishName}
        onChangeText={setNewDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={newDishDescription}
        onChangeText={setNewDishDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Price"
        value={newDishPrice}
        onChangeText={setNewDishPrice}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={newDishCourseType}
        onValueChange={setNewDishCourseType}
        style={styles.picker}
      >
        {courseCategories.map((category) => (
          <Picker.Item label={category.charAt(0).toUpperCase() + category.slice(1)} value={category} key={category} />
        ))}
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} color="#28A745" />

      <Button 
        title="Back" 
        onPress={() => navigation.navigate('Home')}
        color="#007BFF"
      />
    </View>
  );
}

// Styles remain unchanged



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background for better contrast
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark text for readability
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666', // Softer color for description
  },
  menuItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '100%',
    padding: 15,
    backgroundColor: '#ffffff', // White background for menu items
    borderRadius: 8,
    elevation: 2, // Shadow effect for menu items
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF', // Highlighted item name color
  },
  itemDescription: {
    fontSize: 16,
    color: '#555', // Softer color for item description
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  addDishTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#007BFF',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5, // Rounded corners for input fields
    backgroundColor: '#fff',
    elevation: 1, // Light shadow effect
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#007BFF',
    borderWidth: 1,
    backgroundColor: '#fff',
    elevation: 1, // Light shadow effect
  },
  menuList: {
    width: '100%',
  },
});

export default ChefEdit;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component
import initialMenuItems from './menu_list'; // Ensure the path to your menu items is correct

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
  const [menuItems, setMenuItems] = useState(initialMenuItems); // State to manage menu items
  const [newDishName, setNewDishName] = useState('');
  const [newDishDescription, setNewDishDescription] = useState('');
  const [newDishPrice, setNewDishPrice] = useState('');
  const [newDishCourseType, setNewDishCourseType] = useState('starter'); // Default course type

  // Function to handle deleting a dish
  const handleDelete = (name: string) => {
    setMenuItems(menuItems.filter(item => item.name !== name));
  };

  // Function to handle adding a new dish
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

    setMenuItems([...menuItems, newDish]);
    // Reset the input fields
    setNewDishName('');
    setNewDishDescription('');
    setNewDishPrice('');
  };

  const renderMenuItem = ({ item }: { item: any }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Button title="Delete" onPress={() => handleDelete(item.name)} />
    </View>
  );

  // Categories for course selection
  const courseCategories = ['starter', 'main', 'dessert'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Courses</Text>
      <Text style={styles.description}>Here you can edit the courses.</Text>

      {/* Course Selector */}
      <ScrollView horizontal style={styles.courseSelector}>
        {courseCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.courseButton, newDishCourseType === category && styles.selectedCourse]}
            onPress={() => setNewDishCourseType(category)}
          >
            <Text style={styles.courseButtonText}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={menuItems.filter(item => item.courseType === newDishCourseType)} // Filter items by selected course type
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
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

      {/* Course Type Picker */}
      <Picker
        selectedValue={newDishCourseType}
        onValueChange={(itemValue) => setNewDishCourseType(itemValue)}
        style={styles.picker}
      >
        {courseCategories.map((category) => (
          <Picker.Item label={category.charAt(0).toUpperCase() + category.slice(1)} value={category} key={category} />
        ))}
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} />

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
  courseSelector: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  courseButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    borderRadius: 5,
  },
  selectedCourse: {
    backgroundColor: '#007BFF',
  },
  courseButtonText: {
    fontSize: 16,
    color: '#000',
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
  addDishTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default ChefEdit;

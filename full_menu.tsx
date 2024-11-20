import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import initialMenuItems from './menu_list'; // Adjust the path as necessary

type RootStackParamList = {
    MainPage: undefined;
    FullMenu: undefined;
    Starters: undefined;
    Home: undefined;
    Dessert: undefined;
    Login: undefined; 
};

type FullMenuProps = NativeStackScreenProps<RootStackParamList, 'FullMenu'>;

const FullMenu: React.FC<FullMenuProps> = ({ navigation }) => {
    // Grouping menu items by course type
    const starters = initialMenuItems.filter(item => item.courseType === 'starter');
    const mains = initialMenuItems.filter(item => item.courseType === 'main');
    const desserts = initialMenuItems.filter(item => item.courseType === 'dessert');

    // Calculate average prices
    const calculateAveragePrice = (items: typeof initialMenuItems) =>
        items.length > 0
            ? (items.reduce((sum, item) => sum + item.price, 0) / items.length).toFixed(2)
            : '0.00';

    const averageStarterPrice = calculateAveragePrice(starters);
    const averageMainPrice = calculateAveragePrice(mains);
    const averageDessertPrice = calculateAveragePrice(desserts);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Full Menu</Text>
            <Text style={styles.description}>Explore our full selection of dishes!</Text>
            
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {/* Starters Section */}
                <Text style={styles.sectionTitle}>Starters</Text>
                <Text style={styles.averagePrice}>Average Price: ${averageStarterPrice}</Text>
                {starters.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                {/* Mains Section */}
                <Text style={styles.sectionTitle}>Mains</Text>
                <Text style={styles.averagePrice}>Average Price: ${averageMainPrice}</Text>
                {mains.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                {/* Desserts Section */}
                <Text style={styles.sectionTitle}>Desserts</Text>
                <Text style={styles.averagePrice}>Average Price: ${averageDessertPrice}</Text>
                {desserts.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}
                
                <Button
                    title="Back"
                    onPress={() => navigation.navigate('Home')}
                    color="#6200EE"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: '700',
        color: '#444',
        marginBottom: 10,
        marginTop: 20,
    },
    averagePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 10,
        textAlign: 'center',
    },
    menuItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
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
});

export default FullMenu;

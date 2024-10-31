// FullMenu.tsx

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
    Login: undefined; // Include this if needed
};

type FullMenuProps = NativeStackScreenProps<RootStackParamList, 'FullMenu'>;

const FullMenu: React.FC<FullMenuProps> = ({ navigation }) => {
    // Grouping menu items by course type
    const starters = initialMenuItems.filter(item => item.courseType === 'starter');
    const mains = initialMenuItems.filter(item => item.courseType === 'main');
    const desserts = initialMenuItems.filter(item => item.courseType === 'dessert');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Full Menu</Text>
            <Text style={styles.description}>Explore our full selection of dishes!</Text>
            
            <ScrollView>
                {/* Starters Section */}
                <Text style={styles.sectionTitle}>Starters</Text>
                {starters.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                {/* Mains Section */}
                <Text style={styles.sectionTitle}>Mains</Text>
                {mains.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                {/* Desserts Section */}
                <Text style={styles.sectionTitle}>Desserts</Text>
                {desserts.map(item => (
                    <View key={item.name} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                <Button
                    title="Back"
                    onPress={() => navigation.navigate('Home')}
                />
            </ScrollView>
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
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
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

export default FullMenu;


import React from 'react';
import {
  View,  
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';  //the stylesheet 
import { MenuItem, ScreenType } from '../App';

// Props interface for the HomeScreen component
interface HomeScreenProps {
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
  onNavigate: (screen: ScreenType) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  menuItems,
  setMenuItems,
  onNavigate,
}) => {
  // three main course categories
  const courseCategories = ['Starters', 'Mains', 'Desserts']; //The course types

  // Filter menu items by course category
  const getItemsByCourse = (course: string) =>
    menuItems.filter(item => item.course === course);

  // Calculate average price for items in a specific course
  const getAveragePriceByCourse = (course: string) => {
    const items = getItemsByCourse(course);
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + parseFloat(item.price.toString()), 0);
    return (total / items.length).toFixed(2);
  }; 

  // Handle removing a dish from the menu with confirmation
  const handleRemoveDish = (dishId: string, dishName: string) => {
    Alert.alert(
      'Remove Item',
      `Are you sure you want to remove "${dishName}" from your menu?`, //Alert message for removing items
      [
 {
          text: 'Cancel', 
          style: 'cancel' 
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            // Filter out the removed item from menu
            setMenuItems(menuItems.filter(item => item.id !== dishId));
            Alert.alert('Item Removed');  //Alert message for user confirmation
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App header with branding */}
      <View style={styles.header}>
        <Text style={{ fontSize: 32, color: '#000' }}>🍽</Text>
        <Text style={styles.headerTitle}>FlavourFlow</Text> 
        <Text style={styles.headerSubtitle}>Your Menu, Perfected!</Text>
      </View>

      {/* Display total menu item count */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Total Menu Items: {menuItems.length}
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Loop through each course category */}
        {courseCategories.map(course => ( //The Loop
          <View key={course}>
            {/* Course section header with stats */}
            <View style={styles.courseHeader}>
              <Text style={styles.courseTitle}>{course}</Text>
              <Text style={styles.courseStats}>
                {getItemsByCourse(course).length} items • Avg R{getAveragePriceByCourse(course)}  
              </Text>
            </View>
            
            {/* Display all menu items in this course */}
            {getItemsByCourse(course).map(item => (
              <View key={item.id} style={styles.menuItemCard}>
                <Image source={{ uri: item.image }} style={styles.menuItemImage} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <Text style={styles.menuItemDescription}>{item.description}</Text>
                  <Text style={styles.menuItemMeta}>
                    {item.course} • R{item.price}
                  </Text>
                  {/* Remove button for each menu item */}
                  <TouchableOpacity
                    style={styles.removeButton}  
                    onPress={() => handleRemoveDish(item.id, item.name)}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Action buttons for adding items and filtering */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onNavigate('add')}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => onNavigate('filter')}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 

export default HomeScreen;
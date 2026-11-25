import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,     
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // The picker component for the course types  
import { styles } from './styles';  //Stylesheet import
import { MenuItem, ScreenType } from '../App';

// Props interface for the FilterScreen component
interface FilterScreenProps {
  menuItems: MenuItem[]; // Array for all menu items  
  onNavigate: (screen: ScreenType) => void;
}

const FilterScreen: React.FC<FilterScreenProps> = ({
  menuItems,
  onNavigate,
}) => {
  // State to manage selected course filter (defaults to 'All')
  const [filterCourse, setFilterCourse] = useState<string>('All');

  // Filter menu items based on selected course, or show all if 'All' is selected
  const filteredItems =
    filterCourse === 'All'
      ? menuItems
      : menuItems.filter(item => item.course === filterCourse);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header image */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800' }} // food image
        style={styles.filterHeaderImage}
      />

      {/* Header section */}
      <View style={styles.filterHeader}>
        <Text style={styles.filterTitle}>Filter Courses</Text>
        <Text style={styles.filterSubtitle}>Your menu. Perfected</Text>
      </View>

      <View style={styles.filterContent}>
        {/* Course selection picker */}
        <Text style={styles.label}>Select Course</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={filterCourse}
            onValueChange={(value) => setFilterCourse(value.toString())}
            style={styles.picker}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Desserts" value="Desserts" />
          </Picker>
        </View>

        {/* Display filtered menu items */}
        <Text style={styles.label}>Filtered menu</Text>
        <ScrollView style={styles.filteredList}>
          {filteredItems.map(item => (
            <View key={item.id} style={styles.filteredItem}>
              <Text style={styles.filteredItemText}>
                {item.name} - R{item.price}
              </Text>
              <Text style={styles.filteredItemCourse}>{item.course}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Action buttons for navigation and clearing filter */}
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => onNavigate('home')}>
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => {
              // Reset filter to show all items
              setFilterCourse('All');
              Alert.alert('Filter Cleared', 'Showing all menu items'); // Alert message for clearing data
            }}>
            <Text style={styles.buttonText}>Clear</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;

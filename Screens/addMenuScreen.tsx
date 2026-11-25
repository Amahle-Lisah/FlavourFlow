import { MenuItem, ScreenType } from '../App';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView, // Component that enables the user to scroll up and down
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform, 
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // The picker component for the course types  
import { styles } from './styles';  //Stylesheet import  

// Props interface for the AddToMenuScreen component
interface AddToMenuScreenProps {
  menuItems: MenuItem[]; 
  setMenuItems: (items: MenuItem[]) => void; // Array of MenuItem objects  
  onNavigate: (screen: ScreenType) => void; 
}

const AddToMenuScreen: React.FC<AddToMenuScreenProps> = ({
  menuItems,
  setMenuItems,
  onNavigate,
}) => {

  // State to manage the new dish form fields
  const [newDish, setNewDish] = useState({
    name: '',   // The dish name field  
    description: '',  // The dish description field  
    course: 'Starters', // The course type - defaulting to Starters  
    price: ''  // The dish price field  
  });

  // Handle saving the new dish to the menu
  const handleSave = () => {
    // Validate that all fields are filled
    if (!newDish.name || !newDish.description || !newDish.price) {
      Alert.alert('Error', 'Please fill in all fields');  // Alert message  
      return;
    }

    // Create new menu item object
    const dish: MenuItem = {
      id: Date.now().toString(),
      name: newDish.name,
      description: newDish.description,
      course: newDish.course,
      price: parseFloat(newDish.price),
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    };

    // Add new dish to menu items array
    setMenuItems([...menuItems, dish]);

    // Reset form fields
    setNewDish({ name: '', description: '', course: 'Starters', price: '' });

    // Show success alert and navigate back to home
    Alert.alert('Success', 'Item added to menu successfully!', [
      { text: 'OK', onPress: () => onNavigate('home') }
    ]);
  };

  // Handle clearing the form with confirmation
  const handleClear = () => {
    Alert.alert('Clear Form', 'Are you sure you want to clear all fields?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        onPress: () =>
          setNewDish({ name: '', description: '', course: 'Starters', price: '' })
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView  // keyboard avoiding view is for better UX when keyboard is visible  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          {/* Header image */}
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800' }}
            style={styles.addHeaderImage}
          />

          {/* Header section */}
          <View style={styles.addHeader}> 
            <Text style={styles.addTitle}>Add to Menu</Text>
            <Text style={styles.addSubtitle}>Discover your culinary experience</Text>
          </View>

          {/* Form input container */}
          <View style={styles.inputContainer}>
            {/* Dish name input */}
            <Text style={styles.label}>Dish name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter dish name"
              value={newDish.name}
              onChangeText={(text) => setNewDish({ ...newDish, name: text })}
            />

            {/* Dish description input */}
            <Text style={styles.label}>Dish description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter dish description"
              value={newDish.description}
              onChangeText={(text) => setNewDish({ ...newDish, description: text })}
              multiline
            />

            {/* Course selection picker */}
            <Text style={styles.label}>Course Selection</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={newDish.course}
                onValueChange={(value) => {
                  const v = typeof value === 'string' && value ? value : 'Starters';
                  setNewDish({ ...newDish, course: v });
                }}
                style={styles.picker}
              >
                <Picker.Item label="Starters" value="Starters" />
                <Picker.Item label="Mains"   value="Mains"   />
                <Picker.Item label="Desserts" value="Desserts" />
              </Picker>
            </View>

            {/* Dish price input */}
            <Text style={styles.label}>Dish price</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter dish price"
              keyboardType="numeric"
              value={newDish.price}
              onChangeText={(text) => setNewDish({ ...newDish, price: text })}
            />

            {/* Action buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
            </View>

            {/* Back to home link */}
            <TouchableOpacity
              style={styles.backLink}
              onPress={() => onNavigate('home')}>
              <Text style={styles.backLinkText}>← Back to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> 
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddToMenuScreen;

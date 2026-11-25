
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';  //Stylesheet import
import { ScreenType } from '../App'; 

// Props interface for the WelcomeScreen component
interface WelcomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
}  

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.welcomeContainer}>
      {/* Top header image */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800' }}
        style={styles.welcomeImage}
      />
      
      {/* Welcome content section with branding and call-to-action */}
      <View style={styles.welcomeContent}>
        <Text style={styles.welcomeTitle}>Welcome to</Text>
        <Text style={styles.welcomeSubtitle}>FlavourFlow</Text>
        <Text style={styles.welcomeTagline}>Your menu. Perfected</Text>
        
        {/* Button to navigate to home screen */}
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => onNavigate('home')}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom decorative image */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800' }}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default WelcomeScreen;
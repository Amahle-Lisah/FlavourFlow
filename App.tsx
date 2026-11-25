import React, { useState } from 'react';
import WelcomeScreen from './Screens/welcomeScreen';
import HomeScreen from './Screens/homeScreen';
import AddToMenuScreen from './Screens/addMenuScreen';
import FilterScreen from './Screens/filterScreen';

// The shape of one dish on the menu (the screens import this type)
export interface MenuItem {
  id: string;
  name: string;
  description: string;   
  course: string;
  price: number;
  image: string;
}

// The four screens the app can show (the screens import this type)
export type ScreenType = 'welcome' | 'home' | 'add' | 'filter';

export default function App() {
  // Keeps track of which screen is showing, starting on the welcome screen
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');

  // The menu list lives here so every screen shares the same data
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Show the screen that matches currentScreen
  switch (currentScreen) {
    case 'home':
      return (
        <HomeScreen
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          onNavigate={setCurrentScreen}
        />
      );
    case 'add':
      return (
        <AddToMenuScreen
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          onNavigate={setCurrentScreen}
        />
      );
    case 'filter':
      return (
        <FilterScreen
          menuItems={menuItems}
          onNavigate={setCurrentScreen}
        />
      );
    default:
      return <WelcomeScreen onNavigate={setCurrentScreen} />;
  }
}
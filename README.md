# FlavourFlow

FlavourFlow is a mobile menu management app built with React Native and TypeScript. It lets a restaurant owner build a menu by adding dishes, view them grouped by course, filter them, and remove items they no longer need.

## Features

### Welcome screen
- A branded landing screen with an **Explore** button that opens the menu.

### Home screen
- Shows the total number of menu items.
- Groups dishes into **Starters**, **Mains** and **Desserts**, showing the number of items and the **average price** for each course.
- Each dish has a **Remove** button, with a confirmation prompt before it is deleted.

### Add to Menu screen
- Captures the dish name, description, course (chosen from a picker) and price.
- Checks that every field is filled in before saving.
- **Save** adds the dish to the menu, and **Clear** resets the form after a confirmation prompt.

### Filter screen
- Filter the menu by **All**, **Starters**, **Mains** or **Desserts**.
- Shows each matching dish with its price and course, and **Clear** resets the filter to show everything.

> The menu is stored in the app's memory only, so it resets when the app is closed.

## Project structure

File | Purpose
App.tsx| Main component. Holds the menu list and decides which screen is showing. 
Screens/welcomeScreen.tsx: The welcome screen, where the app begins
Screens/homeScreen.tsx: Displays the menu grouped by course.
Screens/addMenuScreen.tsx: Form for adding a new dish. 
Screens/filterScreen.tsx: Filters the menu by course. 
Screens/styles.tsx: Shared stylesheet used by all screens. 

## Built with
- React Native
- TypeScript
- Expo
- [@react-native-picker/picker](https://github.com/react-native-picker/picker) for the course dropdowns

## How to run
1. Install [Node.js](https://nodejs.org) and the **Expo Go** app on your phone.
2. In the project folder, run `npm install`.
3. Run `npx expo start`.
4. Scan the QR code with Expo Go. Your phone and computer must be on the same Wi-Fi network.


## Author
Amahle Lisah Khumalo

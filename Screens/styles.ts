import { StyleSheet } from 'react-native';

// Colours used across the app, kept in one place so they are easy to change
const colors = {
  primary: '#D35400',     // warm orange for main buttons
  dark: '#2C1810',        // dark brown for titles and text
  light: '#FFF8F0',       // soft cream background
  card: '#FFFFFF',        // white background for cards and inputs
  border: '#E0D5C8',      // light border colour
  muted: '#7A6A5D',       // grey-brown for smaller text
  danger: '#951103',      // red for remove and clear buttons
};

export const styles = StyleSheet.create({
  // SHARED
  container: {  
    flex: 1,
    backgroundColor: colors.light,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: 6,
    marginTop: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  filterButton: {
    backgroundColor: colors.dark,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  clearButton: {
    backgroundColor: colors.danger,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.card,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
  },

  // WELCOME SCREEN
  welcomeContainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  welcomeImage: {
    width: '100%',
    height: 250,
  },
  welcomeContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 22,
    color: colors.muted,
  },
  welcomeSubtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.primary,
  },
  welcomeTagline: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 24,
  },
  exploreButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomImage: {
    width: '100%',
    height: 150,
  },

  // HOME SCREEN
  header: {
    alignItems: 'center',
    backgroundColor: '#FFE9D0',
    paddingTop: 40,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  statsContainer: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statsText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },
  courseStats: {
    fontSize: 13,
    color: colors.muted,
  },
  menuItemCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuItemImage: {
    width: 100,
    height: 110,
  },
  menuItemContent: {
    flex: 1,
    padding: 10,
  },
  menuItemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.dark,
  },
  menuItemDescription: {
    fontSize: 13,
    color: colors.muted,
    marginVertical: 4,
  },
  menuItemMeta: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  removeButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 6,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // ADD TO MENU SCREEN
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  addHeaderImage: {
    width: '100%',
    height: 180,
  },
  addHeader: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  addTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.dark,
  },
  addSubtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 8,
  },
  backLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  backLinkText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },

  // FILTER SCREEN
  filterHeaderImage: {
    width: '100%',
    height: 180,
  },
  filterHeader: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  filterTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.dark,
  },
  filterSubtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  filterContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  filteredList: {
    flex: 1,
    marginTop: 4,
  },
  filteredItem: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filteredItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  filteredItemCourse: {
    fontSize: 13,
    color: colors.primary,
    marginTop: 2,
  },
});
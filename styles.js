// STYLES
import { StyleSheet, Dimensions } from 'react-native';

// 🎨 Color Palette
const PRI_COL_1 = '#FF5E3B';   // Bright Orange 🟠
const SEC_COL_1 = '#FDEBDC'; // Light Peach ⚪️
const SEC_COL_2 = '#3D3D3D'; // Dark Grey ⚫️

// 📦 Shared Styles
const sharedStyles = StyleSheet.create({

  // 🧱 Layout Containers
// 🧱 Layout Containers
containerFull: {
  flex: 1,
  backgroundColor: SEC_COL_1,
},

containerPadded: {
  flex: 1,
  backgroundColor: SEC_COL_1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 200,
  paddingHorizontal: 10,
  gap: 40,
},

containerCentered: {
  flex: 1,
  backgroundColor: SEC_COL_1,
  alignItems: 'center',
  justifyContent: 'center',
},


  // 📝 Text Styles
  title: {
    color: PRI_COL_1,
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: -20,
  },
  subtitle: {
    color: SEC_COL_2,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    color: SEC_COL_2,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },

  // 🔘 Button Styles
  button: {
    backgroundColor: PRI_COL_1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  // Secondary button: dark grey background, light peach text
  buttonSecondary: {
    backgroundColor: SEC_COL_2,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonSecondaryText: {
    color: SEC_COL_1,
    fontSize: 22,
    fontWeight: 'bold',
  },

  // 🔙 Back Button
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: PRI_COL_1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    zIndex: 1,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // 🗺️ Map Styles
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
sharedStyles.colours = {
  primary: PRI_COL_1,
  secondary: SEC_COL_1,
  dark: SEC_COL_2,
};

export default sharedStyles;
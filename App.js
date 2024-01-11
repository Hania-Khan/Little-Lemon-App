import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


























// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import LoginScreen from './components/LoginScreen';

// export default function App() {
//   return (
//     <>
//       <View style={styles.container}>
//         <LittleLemonHeader />
//         <LoginScreen />
//       </View>7
//       <View style={styles.footerContainer}>
//         <LittleLemonFooter />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });

// import * as React from 'react';
// import { View, StyleSheet } from 'react-native';

// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import MenuItems from './components/MenuItems';
// import FeedbackForm from './components/FeedbackForm';
// import WelcomeScreen from './components/WelcomeScreen';

// export default function App() {
//   return (
//     <>
//       <View style={styles.container}>
//         <LittleLemonHeader />
//         <FeedbackForm/>

//       </View>
//       <View style={styles.footerContainer}>
//         <LittleLemonFooter />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });

// import { View, StyleSheet } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './components/WelcomeScreen';
// import LoginScreen from './components/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <LittleLemonHeader />
//           <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
//             <Drawer.Screen name="Welcome" component={WelcomeScreen} />
//             <Drawer.Screen name="Login" component={LoginScreen} />
//           </Drawer.Navigator>
//         </View>
//         <View style={styles.footerContainer}>
//           <LittleLemonFooter />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });

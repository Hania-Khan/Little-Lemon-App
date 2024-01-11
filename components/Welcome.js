// import React from 'react';
// import { ScrollView, Image, StyleSheet, Text } from 'react-native';

// const Welcome = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={require('../img/LIttleLemonLogo.png')}
//         resizeMode="center"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />

//       <Text style={styles.title}>
//         Little Lemon, your local Mediterranean Bistro
//       </Text>
//       <Image
//         style={styles.image}
//         source={require('../img/Picture1.png')}
//         resizeMode="cover"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />
//       <Image
//         style={styles.image}
//         source={require('../img/Picture2.png')}
//         resizeMode="cover"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />
//       <Image
//         style={styles.image}
//         source={require('../img/Picture3.png')}
//         resizeMode="cover"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />
//       <Image
//         style={styles.image}
//         source={require('../img/Picture4.png')}
//         resizeMode="cover"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   logo: {
//     height: 100,
//     width: 300,
//   },
//   image: {
//     width: 350,
//     height: 250,
//     borderRadius: 10,
//     borderColor: 'red',
//   },
//   container: {
//     flex: 1,
//     padding: 24,
//     marginTop: 25,
//     backgroundColor: '#fff',
//   },

//   title: {
//     marginTop: 16,
//     paddingVertical: 10,
//     color: '#333333',
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default Welcome;








// import {
//   ScrollView,
//   Image,
//   StyleSheet,
//   Text,
//   useColorScheme,
// } from 'react-native';

// const Welcome = () => {
//   const colorScheme = useColorScheme();

//   return (
//     <ScrollView
//       style={[
//         styles.container,
//         colorScheme === 'light'
//           ? { backgroundColor: '#fff' }
//           : { backgroundColor: '#333333' },
//       ]}
//     >
//       <Image
//         style={styles.logo}
//         source={require('../img/LIttleLemonLogo.png')}
//         resizeMode="center"
//         accessible={true}
//         accessibilityLabel={'Little Lemon Logo'}
//       />
//       <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   logo: {
//     height: 100,
//     width: 300,
//   },
//   container: {
//     flex: 1,
//     padding: 24,
//     marginTop: 25,
//   },
//   regular: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default Welcome;



import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

const Welcome = () => {
  const window = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/LIttleLemonLogo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {window.height}</Text>
      <Text style={styles.regular}>Width: {window.width}</Text>
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;


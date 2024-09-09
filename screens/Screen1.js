// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// const HomeScreen = ({navigation}) => {
//   return (
//     <ImageBackground
//       source={{ uri: 'https://images.pexels.com/photos/5706139/pexels-photo-5706139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // Thay thế bằng URL hình nền thực tế
//       style={styles.container}
//     >
//       <Text style={styles.title}>MAKE YOUR</Text>
//       <Text style={styles.titles}>HOME BEAUTIFUL</Text>
//       <Text style={styles.subtitle}>
//         The best simple place where you discover most wonderful furnitures and make your home beautiful.
//       </Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Screen2')} style={styles.button}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff', // Màu chữ để nổi bật trên nền
//     marginVertical: 5,
//   },
//   titles: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff', // Màu chữ để nổi bật trên nền
//     marginVertical: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#fff', 
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 200,
//     backgroundColor: '#000',
//     padding: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default HomeScreen;

import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen2'); // Navigate to Screen2 after 3 seconds
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/5706139/pexels-photo-5706139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
      style={styles.container}
    >
      <Text style={styles.title}>MAKE YOUR</Text>
      <Text style={styles.titles}>HOME BEAUTIFUL</Text>
      <Text style={styles.subtitle}>
        The best simple place where you discover most wonderful furnitures and make your home beautiful.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  titles: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    marginTop: 200,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
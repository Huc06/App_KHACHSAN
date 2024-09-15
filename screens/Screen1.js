import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen2'); // Navigate to Screen2 after 5 seconds
    }, 5000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2019/04/16/21/15/tiger-4132783_640.png' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO OUR</Text>
        <Text style={styles.titles}>Shop-Secondhand-UTH</Text>
        <Text style={styles.subtitle}>
          Địa điểm bán đồ secondhand ở TPHCM cực chất và cá tính.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Thêm lớp nền mờ
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Thay đổi màu chữ
    marginVertical: 5,
  },
  titles: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Thay đổi màu chữ
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff', // Thay đổi màu chữ
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
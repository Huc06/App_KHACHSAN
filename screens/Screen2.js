
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    // Lấy thông tin đăng nhập từ AsyncStorage (nếu có)
    const loadUserData = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');
        if (storedEmail && storedPassword) {
          setEmail(storedEmail);
          setPassword(storedPassword);
        }
      } catch (error) {
        Alert.alert('Đã xảy ra lỗi khi tải thông tin');
      }
    };
    loadUserData();
  }, []);

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Email không hợp lệ');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    // Kiểm tra thông tin đăng nhập với thông tin đã lưu trong AsyncStorage
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        Alert.alert('Đăng nhập thành công!');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Screen4' }],
          })
        );
      } else {
        Alert.alert('Đăng nhập thất bại!');
      }
    } catch (error) {
      Alert.alert('Đã xảy ra lỗi khi kiểm tra thông tin');
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>HELLO!</Text>
      <Text style={styles.title}>WELCOME BACK</Text>
      {/* <Text style={styles.titleS}>LAB6_072204005387</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.button}>
        <Text style={styles.buttonText}>
          {isPasswordVisible ? 'Ẩn' : 'Hiện'} mật khẩu
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.buttonTexts}>SIGH UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  buttons: {
    backgroundColor: 'transparent', // Đặt màu nền thành trong suốtP@PP@
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTexts: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleS: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#6200ee',
    textAlign: 'left',
    position: 'absolute',
    top: 20,
    left: 0,
    width: '100%',
  },
});

export default LoginScreen;

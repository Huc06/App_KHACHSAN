
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [Name, setName] = useState('');

  const validatePassword = (password) => {
    // Kiểm tra mật khẩu có ít nhất một chữ cái viết hoa, một chữ cái viết thường, và một số
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
  };

  const validateEmail = (email) => {
    // Kiểm tra email bằng biểu thức chính quy
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Vui lòng nhập email hợp lệ.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Mật khẩu xác nhận không khớp.');
      return;
    }

    try {
      // Lưu thông tin đăng nhập vào AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);

      Alert.alert('Đăng ký thành công!');
      navigation.navigate('Screen2');
    } catch (error) {
      Alert.alert('Đã xảy ra lỗi khi lưu thông tin');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={Name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>SIGH UP</Text>
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
  buttonText: {
    color: '#fff',
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

export default RegisterScreen;

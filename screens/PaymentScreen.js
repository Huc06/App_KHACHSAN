import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { cartItems } = route.params; // Nhận danh sách sản phẩm từ giỏ hàng
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash' or 'credit'
  const [agreeTerms, setAgreeTerms] = useState(false);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0; // Chuyển đổi giá thành số
      const quantity = parseInt(item.quantity, 10) || 0; // Chuyển đổi số lượng thành số nguyên
      return total + (price * quantity);
    }, 0);
  };

  const handlePayment = () => {
    if (!name || !address || !phone) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    if (!agreeTerms) {
      Alert.alert('Thông báo', 'Vui lòng đồng ý với điều khoản sử dụng.');
      return;
    }

    // Xử lý thanh toán ở đây
    Alert.alert('Thông báo', 'Thanh toán thành công!', [{ text: 'OK', onPress: () => navigation.navigate('Screen4') }]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Thông Tin Giao Hàng</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ giao hàng"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.subtitle}>Tóm Tắt Đơn Hàng</Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.orderSummary}>
          <Text style={styles.itemTitle}>{item.title} x {item.quantity}</Text>
          <Text style={styles.itemPrice}>{(parseFloat(item.price) * parseInt(item.quantity, 10)).toLocaleString('vi-VN')} VNĐ</Text>
        </View>
      ))}

      <View style={styles.totalsContainer}>
        <Text style={styles.totalText}>Tổng phụ: {(calculateTotalPrice()).toLocaleString('vi-VN')} USD</Text>
        <Text style={styles.totalText}>Vận chuyển: 5 USD</Text>
        <Text style={styles.totalText}>Tổng: {(calculateTotalPrice() + 5).toLocaleString('vi-VN')} USD</Text>
      </View>

      <Text style={styles.subtitle}>Phương Thức Thanh Toán</Text>
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={[styles.paymentMethod, paymentMethod === 'cash' && styles.selectedMethod]}
          onPress={() => setPaymentMethod('cash')}
        >
          <Text style={styles.method}>Thanh toán khi nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentMethod, paymentMethod === 'credit' && styles.selectedMethod]}
          onPress={() => setPaymentMethod('credit')}
        >
          <Text style={styles.method}>Thẻ tín dụng</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.termsContainer} onPress={() => setAgreeTerms(!agreeTerms)}>
        <Text style={agreeTerms ? styles.checked : styles.checkbox}>{agreeTerms ? '☑️' : '☐'}</Text>
        <Text style={styles.termsText}>Tôi đồng ý với điều khoản sử dụng và mua bán của shop</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handlePayment}>
        <Text style={styles.submitButtonText}>Xác Nhận Thanh Toán</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  orderSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#e7f3fe',
    borderRadius: 5,
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  totalsContainer: {
    marginTop: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  paymentMethodContainer: {
    marginTop: 10,
  },
  paymentMethod: {
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  method: {
    fontSize: 16,
  },
  selectedMethod: {
    backgroundColor: '#d1e7dd',
    borderColor: '#0f5132',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    fontSize: 20,
    marginRight: 10,
  },
  checked: {
    fontSize: 20,
    color: 'green',
    marginRight: 10,
  },
  termsText: {
    fontSize: 16,
  },
  submitButton: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#28a745',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
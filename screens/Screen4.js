
// screens/Screen6.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const productsData = [
  {
    id: '1',
    title: 'Áo Thun Trắng',
    description: 'Áo thun cotton chất lượng cao.',
    price: '200 USD',
    image: 'https://th.bing.com/th/id/OIP.GOMpePRjUIIFgc7gCH7_UgHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: '2',
    title: 'Quần Jean',
    description: 'Quần jean thời trang, thoải mái.',
    price: '400 USD',
    image: 'https://th.bing.com/th/id/OIP.GdMU0lKLnKYxPD-xl20O9QHaLC?w=184&h=275&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: '3',
    title: 'Giày Sneaker',
    description: 'Giày sneaker thể thao, phong cách.',
    price: '800 USD',
    image: 'https://th.bing.com/th/id/OIP.9HxczLa4iR2eSN08vT7BmgHaEo?w=272&h=180&c=7&r=0&o=5&pid=1.7',
  },
];

const Screen6 = ({ navigation }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductDetail', { product: item })} // Chuyển đến màn hình mới với thông tin sản phẩm
      >
        <Text style={styles.buttonText}>Xem Mô Tả</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chào Mừng Đến Với Cửa Hàng Của Chúng Tôi</Text>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  productList: {
    paddingBottom: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Screen6;

// screens/ProductInfoScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductInfoScreen = ({ route, navigation }) => {
  const { product } = route.params; // Nhận thông tin sản phẩm từ navigation
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [rating, setRating] = useState(0);
  
  // Dữ liệu đánh giá mẫu
  const ratingsData = [5, 4, 4, 5, 3]; 

  useEffect(() => {
    setRating(calculateAverageRating(ratingsData));
  }, []);

  const calculateAverageRating = (ratings) => {
    const total = ratings.reduce((acc, curr) => acc + curr, 0);
    return (total / ratings.length).toFixed(1);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };
    const totalPrice = cartItem.price * cartItem.quantity;
    navigation.navigate('Cart', { cartItems: [cartItem], totalPrice });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>

      <View style={styles.priceQuantityContainer}>
        <Text style={styles.productPrice}>{product.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        <Icon name="star" size={20} color="#FFD700" />
        <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
          <Text style={styles.rating}>{rating} (50 reviews)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSave} style={styles.saveButton}>
          <Icon name={isSaved ? "bookmark" : "bookmark-o"} size={24} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductInfoScreen;
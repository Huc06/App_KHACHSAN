

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện biểu tượng

// const ProductScreen = ({ navigation }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [isSaved, setIsSaved] = useState(false); // Trạng thái lưu sản phẩm
//   const [rating, setRating] = useState(0); // Giá trị rating
//   const ratingsData = [5, 4, 4, 5, 3]; // Mock data for ratings

//   useEffect(() => {
//     setRating(calculateAverageRating(ratingsData));
//   }, []);

//   const calculateAverageRating = (ratings) => {
//     const total = ratings.reduce((acc, curr) => acc + curr, 0);
//     return (total / ratings.length).toFixed(1); // Format to one decimal place
//   };

//   const increaseQuantity = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//   };

//   const decreaseQuantity = () => {
//     setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//   };

//   const toggleSave = () => {
//     setIsSaved(!isSaved);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://images.pexels.com/photos/28039050/pexels-photo-28039050/free-photo-of-macbook-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // Thay thế bằng URL ảnh thực tế
//         style={styles.image}
//       />
//       <Text style={styles.title}>Minimal Stand</Text>
      
//       <View style={styles.priceQuantityContainer}>
//         <Text style={styles.price}>$50</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
//             <Text style={styles.buttonText}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
//             <Text style={styles.buttonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.ratingContainer}>
//         <Icon name="star" size={20} color="#FFD700" />
//         <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
//           <Text style={styles.rating}>{rating} (50 reviews)</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.description}>
//         Minimal Stand is made of natural wood. The design that is very simple and minimal.
//       </Text>

//       <View style={styles.actionContainer}>
//         <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Added to cart')}>
//           <Text style={styles.addToCartText}>Add to cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleSave} style={styles.saveButton}>
//           <Icon name={isSaved ? "bookmark" : "bookmark-o"} size={24} color="#000000" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   price: {
//     fontSize: 20,
//     color: 'green',
//     marginRight: 10,
//   },
//   priceQuantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 20,
//   },
//   button: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#000000',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   quantityText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   rating: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   addToCartButton: {
//     flex: 1,
//     height: 50,
//     backgroundColor: '#000000',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 20, // Tăng khoảng cách giữa các nút
//   },
//   addToCartText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   saveButton: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// export default ProductScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [rating, setRating] = useState(0);
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
    const product = {
      id: '1',
      title: 'Minimal Stand',
      price: 50, // Giá không có ký hiệu đô la
      quantity: quantity,
    };
    const totalPrice = product.price * product.quantity; // Tính tổng giá trị
    // Navigate to Cart screen with the product and total price
    navigation.navigate('Cart', { cartItems: [product], totalPrice }); // Truyền tổng giá trị
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/28039050/pexels-photo-28039050/free-photo-of-macbook-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} 
        style={styles.image}
      />
      <Text style={styles.title}>Minimal Stand</Text>
      
      <View style={styles.priceQuantityContainer}>
        <Text style={styles.price}>$50</Text>
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

      <Text style={styles.description}>
        Minimal Stand is made of natural wood. The design is very simple and minimal.
      </Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginRight: 10,
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

export default ProductScreen;

// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

// const CartScreen = ({ route, navigation }) => {
//   const { cartItems } = route.params; // Nhận danh sách sản phẩm từ navigation

//   const handlePayment = () => {
//     if (cartItems.length === 0) {
//       Alert.alert('Thông báo', 'Giỏ hàng của bạn hiện đang trống.');
//     } else {
//       navigation.navigate('Payment', { cartItems }); // Chuyển đến màn hình thanh toán
//     }
//   };

//   // Tính tổng giá cho tất cả sản phẩm
//   const calculateTotalPrice = () => {
//     const total = cartItems.reduce((sum, item) => {
//       const price = parseFloat(item.price) || 0; // Chuyển đổi giá trị thành số, nếu không hợp lệ thì cho là 0
//       const quantity = parseInt(item.quantity, 10) || 0; // Chuyển đổi số lượng thành số nguyên, nếu không hợp lệ thì cho là 0
//       return sum + (price * quantity);
//     }, 0);
//     return total.toLocaleString('vi-VN');
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.image }} style={styles.itemImage} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <Text style={styles.itemPrice}>Giá: {(parseFloat(item.price) || 0).toLocaleString('vi-VN')} VNĐ</Text>
//         <Text style={styles.itemQuantity}>Số lượng: {parseInt(item.quantity, 10) || 0}</Text>
//         <Text style={styles.itemTotalPrice}>Tổng: {((parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 0)).toLocaleString('vi-VN')} VNĐ</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Giỏ Hàng</Text>
//       {cartItems.length === 0 ? (
//         <Text style={styles.emptyMessage}>Giỏ hàng của bạn hiện đang trống.</Text>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={item => item.id.toString()}
//             renderItem={renderItem}
//           />
//           <View style={styles.totalContainer}>
//             <Text style={styles.totalText}>Tổng giá:</Text>
//             <Text style={styles.totalPrice}>{calculateTotalPrice()} VNĐ</Text>
//           </View>
//         </>
//       )}
//       <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
//         <Text style={styles.paymentButtonText}>Thanh Toán</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   emptyMessage: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   itemContainer: {
//     marginBottom: 12,
//     padding: 8,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     color: 'green',
//     fontSize: 14,
//   },
//   itemQuantity: {
//     fontSize: 14,
//     marginTop: 3,
//   },
//   itemTotalPrice: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   totalContainer: {
//     marginTop: 20,
//     padding: 10,
//     borderTopColor: '#ccc',
//     borderTopWidth: 1,
//     alignItems: 'flex-end',
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   totalPrice: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'red',
//   },
//   paymentButton: {
//     marginTop: 20,
//     height: 45,
//     backgroundColor: '#28a745',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   paymentButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CartScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cartItems } = route.params; // Nhận danh sách sản phẩm từ navigation

  const handlePayment = () => {
    if (cartItems.length === 0) {
      Alert.alert('Thông báo', 'Giỏ hàng của bạn hiện đang trống.');
    } else {
      navigation.navigate('Payment', { cartItems }); // Chuyển đến màn hình thanh toán
    }
  };

  // Tính tổng giá cho tất cả sản phẩm
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0; // Chuyển đổi giá trị thành số, nếu không hợp lệ thì cho là 0
      const quantity = parseInt(item.quantity, 10) || 0; // Chuyển đổi số lượng thành số nguyên, nếu không hợp lệ thì cho là 0
      return sum + (price * quantity);
    }, 0);
    return total.toLocaleString('vi-VN');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Giá: {parseFloat(item.price).toLocaleString('vi-VN')} USD</Text>
        <Text style={styles.itemQuantity}>Số lượng: {parseInt(item.quantity, 10)}</Text>
        <Text style={styles.itemTotalPrice}>Tổng: {(parseFloat(item.price) * parseInt(item.quantity, 10)).toLocaleString('vi-VN')} USD</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ Hàng</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Giỏ hàng của bạn hiện đang trống.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Tổng giá:</Text>
            <Text style={styles.totalPrice}>{calculateTotalPrice()} USD</Text>
          </View>
        </>
      )}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Thanh Toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    marginBottom: 12,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: 'green',
    fontSize: 14,
  },
  itemQuantity: {
    fontSize: 14,
    marginTop: 3,
  },
  itemTotalPrice: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  paymentButton: {
    marginTop: 20,
    height: 45,
    backgroundColor: '#28a745',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
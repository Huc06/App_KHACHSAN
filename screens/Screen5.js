import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const reviews = [
  {
    id: '1',
    title: 'Coffee Table',
    price: '$50.00',
    date: '20/03/2020',
    content: 'Nice furniture with good delivery. The delivery time is very fast...',
    image: 'https://images.pexels.com/photos/28039050/pexels-photo-28039050/free-photo-of-macbook-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Thay thế bằng URL hình ảnh thực tế
    rating: 4, // Số sao
  },
  {
    id: '2',
    title: 'Coffee Table',
    price: '$50.00',
    date: '20/03/2020',
    content: 'Giá Rẻ',
    image: 'https://images.pexels.com/photos/28039050/pexels-photo-28039050/free-photo-of-macbook-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    id: '3',
    title: 'Coffee Table',
    price: '$50.00',
    date: '20/03/2020',
    content: 'Hay Lắm',
    image: 'https://images.pexels.com/photos/28039050/pexels-photo-28039050/free-photo-of-macbook-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3,
  },
];

const ReviewsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter reviews based on search query
  const filteredReviews = reviews.filter(review =>
    review.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm đánh giá..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredReviews}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewContainer}>
            <Image source={{ uri: item.image }} style={styles.reviewImage} />
            <Text style={styles.reviewTitle}>{item.title}</Text>
            <Text style={styles.reviewPrice}>{item.price}</Text>
            <Text>{item.date}</Text>
            <Text style={styles.rating}>
              {Array.from({ length: item.rating }, (_, index) => (
                <Icon key={index} name="star" size={20} color="#FFD700" />
              ))}
            </Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  reviewContainer: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  reviewImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewPrice: {
    color: 'green',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default ReviewsScreen;
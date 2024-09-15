import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const reviews = [
  {
    id: '1',
    title: 'Áo Thun',
    price: '$200',
    date: '20/03/2020',
    content: 'Thiết kế đơn giản với màu sắc trung tính, dễ dàng phối đồ với nhiều loại trang phục khác.',
    image: 'https://th.bing.com/th/id/OIP.GOMpePRjUIIFgc7gCH7_UgHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7', // Thay thế bằng URL hình ảnh thực tế
    rating: 4, 
  },
  {
    id: '2',
    title: 'Quần Jean',
    price: '$400',
    date: '20/03/2020',
    content: 'Quần jean này có thiết kế cổ điển với màu xanh đậm, được làm từ chất liệu denim bền bỉ.',
    image: 'https://th.bing.com/th/id/OIP.GdMU0lKLnKYxPD-xl20O9QHaLC?w=184&h=275&c=7&r=0&o=5&pid=1.7',
    rating: 5,
  },
  {
    id: '3',
    title: 'Giày',
    price: '$800',
    date: '20/03/2020',
    content: 'Đôi giày này có thiết kế thể thao, phù hợp cho nhiều hoạt động khác nhau. ',
    image: 'https://th.bing.com/th/id/OIP.9HxczLa4iR2eSN08vT7BmgHaEo?w=272&h=180&c=7&r=0&o=5&pid=1.7',
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
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const DrawerContent = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Menu</Text>
//       <Button title="Trang Chủ" onPress={() => navigation.navigate('Home')} />
//       <Button title="Quản lý Sinh Viên" onPress={() => navigation.navigate('Student')} />
//       <Button title="Đăng xuất" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default DrawerContent;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <DrawerItemList {...props} />
        <Button title="Trang chủ" onPress={() => props.navigation.navigate('Home')} />
        <Button title="Sinh viên" onPress={() => props.navigation.navigate('Student')} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DrawerContent;

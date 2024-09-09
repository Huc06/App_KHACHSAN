import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMajor } from '../redux/reducers';
import RNPickerSelect from 'react-native-picker-select';

const Student = ({ navigation }) => {
  const students = useSelector((state) => state.students.students);
  const major = useSelector((state) => state.students.selectedMajor);
  const dispatch = useDispatch();

  // Log the current state of students and selected major
  console.log("Current students:", students);
  console.log("Selected major:", major);

  const handleSelectMajor = (value) => {
    console.log("Selected major:", value); // Log the selected major value
    dispatch(setSelectedMajor(value)); // Update selected major in Redux store
  };

  const handleNavigateToStudent = () => {
    console.log("Navigating to Student List"); // Log navigation action
    navigation.navigate('StudentList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn Ngành Học</Text>
      <RNPickerSelect
        onValueChange={handleSelectMajor}
        items={[
          { label: 'Công nghệ thông tin', value: 'cntt' },
          { label: 'Quản trị kinh doanh', value: 'qtkd' },
          { label: 'Sửa chữa ôtô', value: 'sco' },
          { label: 'Khoa học vật liệu', value: 'khvl' },
          { label: 'Thiết kế thời trang', value: 'tktt' },
        ]}
        placeholder={{ label: 'Chọn ngành học', value: null }}
        style={pickerSelectStyles}
      />
      <Text>Ngành học đã chọn: {major}</Text>
      <Button title="Thêm Sinh Viên" onPress={() => navigation.navigate('Student')} />
      <Button title="Xem Sinh Viên" onPress={handleNavigateToStudent} />
      <Text style={styles.title}>Danh Sách Sinh Viên</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.studentItem}>
            {item.name} - {item.major}
          </Text>
        )}
      />
      <Button title="Trở về Trang Chủ" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  studentItem: {
    fontSize: 18,
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
    width: 250,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
    width: 250,
  },
});

export default Student;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentWithMajor, setSelectedMajor } from '../redux/reducers'; // Adjust the import as needed
import RNPickerSelect from 'react-native-picker-select';

const AddStudent = ({ navigation }) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    // Get the selected major from Redux
    const major = useSelector((state) => state.students.selectedMajor);
    console.log("AddStudent re-rendered. Selected Major:", major);

    const handleAddStudent = () => {
        console.log("Attempting to add student with major:", major); // Log before checking the major

        switch (true) {
            case name.trim() === '':
                alert('Vui lòng nhập tên sinh viên!'); // Alert if the name is empty
                return;

            // case !major:
            //     alert('Vui lòng chọn ngành học!'); // Alert if the major is not selected
            //     return;

            default:
                const newStudent = { id: Math.random().toString(), name }; // Create new student
                console.log("Adding student:", newStudent); // Log the new student for debugging
                dispatch(addStudentWithMajor({ student: newStudent })); // Use the combined action
                setName(''); // Clear the input field
                dispatch(setSelectedMajor(null)); // Reset the selected major
                navigation.navigate('Home'); // Navigate back to Home after adding a student
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thêm Sinh Viên</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên sinh viên"
                value={name}
                onChangeText={setName}
            />
            <RNPickerSelect
                onValueChange={(value) => {
                    console.log("Major Selected:", value); // Log the selected value
                    dispatch(setSelectedMajor(value)); // Update Redux state
                }}
                items={[
                    { label: 'Công nghệ thông tin', value: 'cntt' },
                    { label: 'Quản trị kinh doanh', value: 'qtkd' },
                    { label: 'Sửa chữa ôtô', value: 'sco' },
                    { label: 'Khoa học vật liệu', value: 'khvl' },
                    { label: 'Thiết kế thời trang', value: 'tktt' },
                ]}
                placeholder={{ label: 'Chọn ngành học', value: null }}
                style={pickerSelectStyles}
                value={major} // Bind to Redux state
            />
            <Button title="Thêm" onPress={handleAddStudent} />
            <Button title="Trở về Trang Chủ" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        marginBottom: 20,
        width: '80%',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        marginBottom: 20,
        width: '80%',
    },
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
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default AddStudent;
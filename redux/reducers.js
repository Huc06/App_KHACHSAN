// // app/studentSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   students: [
    
//   ],
//   selectedMajor: '', // Ngành học được chọn sẽ lưu ở đây
// };

// const studentSlice = createSlice({
//   name: 'students',
//   initialState,
//   reducers: {
//     setSelectedMajor(state, action) {
//       state.selectedMajor = action.payload;
//     },
//     addStudent(state, action) {
//       state.students.push(action.payload);
//     },
//     removeStudent(state, action) {
//       state.students = state.students.filter(student => student.id !== action.payload);
//     },
//   },
// });

// // Export actions
// export const { setSelectedMajor, addStudent, removeStudent } = studentSlice.actions;

// // Export reducer
// export default studentSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  selectedMajor: null, // Selected major
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setSelectedMajor(state, action) {
      console.log("Updating selected major to:", action.payload);
      state.selectedMajor = action.payload; // Update the selected major
    },
    addStudentWithMajor(state, action) {
      const { student } = action.payload; // Destructure student from action payload
      const major = state.selectedMajor; // Get the selected major from state
      
      switch (true) {
        case major !== null: // Check if the major is defined
          console.log("Adding student with details:", student, "and major:", major);
          state.students.push({ ...student, major }); // Include the selected major
          console.log("Updated students list:", state.students);
          break;
        default:
          console.warn("Cannot add student. Selected major is undefined.");
          break;
      }
    },
    removeStudent(state, action) {
      state.students = state.students.filter(student => student.id !== action.payload);
      console.log("Updated students list after removal:", state.students);
    },
    clearStudents(state) {
      state.students = []; // Clear the students array
      console.log("Cleared all students.");
    },
    clearSelectedMajor(state) {
      state.selectedMajor = null; // Reset the selected major
      console.log("Cleared selected major.");
    },
  },
});

// Export actions
export const {
  setSelectedMajor,
  addStudentWithMajor,
  removeStudent,
  clearStudents,
  clearSelectedMajor,
} = studentSlice.actions;

// Export reducer
export default studentSlice.reducer;
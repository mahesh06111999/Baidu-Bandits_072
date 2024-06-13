// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: 18,
  gender: '',
  country: '',
  weight: '',
  healthIssues: '',
  profession: '',
  waterIntake: '',
  exercise: [],
  yoga: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;

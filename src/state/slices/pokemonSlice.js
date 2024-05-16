import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import Axios from "../../utils/axiosConfig";


const initialState = {
    count: 0,
    contents: '',
    isLoading: false,
    error: '',
    logout: ''
};



const authSclice = createSlice({
    name: "login",
    initialState,
    
  });
  
  //export const { increment } = incSclice.actions;
  export default authSclice.reducer; 
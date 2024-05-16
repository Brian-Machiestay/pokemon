import { createSlice } from "@reduxjs/toolkit";
//import Axios from "../../utils/axiosConfig";

import styles from '../../assets/styles/defaultTheme.module.scss';

console.log(styles)
const initialState = {
    theme: styles
};



const pokemonSclice = createSlice({
    name: "login",
    initialState,
});
  
  //export const { increment } = incSclice.actions;
  export default pokemonSclice.reducer; 
import { createSlice } from "@reduxjs/toolkit";
//import Axios from "../../utils/axiosConfig";

import styles from '../../assets/styles/defaultTheme.module.scss';
import blueStyles from '../../assets/styles/blueTheme.module.scss';
import orangeStyles from '../../assets/styles/orangeTheme.module.scss';

console.log(styles)
const initialState = {
    theme: styles
};



const pokemonSclice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            if (action.payload === 'blue') state.theme = blueStyles;
            else if (action.payload === 'default') state.theme = styles;
            else if (action.payload === 'orange') state.theme = orangeStyles;
        }
    }
});
  
  export const { changeTheme } = pokemonSclice.actions;
  export default pokemonSclice.reducer; 
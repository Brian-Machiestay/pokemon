import { createSlice } from "@reduxjs/toolkit";
//import Axios from "../../utils/axiosConfig";

import styles from '../../assets/styles/defaultTheme.module.scss';
import blueStyles from '../../assets/styles/blueTheme.module.scss';
import orangeStyles from '../../assets/styles/orangeTheme.module.scss';

console.log(styles)
const initialState = {
    theme: styles,
    color: '#DE527F',
    pageSize: 8,
    pageNumber: 1
};



const pokemonSclice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            if (action.payload === 'blue') {
                state.theme = blueStyles;
                state.color = '#2aa3e9'
            }
            else if (action.payload === 'default') {
                state.theme = styles;
                state.color = '#DE527F';
            }
            else if (action.payload === 'orange') {
                state.theme = orangeStyles;
                state.color = '#e4b827';
            }
        },
        changePageSize: (state, action) => {
            state.pageSize = Number(action.payload)
        },
        changePageNumber: (state, action) => {
            console.log('page number was changed')
            state.pageNumber = Number(action.payload)
        }
    }
});
  
  export const { changeTheme, changePageSize, changePageNumber } = pokemonSclice.actions;
  export default pokemonSclice.reducer; 
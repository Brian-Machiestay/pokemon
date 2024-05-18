import React from "react";
import { useDispatch } from "react-redux";

import styles from '../assets/styles/components/pokeSize.module.scss';

import downArrow from '../assets/images/arrowdown.svg';

import { changePageSize } from "../state/slices/pokemonSlice";

import $ from 'jquery';

const Pokesize = () => {

    const dispatch = useDispatch();

    function changeOption (e) {
        //console.log('fired');
        const val = $(e.target).text();
        //console.log(val)
        $(`.${styles.optionSelected}`).text(val);
        $(`.${styles.optionSelected}`).text(val)
        dispatch(changePageSize(val))
        $(`.${styles.options}`).css('display', 'none');
    }

    function displayOption() {
        $(`.${styles.options}`).css('display', 'flex');
    }

    return (
        <div className={styles.container}>
            <button onClick={displayOption} className={styles.display_option}><span className={styles.optionSelected}>8</span><img src={downArrow} alt="select" /></button>
            <div className={styles.options}>
                <button onClick={changeOption}>8</button>
                <button onClick={changeOption}>12</button>
                <button onClick={changeOption}>16</button>
                <button onClick={changeOption}>24</button>
            </div>
        </div>
    )
}

export default Pokesize;
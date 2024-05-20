import React from "react";
import styles from '../assets/styles/components/navbar.module.scss';


import searchIcon from '../assets/images/search_icon.svg';
import home_img from '../assets/images/home-image.svg';

import { changeTheme } from "../state/slices/pokemonSlice";


import $ from 'jquery';

import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {

    const theme = useSelector((state) => state.pokemon.theme);
    const dispatch = useDispatch();

    const showThemeModal = () => {
        $('#changeThemeModal').modal('show');
    }

    const changeDefaultTheme = (e) => {
        const selectedTheme = $(e.target).parent().data('theme');
        console.log(selectedTheme)
        dispatch(changeTheme(selectedTheme))
    }

    return(
        <div className={`${styles.container} ${theme.default_theme}`}>
            <div className={styles.image_header}>
                <img className={styles.nav_image} src={home_img} alt="home" />
                <h1>Pok&#232;<span>book</span></h1>
            </div>
            <div className={styles.search_bar}>
                <img src={searchIcon} alt="search" className={styles.search_icon} />
                <input type="text" placeholder="Enter pokemon name"  />
            </div>
            <div className={styles.theme_select} onClick={showThemeModal}>
                <div className={`${styles.sub_theme} ${theme.background}`}>

                </div>
            </div>
            <div className="modal fade" id="changeThemeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-dialog-centered ${styles.modalContainer}`} role="document">
                    <div className={`modal-content ${styles.modalContent}`}>
                        <h1>Choose Theme</h1>
                        <div className={styles.themes}>
                            <div data-theme='default' className={`${styles.theme_select} ${styles.theme_options}`} onClick={changeDefaultTheme}>
                                <button className={`${styles.sub_theme} ${styles.default_color}`}></button>
                            </div>
                            <div data-theme='blue' className={`${styles.theme_select} ${styles.theme_options}`} onClick={changeDefaultTheme}>
                                <button className={`${styles.sub_theme} ${styles.blue_color}`}></button>
                            </div>
                            <div data-theme='orange' className={`${styles.theme_select} ${styles.theme_options}`} onClick={changeDefaultTheme}>
                                <button className={`${styles.sub_theme} ${styles.orange_color}`}></button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
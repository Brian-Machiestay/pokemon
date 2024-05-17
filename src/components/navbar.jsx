import React from "react";
import styles from '../assets/styles/components/navbar.module.scss';


import searchIcon from '../assets/images/search_icon.svg';
import home_img from '../assets/images/home-image.svg'


import { useSelector } from "react-redux";

const Navbar = () => {

    const theme = useSelector((state) => state.pokemon.theme)


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
            <div className={styles.theme_select}>
                <div className={`${styles.sub_theme} ${theme.background}`}>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
import React from "react";
import styles from '../assets/styles/pages/home.module.scss';
import home_img from '../assets/images/home-image.svg';
import search_icon from '../assets/images/search_icon.png';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const theme = useSelector((state) => state.pokemon.theme);
    console.log(theme)

    const gotoAll = () => {
        navigate('/all');
    }


    return (
        <div className={`${styles.container} ${theme.default_theme}`}>
            <img src={home_img} alt="home" className={home_img} />
            <h1>Pok&#232;<span className={theme.color}>book</span></h1>
            <p>Largest Pok&#232;mon index with information about every pokemon you can think of</p>
            <div className={`${styles.search_bar} ${theme.border}`}>
                <input type="text" placeholder="Enter pokemon name" />
                <img src={search_icon} alt="search" className={theme.background} onClick={gotoAll} />
            </div>
            <Link to="/all">View all</Link>
        </div>
    )
}

export default Home;
import React from "react";

import Navbar from "../components/navbar";
import Pokecard from "../components/pokecard";

import styles from '../assets/styles/pages/pokeList.module.scss';

const PokeList = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.poke_list}>
                <Pokecard />
                <Pokecard />
            </div>
        </div>
    )
}

export default PokeList;
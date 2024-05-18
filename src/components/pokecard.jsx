import React from 'react';

import testPokemon from '../assets/images/onepoke.svg';
import viewIcon from '../assets/images/view.svg';

import styles from '../assets/styles/components/pokecard.module.scss';

import { useSelector } from 'react-redux';


const Pokecard = (props) => {
    const theme = useSelector((state) => state.pokemon.theme);
    console.log(theme)

    return (
        <div className={`${styles.container} ${theme.default_theme}`}>
            <div className={styles.img_container}>
                <img src={testPokemon} alt='pokename'/>
            </div>
            <p className={styles.pokemon_name}>{props.data.name}</p>
            <div className={styles.poke_types}>
                <p className={styles.poke_type}>🔥 Fire</p>
                <p className={styles.poke_type}>🦋 Flying</p>
            </div>
            <div className={styles.extra}>
                <button className={`${styles.view_pokemon} ${theme.background}`}>View Pokemon <img src={viewIcon} alt='view' /></button>
            </div> 
        </div>
    )
}

export default Pokecard;
import React from 'react';

//import testPokemon from '../assets/images/onepoke.svg';
import viewIcon from '../assets/images/view.svg';

import styles from '../assets/styles/components/pokecard.module.scss';

import { useSelector } from 'react-redux';

import ViewPokemon from './viewPokemon';

import $ from 'jquery'


const Pokecard = (props) => {
    const theme = useSelector((state) => state.pokemon.theme);
    //console.log(theme)

    const openViewPokemon = () => {
        $(`#viewpokemon-${props.data.id}`).modal('show');
    }

    if (props.similar !== undefined) {
        return (
            <div className={`${styles.container} ${theme.default_theme} ${styles.similar}`}>
                <div className={styles.img_container}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.similar.id}.png`} alt='pokename'/>
                </div>
                <p className={styles.pokemon_name}>{props.similar.name}</p>
            </div>
        )
    }

    return (
        <div className={`${styles.container} ${theme.default_theme}`}>
            <div className={styles.img_container}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`} alt='pokename'/>
            </div>
            <p className={styles.pokemon_name}>{props.data.name}</p>
            <div className={styles.poke_types}>
                {
                    props.data.types.map((tt, idx) => {
                        return <p key={idx} className={styles.poke_type}>{tt.type.name}</p>
                    })
                }
            </div>
            <div className={styles.extra}>
                <button className={`${styles.view_pokemon} ${theme.background}`} onClick={openViewPokemon}>View Pokemon <img src={viewIcon} alt='view' /></button>
            </div>
            <ViewPokemon data={props.data} /> 
        </div>
    )
}

export default Pokecard;
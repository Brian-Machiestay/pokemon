import React from "react";

import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';

import styles from '../assets/styles/components/viewPokemon.module.scss';

import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

import RangeInput from "./rangeInput";

import $ from 'jquery'

const ViewPokemon = (props) => {

    const theme = useSelector((state) => state.pokemon.theme)
    const [coverColor, setCoverColor] = useState('loading');
    const [activeTab, setActiveTab] = useState('About')

    //console.log(coverColor)
    const getDominantColor = (imageUrl, callback) => {
        const img = document.createElement("IMG");
        const colorThief = new ColorThief();
        img.setAttribute("src", imageUrl);
        img.crossOrigin = "Anonymous";
        if (img.complete) {
          callback(colorThief.getColor(img));
        } else {
          img.addEventListener("load", function () {
            callback(colorThief.getColor(img));
          });
        }
    }

    const changeTab = (e) => {
        const tab = $(e.target).text()
        setActiveTab(tab)
    }

    let details = 
    <div className={`${styles.details} ${styles.about}`}>
        <p className={styles.title}>About</p>
        <div className={styles.metrics}>
            <div className={styles.metric}>
                <p>Height</p>
                <p className={styles.metricValue}>{props.data.height} m</p>
            </div>
            <div className={styles.metric}>
                <p>Weight</p>
                <p className={styles.metricValue}>{props.data.weight}.0 kg</p>
            </div>
            <div className={styles.metric}>
                <p>Abilities</p>
                <ul>
                {
                    props.data.abilities.map((tt, idx) => <li key={idx} className={styles.metricValue}>{tt.ability.name}</li>)
                }
                </ul>
            </div>
        </div>
    </div>

    if (activeTab === 'Stats') {
        details = 
        <div className={styles.details}>
            <p className={styles.title}>Stats</p>
            <div className={`${styles.metrics} ${theme.default_theme}`}>
                {
                    props.data.stats.map((st, idx) => {
                        return <div key={idx} className={`${styles.metric} ${styles.inputMetric}`}>
                            <p>{st.stat.name}</p>
                            <RangeInput min={0} max={200} initialValue={st.base_stat} />
                            <p className={styles.inputValue}>{st.base_stat}</p>
                        </div>
                    })
                }
            </div>
        </div>
    }


    useEffect(() => {
        getDominantColor(props.data.sprites.front_default, setCoverColor)
        // eslint-disable-next-line
    }, [])

    return (
        <div className={`modal fade ${styles.modalBackdrop}`} id={`viewpokemon-${props.data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-dialog-centered ${styles.modalContainer}`} role="document">
                    {
                        coverColor === 'loading'? <div className={`modal-content ${styles.modalContent} ${styles.loading}`}><p>Loading</p></div>
                        :
                        <div className={`modal-content ${styles.modalContent}`}>
                            <div className={styles.cover} style={{ backgroundColor: `rgb(${coverColor?.map((v) => v + 30)})` }}>
                                <button>&#8592;</button>
                                <img src={props.data.sprites.front_default} alt="pokemon" />
                            </div>
                            <p className={styles.name}>{props.data.name}</p>
                            <div className={styles.types}>
                            {
                                props.data.types.map((tt, idx) => {
                                    return <p key={idx} className={styles.poke_type}>{tt.type.name}</p>
                                })
                            }
                            </div>
                            <div className={styles.details}>
                                <p className={styles.title}>Similar</p>
                                <div className={`${styles.metrics} ${theme.default_theme}`}>

                                </div>
                            </div>
                            <div className={styles.tabs}>
                                <button className={activeTab === 'About'? `${styles.active}`: ''} onClick={changeTab}>About</button>
                                <button className={activeTab === 'Stats'? `${styles.active}`: ''} onClick={changeTab}>Stats</button>
                                <button className={activeTab === 'Similar'? `${styles.active}`: ''} onClick={changeTab}>Similar</button>
                            </div> 
                        </div>
                    }
                </div>
        </div>
    )
}

export default ViewPokemon;
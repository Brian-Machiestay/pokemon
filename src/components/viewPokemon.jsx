import React from "react";

import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';

import styles from '../assets/styles/components/viewPokemon.module.scss';

import { useSelector } from "react-redux";

import { useState } from "react";

import RangeInput from "./rangeInput";

import $ from 'jquery'

const ViewPokemon = (props) => {

    const theme = useSelector((state) => state.pokemon.theme)
    const [activeTab, setActiveTab] = useState('About')

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
                <p className={styles.metricValue}>10.3 m</p>
            </div>
            <div className={styles.metric}>
                <p>Weight</p>
                <p className={styles.metricValue}>13.0 kg</p>
            </div>
            <div className={styles.metric}>
                <p>Abilities</p>
                <ul>
                    <li className={styles.metricValue}>overgrow</li>
                    <li className={styles.metricValue}>chlorophyll</li>
                </ul>
            </div>
        </div>
    </div>

    if (activeTab === 'Stats') {
        details = 
        <div className={styles.details}>
                            <p className={styles.title}>Stats</p>
                            <div className={`${styles.metrics} ${theme.default_theme}`}>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>HP</p>
                                    <RangeInput initialValue={20} />
                                    <p className={styles.inputValue}>20</p>
                                </div>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>Attack</p>
                                    <RangeInput initialValue={90} />
                                    <p className={styles.inputValue}>90</p>
                                </div>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>Defense</p>
                                    <RangeInput initialValue={70} />
                                    <p className={styles.inputValue}>70</p>
                                </div>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>Special Attack</p>
                                    <RangeInput initialValue={10} />
                                    <p className={styles.inputValue}>10</p>
                                </div>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>Special Defense</p>
                                    <RangeInput initialValue={70} />
                                    <p className={styles.inputValue}>70</p>
                                </div>
                                <div className={`${styles.metric} ${styles.inputMetric}`}>
                                    <p>Speed</p>
                                    <RangeInput initialValue={90} />
                                    <p className={styles.inputValue}>90</p>
                                </div>
                            </div>
                        </div>
    }

    return (
        <div className={`modal fade ${styles.modalBackdrop}`} id={`viewpokemon-${props.data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-dialog-centered ${styles.modalContainer}`} role="document">
                    <div className={`modal-content ${styles.modalContent}`}>
                        <div className={styles.cover}>
                            <button>&#8592;</button>
                            <img src={props.data.sprites.front_default} alt="pokemon" />
                        </div>
                        <p className={styles.name}>{props.data.name}</p>
                        <div className={styles.types}>
                        {
                            props.data.types.map((tt) => {
                                return <p className={styles.poke_type}>{tt.type.name}</p>
                            })
                        }
                        </div>
                        {
                            details
                        }
                        <div className={styles.tabs}>
                            <button className={activeTab === 'About'? `${styles.active}`: ''} onClick={changeTab}>About</button>
                            <button className={activeTab === 'Stats'? `${styles.active}`: ''} onClick={changeTab}>Stats</button>
                            <button className={activeTab === 'Similar'? `${styles.active}`: ''} onClick={changeTab}>Similar</button>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

export default ViewPokemon;
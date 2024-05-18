import React from "react";

import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';

import styles from '../assets/styles/components/viewPokemon.module.scss';


const ViewPokemon = (props) => {

    function getDominantColor(imageUrl, callback) {
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
                        <div className={styles.details}>
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
                        <div className={styles.tabs}>
                            <button>About</button>
                            <button>Stats</button>
                            <button>Similar</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ViewPokemon;
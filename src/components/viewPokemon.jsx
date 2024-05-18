import React from "react";

import styles from '../assets/styles/components/viewPokemon.module.scss';


const ViewPokemon = (props) => {
    return (
        <div className={`modal fade ${styles.modalBackdrop}`} id={`viewpokemon-${props.data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-dialog-centered ${styles.modalContainer}`} role="document">
                    <div className={`modal-content ${styles.modalContent}`}>
                        <p>This is pokemon details id = {props.data.id}</p>
                    </div>
                </div>
        </div>
    )
}

export default ViewPokemon;
import React from 'react';

import styles from '../assets/styles/components/pageBtns.module.scss';

import { useSelector } from 'react-redux';


const PageBtns = () => {
    const theme = useSelector((state) => state.pokemon.theme);

    return (
        <div className={`${styles.container} ${theme.default_theme}`}>
            <button>&#x3c;</button>
            <button className={theme.active}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <p>...</p>
            <button>12</button>
            <button>{'>'}</button>
        </div>
    )
}

export default PageBtns;
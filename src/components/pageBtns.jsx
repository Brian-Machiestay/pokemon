import React from 'react';

import styles from '../assets/styles/components/pageBtns.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';

import { changePageNumber } from '../state/slices/pokemonSlice';

import $ from 'jquery';

const PageBtns = () => {
    const [activeBtn, setActiveBtn] = useState('1');
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.pokemon.theme);

    const changePageNumberState = (e) => {
        for ( const item of $(`.${styles.container}`).children()) {
            if ($(item).hasClass(`${theme.active}`)) $(item).removeClass(`${theme.active}`)
        }
        //$(e.target).addClass(`${theme.active}`)
        const num = $(e.target).text();
        dispatch(changePageNumber(num))
        setActiveBtn(num);
    }

    useEffect(() => {
        //console.log('useeffect was called')
        //console.log($('#pageBtns').children())
        for (const item of $('#pageBtns').children()) {
            console.log(item)
            if ($(item).text() === activeBtn) {
                $(item).addClass(`${theme.active}`)
            }
            else {
                $(item).removeClass(`${theme.active}`)
            }
        }
    }, [activeBtn, theme])

    return (
        <div id='pageBtns' className={`${styles.container} ${theme.default_theme}`}>
            <button>&#x3c;</button>
            <button className={theme.active} onClick={changePageNumberState}>1</button>
            <button onClick={changePageNumberState}>2</button>
            <button onClick={changePageNumberState}>3</button>
            <button onClick={changePageNumberState}>4</button>
            <p>...</p>
            <button onClick={changePageNumberState}>12</button>
            <button>{'>'}</button>
        </div>
    )
}

export default PageBtns;
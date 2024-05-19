import React from 'react';

import styles from '../assets/styles/components/pageBtns.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';

import { changePageNumber } from '../state/slices/pokemonSlice';

import $ from 'jquery';

const PageBtns = () => {
    const [activeBtn, setActiveBtn] = useState('1');
    const [btnNums, setBtnNums] = useState([2, 3, 4])
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

    const shiftLeft = () => {
        if (btnNums[0] === 2) return
        const newNums = btnNums.map((num) => num - 1)
        setBtnNums(newNums)
    }

    const shiftRight = () => {
        if (btnNums[btnNums.length - 1] === 11) return
        const newNums = btnNums.map((num) => num + 1)
        setBtnNums(newNums)
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
    }, [activeBtn, theme, btnNums])

    return (
        <div id='pageBtns' className={`${styles.container} ${theme.default_theme}`}>
            <button onClick={shiftLeft}>&#x3c;</button>
            <button className={theme.active} onClick={changePageNumberState}>1</button>
            {
                btnNums[0] > 2? <p>...</p> : false
            }
            {
                btnNums.map((num, idx) => {
                    return <button key={idx} onClick={changePageNumberState}>{num}</button>
                })
            }
            {
                btnNums[btnNums.length - 1] < 11? <p>...</p> : false
            }  
            <button onClick={changePageNumberState}>12</button>
            <button onClick={shiftRight}>{'>'}</button>
        </div>
    )
}

export default PageBtns;
import React from "react";
import { useEffect, useRef, useState } from 'react';

import styles from '../assets/styles/components/rangeInput.module.scss';

import { useSelector } from "react-redux";


const RangeInput = ({ min = 0, max = 100, initialValue = 70 }) => {
    const color = useSelector((state) => state.pokemon.color)
    const rangeRef = useRef(null);

    const updateRangeFill = () => {
        if (rangeRef.current) {
            //const percent = ((initialValue - min) / (max - min)) * 100;
            rangeRef.current.style.setProperty('--range-percent', `${initialValue}%`);
            rangeRef.current.style.setProperty('--color', `${color}`);
        }
    };

    useEffect(() => {
        updateRangeFill();
    }, [color]);

    return (
        <input
      type="range"
      min={min}
      max={max}
      ref={rangeRef}
      className={`range-input ${styles.container}`}
    />
    )
}

export default RangeInput;
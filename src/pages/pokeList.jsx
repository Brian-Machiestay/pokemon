import React from "react";

import Navbar from "../components/navbar";
import Pokecard from "../components/pokecard";
import PageBtns from "../components/pageBtns";
import Pokesize from "../components/pokeSize";

import Axios from "../utils/axiosConfig";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";

import styles from '../assets/styles/pages/pokeList.module.scss';

const PokeList = () => {
    const [pokeDatatoRender, setPokeDatatoRender] = useState('loading');
    const pageSize = useSelector((state) => state.pokemon.pageSize)
    const pageNumber = useSelector((state) => state.pokemon.pageNumber)
    const getPokeList = async () => {
        const data = await Axios.get(`pokemon/?limit=${pageSize}offset=${pageSize * pageNumber - pageSize}`);
        const dataDetails = data['data']['results'].map((poke) => {
            return axios.get(poke['url'])
        })
        const pokeDetails = await axios.all(dataDetails)
        const pokeData = pokeDetails.map((item) => {
            return item['data']
        })
        setPokeDatatoRender(pokeData);
        console.log(pokeData)
    }

    useEffect(() => {
        getPokeList();
    }, [])

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.poke_list}>
            {
                pokeDatatoRender === 'loading'? <p>Loading</p>
                :
                pokeDatatoRender.map((item) => {
                    return <Pokecard data={item} key={item.id}/>
                })
            }
            </div>
            <div className={styles.page_details}>
                <PageBtns />
                <Pokesize />
            </div>
        </div>
    )
}

export default PokeList;
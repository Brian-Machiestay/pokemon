import React from "react";

import Navbar from "../components/navbar";
import Pokecard from "../components/pokecard";
import PageBtns from "../components/pageBtns";
import Pokesize from "../components/pokeSize";

import Axios from "../utils/axiosConfig";
import { populatePokeData } from "../state/slices/pokemonSlice";

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import styles from '../assets/styles/pages/pokeList.module.scss';

const PokeList = () => {
    const dispatch = useDispatch()
    const [pokeDatatoRender, setPokeDatatoRender] = useState('loading');
    const pageSize = useSelector((state) => state.pokemon.pageSize)
    const pageNumber = useSelector((state) => state.pokemon.pageNumber)
    const getPokeList = async () => {
        setPokeDatatoRender('loading')
        try {
            const data = await Axios.get(`pokemon/?limit=${pageSize}&offset=${pageSize * pageNumber - pageSize}`);
            console.log(data)
            const dataDetails = data['data']['results'].map((poke) => {
                return axios.get(poke['url'])
            })
            const pokeDetails = await axios.all(dataDetails)
            const pokeData = pokeDetails.map((item) => {
                return item['data']
            })
            setPokeDatatoRender(pokeData);
            dispatch(populatePokeData(pokeData))
            console.log(pokeData)
        } catch(e) {
            setPokeDatatoRender('error')
            return
        }
    }

    useEffect(() => {
        //console.log('use effect should be called')
        getPokeList();
        //console.log(`page number is ${pageNumber}`)
        // eslint-disable-next-line 
    }, [pageNumber, pageSize])

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.poke_list}>
            {
                pokeDatatoRender === 'error'? <p className={styles.loading}>An error occurred</p>: false
            }
            {
                pokeDatatoRender === 'loading' && pokeDatatoRender !== 'error'? <p className={styles.loading}>Loading...</p>
                :
                false
            }

            {
                pokeDatatoRender !== 'loading' && pokeDatatoRender !== 'error'? pokeDatatoRender.map((item) => {
                    return <Pokecard data={item} key={item.id}/>
                })
                :
                false
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
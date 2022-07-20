import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailsPage} from '../../routes/Cordinator'


export const PokemonCard = (props) => {

    const navigate = useNavigate()

    const [pokeName, setPokeName] = useState("")
    const [order, setOrder] = useState("")
    const [types, setTypes] = useState([])

    useEffect(() => {
        getPokemonDetails(props.pokeName)
    }, [])

    const getPokemonDetails = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
            setPokeName(res.data.name)
            setOrder(res.data.order)
            setTypes(res.data.types)
            // console.log(res.data.stats)
                
         })
        .catch((err) => {
            console.log(err)
        })
    }


    const listTypes = types.map((type) => {
        return (
            <p key={type.slot}>{type.type.name}</p>
        )
    })
    

    return (
        <div>
            <h3>{pokeName}</h3>
            <p><strong>Order:</strong> {order}</p>
            <p> <strong>Types:</strong>{listTypes}</p>
            <button onClick={() => goToDetailsPage(navigate, pokeName)}>Detalhes</button>
            <button>Capturar</button>
            <hr />
        </div>
    )
}

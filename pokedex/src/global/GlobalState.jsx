import Reac from "react"
import GlobalStateContext from "./GlobalStateContext"
import { useState } from "react"
import axios from "axios"

const GlobalState = (props) => {
    // ESTADOS 
    // Lista de todos os pokemons
    const [allPokemons, setAllPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    // REQUISIÇÕES
    const getAllPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((res) => {
          setAllPokemons(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // ORGANIZANDO

    const states = { allPokemons, pokedex }
    const setters = {setPokedex}
    const requests = { getAllPokemons }

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
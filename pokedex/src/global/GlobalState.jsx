import Reac from "react"
import GlobalStateContext from "./GlobalStateContext"
import { useState, useEffect } from "react"
import axios from "axios"

const GlobalState = (props) => {
    // ESTADOS 
    // Lista de todos os pokemons
    const [allPokemons, setAllPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    // REQUISIÇÕES
    const getAllPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
      .then((res) => {
        setAllPokemons(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    // FUNÇÃO DE ADICIONAR À POKEDEX
    const capturePokemon = (pokeName) => {
      console.log(pokeName)
      setPokedex([...pokedex, pokeName])
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }

    
    

    // FUNÇÃO DE REMOVER DA POKEDEX
    const removePokemon = (pokeName) => {
      setPokedex(pokedex.filter((pokemon) => {
        if(pokemon !== pokeName){
          return pokemon
        }
      }))
    }
  
    const pokedexStorage = JSON.parse(localStorage.getItem('pokedex'))

    // ORGANIZANDO

    const states = { allPokemons, pokedex, pokedexStorage}
    const requests = { getAllPokemons, capturePokemon, removePokemon}

    return (
        <GlobalStateContext.Provider value={{states, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
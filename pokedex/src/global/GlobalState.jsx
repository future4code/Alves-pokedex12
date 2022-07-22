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
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
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
      console.log(pokedex)
      // localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }

    localStorage.setItem('pokedex', JSON.stringify(pokedex))
    
    

    // FUNÇÃO DE REMOVER DA POKEDEX
    const removePokemon = (pokeName) => {
      const newPokedex = pokedex.filter((pokemon) => {
        if(pokemon !== pokeName){
          return pokemon
        }
      })
      setPokedex(newPokedex)
      console.log(pokedex)
      // localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }
  
    

    // ORGANIZANDO
    const states = { allPokemons, pokedex }
    const setters = {setPokedex}
    const requests = { getAllPokemons, capturePokemon, removePokemon}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
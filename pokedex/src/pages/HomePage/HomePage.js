import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'

const HomePage = () => {

  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    getAllPokemons()
  }, [])

  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then((res) => {
      setAllPokemons(res.data.results)
      console.log(allPokemons)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  const allPokemonsList = allPokemons.map((pokemon) => {

    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon.name}/>
      </div>
    )
  })

  return (
    <div>
      <Header/>
      {allPokemonsList}
    </div>
  )
}

export default HomePage

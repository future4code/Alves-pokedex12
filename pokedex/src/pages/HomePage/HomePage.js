import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { ContainerGrid } from './HomeStyled'

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getAllPokemons()
  }, [requests])

  const allPokemonsList = states.allPokemons.map(pokemon => {
    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon.name} />
      </div>
    )
  })

  return (
    <div>
      <Header />
      <ContainerGrid>{allPokemonsList}</ContainerGrid>
    </div>
  )
}

export default HomePage

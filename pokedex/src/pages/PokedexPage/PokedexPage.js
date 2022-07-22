import React from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { ContainerGrid } from './PokedexStyled'

const PokedexPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  const pokedexStorage = JSON.parse(localStorage.getItem('pokedex'))

  console.log(pokedexStorage)
  
  const pokedexList = pokedexStorage.map(pokemon => {
    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon.name} />
      </div>)
  })

  return (
    <div>
      <h1>PokedexPage</h1>
      <ContainerGrid>{pokedexList}</ContainerGrid>
    </div>
  )
}

export default PokedexPage

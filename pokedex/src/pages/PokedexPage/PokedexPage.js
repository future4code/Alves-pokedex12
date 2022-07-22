import React from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { ContainerGrid, ContainerPokedex } from './PokedexStyled'
import Header from '../../components/Header/Header'
import { CardDiv } from '../../components/PokemonCard/StyledCard'

const PokedexPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  const pokedexStorage = JSON.parse(localStorage.getItem('pokedex'))

  console.log(pokedexStorage)

  const pokedexList = pokedexStorage.map(pokemon => {
    console.log(pokemon)
    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon} />
      </div>
    )
  })

  return (
    <ContainerPokedex>
      <Header />
      <ContainerGrid>{pokedexList}</ContainerGrid>
    </ContainerPokedex>
  )
}

export default PokedexPage

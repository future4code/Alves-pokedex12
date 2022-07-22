import React from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const PokedexPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  console.log(states.pokedexStorage)
  const pokedexList = states.pokedexStorage.map(pokemon => {
    return <h3 key={pokemon}>{pokemon}</h3>
  })

  return (
    <div>
      <h1>PokedexPage</h1>
      {pokedexList}
    </div>
  )
}

export default PokedexPage

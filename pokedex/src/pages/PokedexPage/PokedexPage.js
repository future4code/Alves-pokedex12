import React from 'react'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const PokedexPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  const pokedexList = states.pokedex.map((pokemon) => {
    return <h3>{pokemon}</h3>
  })

  return (
    <div>
      <h1>PokedexPage</h1>
      {pokedexList}
    </div>
  )
}

export default PokedexPage
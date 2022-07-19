import React from 'react'
import { Div } from './style'
import PokemonLogo from '../../assets/PokemonLogo.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../../routes/Cordinator'

const Header = () => {

  const navigate = useNavigate()

  return (
    <Div>
      <img
        src={PokemonLogo}
        alt='Logo Pokémon'
      />
      <button
        onClick={() => goToPokedexPage(navigate)}
      >
        Pokédex
      </button>
    </Div>
  )
}

export default Header
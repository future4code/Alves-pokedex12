import React from 'react'
import {Div1} from './style'
import PokemonLogo from '../../assets/PokemonLogo.png'

const Header = () => {
  return (
    <Div1>
      <img src={PokemonLogo} alt='Logo Pokémon' />
    </Div1>
  )
}

export default Header
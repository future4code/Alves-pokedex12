import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailsPage} from '../../routes/Cordinator'
import {
  CardDiv,
  MinText,
  Title,
  Container,
  CatchButton,
  DetailsButton,
  TypeDiv,
  Image,
  PokemonImage,
  TypeText,
  ColorCard
} from './StyledCard'
import Pokeball from '../../assets/Pokeball.png'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import VectorSwitch from './VectorSwitch'



export const PokemonCard = (props) => {

    const navigate = useNavigate()
    const {states, setters, requests} = useContext(GlobalStateContext)
    const [pokeName, setPokeName] = useState("")
    const [order, setOrder] = useState("")
    const [types, setTypes] = useState([])
    const [image, setImage] = useState("")



    useEffect(() => {
        getPokemonDetails(props.pokeName)
    }, [])


    const getPokemonDetails = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
                setPokeName(res.data.name)
                setOrder(res.data.order)
                setTypes(res.data.types)
                setImage(res.data.sprites.other["official-artwork"].front_default)
               
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

     
    
    const listTypes = types.map((type) => {
        return (

            <TypeDiv type={type.type.name}>
            <VectorSwitch type={type.type.name}/>
            <TypeText key={type.slot}>{type.type.name.toUpperCase()}</TypeText>
            </TypeDiv>
                             
        ) 
    }
    )
    
 
        
           


    return (
        <Container >
            <CardDiv>

            <MinText># {order}</MinText>
            <Title>{pokeName.toUpperCase()}</Title>
            <>{listTypes}</>
            <DetailsButton onClick={() => goToDetailsPage(navigate, pokeName)}>Detalhes</DetailsButton>
            <Image src={Pokeball} alt="Imagem de uma pokebola" />
            <PokemonImage src={image} alt="imagem do pokemon selecionado"/>
            <CatchButton onClick={() => requests.capturePokemon(pokeName)}>Capturar</CatchButton>
                {/* <CatchButton onClick={() => requests.removePokemon(pokeName)}>Remover</CatchButton> */}

    )
}

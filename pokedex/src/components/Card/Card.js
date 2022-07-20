import React from 'react'
import VectorGrass from '../../assets/VectorGrass'
import {
  CardDiv,
  MinText,
  Title,
  Container,
  DetailsText,
  Button,
  LeftSide,
  RightSide,
  TypeDiv,
  Image
} from './StyledCard'
import Pokeball from '../../assets/Pokeball.png'

export default function Card() {
  return (
    <Container>
      <CardDiv>
        <LeftSide>
          <MinText>#1</MinText>
          <Title>Bulbassaur</Title>
          <TypeDiv>
            <VectorGrass />
            <MinText>Grass</MinText>
          </TypeDiv>
          <DetailsText>Detalhes</DetailsText>
        </LeftSide>
        <RightSide>
          <Image src={Pokeball} alt="Imagem de uma pokebola" />
          <Button>Capturar</Button>
        </RightSide>
      </CardDiv>
    </Container>
  )
}

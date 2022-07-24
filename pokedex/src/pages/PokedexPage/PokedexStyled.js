import styled from 'styled-components'

export const ContainerGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2em 2em;
  width: 100vw;
  max-width: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    margin: 20px 0 0 -4px;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    margin: 20px 0 0 -4px;
  }
`
export const ContainerPokedex = styled.div`
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    margin: 20px 0 0 -4px;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    margin: 20px 0 0 -4px;
  }
`

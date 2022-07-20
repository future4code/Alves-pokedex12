import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const DetailsPage = () => {

  const params = useParams()

  return (
    <div>
      DetailsPage
      <h2>{params.name}</h2>
    </div>
  )
}

export default DetailsPage

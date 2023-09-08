import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {theme} = useContext(ContextGlobal)
  const [dentist, setDentist] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const URL = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => setDentist(data))
  }, [])

  return (
    <div className='details'>
      <div style={{boxShadow: theme.cardShadow, backgroundColor: theme.cardBg}}>
        <h1>Detail dentist with id: {dentist.id} </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <h2>Name: {dentist.name}</h2>
        <h3>Email: {dentist.email}</h3>
        <h3>Web: {dentist.website}</h3>
        <button onClick={() => navigate(-1)} style={{backgroundColor: theme.addBtnFavBg, color: theme.font}}>Back</button>
      </div>
    </div>
  )
}

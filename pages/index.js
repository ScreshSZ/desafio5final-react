import React, { useState, useEffect } from 'react'
import MultiActionAreaCard from '../componentes/Card'
import Formulario from '../componentes/Formulario'
import BasicModal from '../componentes/Modal'
import axios from 'axios'

const Home = () => {

  const [datosApi, setDatosApi] = useState([])

  const obtenerDatos = async () => {
    const url = "https://rickandmortyapi.com/api/character"
    const res = await axios.get(url)
    setDatosApi(res.data.results)

    console.log(res.data.results)
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <>
      <div className='contenedorCards'>
        {datosApi.map((personajes, index) => <MultiActionAreaCard
          key={index}
          image={personajes.image}
          name={personajes.name}
          gender={personajes.gender} 
          city={personajes.location.name} 
          specie={personajes.species} 
          statusCurrently={personajes.status}
        />)}
      </div>
      <BasicModal />




    </>
  )
}

export default Home
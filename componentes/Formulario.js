import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { useState } from 'react';
import Alerta from '../componentes/Alerta'



const Forms = () => {

    const datosPorDefecto = {
        titulo: "",
        descripcion: ""
    }
    
    const [formulario, setFormulario] = useState({datosPorDefecto})
    const [alerta, setAlerta] = useState(false)

    const handleChange = (e)=>{
         setFormulario({
            ...formulario, [e.target.name]: e.target.value
         })
      

    }

    const onSubmit = (e)=> {
        e.preventDefault()
        const enviarDatos = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts"
        const res = await axios.post(url, formulario)
        setAlerta(true)
        
        }
        enviarDatos()
         
    }


    
    

    

   return (
    <>
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ width: "80%", margin: "3rem auto", }}
        >
            <TextField onChange={handleChange} name="titulo" value={formulario.titulo} id="filled-basic" label="Nombre" variant="filled" sx={{
                width: "100%",
                background: "#fff"
            }} />
            <TextField onChange={handleChange} name="descripcion" value={formulario.descripcion} id="filled-basic" label="Apellido" variant="filled" sx={{
                width: "100%",
                background: "#fff"
            }} />
            
            
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            {alerta ? <Alerta /> : null}
        </Box>









    </>
)
}

export default Forms
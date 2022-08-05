import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Formulario from '../componentes/Formulario'
import { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',

    p: 4,
};

export default function BasicModal() {
    const [modal, setModal] = useState(false)
    const OpenCloseModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Button variant="contained" onClick={OpenCloseModal}>Formulario</Button>
            
                <Modal     
                    open={modal}
                    onClose={OpenCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Formulario />
                </Modal>
            
        </div>
    );
}
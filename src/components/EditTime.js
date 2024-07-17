import axios from 'axios';
import React, { useEffect, useState } from 'react';
const headers = {
    "ngrok-skip-browser-warning": "123"
};

const EditTime = ({time, onTimeUpdated, onCancel}) => {
    const [nome,setNome] = useState('');

    useEffect(() => {
        if (time) {
            setNome(time.nome);
        }
    },[time]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);

        const editedTime = {
            nome
        };
        try {
            const response = await axios.put(
                `https://6349-45-236-9-52.ngrok-free.app/times/${time.id}`,
                editedTime,
                {
                    headers: headers
                });
            console.log(response);
            setNome('');
            onTimeUpdated(response.data);
        } catch (error) {
            console.error('Falha ao editar time:' + error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value) } />
                <button type="submit">Salvar time</button>
                <button type="button" onClick={onCancel}>Cancelar</button>
            </form>
        </>
    );

};

export default EditTime;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddTime from './AddTime';

const headers = {
    "ngrok-skip-browser-warning": "123"
};

function TimesList() {
    const [times,setTimes] = useState([]);

    const fetchTimes = async () => {
        try {
            const response = await axios
                .get('https://6349-45-236-9-52.ngrok-free.app/times', {
                    headers: headers
                });
            console.log(response.data);
            setTimes(response.data);
        } catch (error) {
            console.error('Erro ao obter lista de times:'+error);
        }
    };

    const handleTimeAdded = (novoTime) => {
        setTimes([...times, novoTime]);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://6349-45-236-9-52.ngrok-free.app/times/${id}`);
            setTimes(times.filter(time=>time.id !== id));
        } catch (error) {
            console.error('Erro ao remover time:'+error);
        }
    };

    useEffect(() => {
        fetchTimes();
    },[]);
    return (
        <>
            <h2>Tabela de times</h2>
            <AddTime onTimeAdded={handleTimeAdded}/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do time</th>
                        <th>Títulos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time) => (
                        <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.nome}</td>
                            <td>{time.titulos}</td>
                            <td><button onClick={() => handleDelete(time.id)}>Remover </button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TimesList;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        fetchTimes();
    },[]);
    return (
        <>
            <h2>Tabela de times</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome do time</th>
                </tr>
                {times.map((time) => (
                    <tr>
                        <td>{time.id}</td>
                        <td>{time.nome}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default TimesList;
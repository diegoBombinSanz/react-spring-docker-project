import { useState, useEffect } from 'react';
import axios from 'axios';

function TestComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL+'/test')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Mensaje del backend:</h1>
            <p>{message}</p>
        </div>
    );
}

export default TestComponent;

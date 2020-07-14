import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Clienteaxios from '../config/axios';
import '../Css/platosPage.css';

const PlatosPage = () => {

    const params = useParams();
    const [platoID, setPlatoID] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await Clienteaxios.get(`/api/v1/comidas/${params.id}`);
            setPlatoID(response.data);
            console.log(platoID);

        })();
    }, [params.id]);


    const OrderHandler = () => {
        console.log('Click para ordenar');

    }

    const plato =
        <article className="ArticlePlate px-0 mx-3 mt-md-4 text-white">
            <h3 className="mt-5">{platoID.title}</h3>
            <hr className="bg-white" />
            <div className="row justify-content-center">
                <img className="platoIMG col-6 px-0" src={`http://localhost:3001` + platoID.imageUrl} alt={platoID.title} />
                <div className="col-6 px-2">
                    <p>{platoID.description}</p>
                    <p>{platoID.summary}</p>
                </div>
            </div>
            <button onClick={OrderHandler} className="btn btn-danger my-3">Ordenar</button>
        </article>

    return (
        <div className="row mx-0 justify-content-center bg-dark">
            {plato}
        </div>
    )
}

export default PlatosPage;
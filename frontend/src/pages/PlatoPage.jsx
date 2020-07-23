import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Clienteaxios from '../config/axios';
import '../Css/platosPage.css';
import Orden from '../components/Orden';


const PlatosPage = () => {

    const params = useParams();
    const [platoID, setPlatoID] = useState([]);
    const [usuarioID, setUsuarioID] = useState([]);
    const UserID = localStorage.getItem('id');


    useEffect(() => {
        (async () => {
            const responsePlatos = await Clienteaxios.get(`/api/v1/comidas/${params.id}`);
            setPlatoID(responsePlatos.data);
            const responseUser = await Clienteaxios.get(`/api/v1/usuarios/${UserID}`);
            setUsuarioID(responseUser.data);
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
                <img className="platoIMG col-12 col-md-6 px-2 px-md-0" src={`http://localhost:3001` + platoID.imageUrl} alt={platoID.title} />
                <div className="col-12 col-md-6 px-2">
                    <p>{platoID.description}</p>
                    <p>{platoID.summary}</p>
                </div>
            </div>
            <button type="button" className="btn btn-danger my-3" data-toggle="modal" data-target="#OrdenModal">Ordenar</button>
            <Orden platoID={platoID} user={usuarioID} ordenar={OrderHandler} />
        </article>

return (
    <div className="row mx-0 justify-content-center bg-dark">
        {plato}
    </div>
)}

export default PlatosPage;
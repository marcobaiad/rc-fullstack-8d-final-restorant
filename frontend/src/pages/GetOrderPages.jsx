import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'

import clienteAxios from '../config/axios';


const GetOderPages = () => {
  const [order, setOrder] = useState([]);

  const GetOrder = useCallback(async () => {
    const res = await clienteAxios.get(`/api/v1/orden/`, order, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    setOrder(res.data)
  }, []);

  useEffect(() => {
    GetOrder()
  }, [])

  const EnProceso = async (id) => {
    await clienteAxios.put(`http://localhost:3001/api/v1/orden/${id}/ep`)
    GetOrder()
  }

  const Enviar = async (id) => {
    await clienteAxios.put(`http://localhost:3001/api/v1/orden/${id}/enviar`)
    GetOrder()
  }

  const Cancelar = (id) => {
    clienteAxios.put(`http://localhost:3001/api/v1/orden/${id}/cancelar`)
    GetOrder()
  }



  const cards = order.map(a =>
    <div key={a._id} className="my-5 card">
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <p className="card-title">Cantidad: {a.quantity}</p>
          {a.state === 'Pendiente' || a.state === 'En Proceso'
            ?

            <Link className='btn btn-outline-primary' to='/'>Ver Pedido</Link>

            :

            ''
          }
        </div>
        <p className="card-text">Pagara Con: {a.amountTopay}</p>
        <p className="card-text">Dirección: {a.address}</p>
        <p className="card-text">Comida: {a.food.title}</p>
        <p className="card-text">Usuario: {a.user.name}</p>
        <p className="card-text">Estado: {a.state}</p>
        <p className="card-text">Puntuación de Servicio: {a.score}</p>
        <div className='d-flex justify-content-around'>
          {a.state !== 'Finalizado' && a.state !== 'Cancelado'
            ?
            <>
              <button onClick={() => EnProceso(a._id)} className='btn btn-outline-primary'>En Proceso</button>
              <button onClick={() => Enviar(a._id)} className='btn btn-outline-success'>Enviado</button>
              <button onClick={() => Cancelar(a._id)} className='btn btn-outline-secondary'>Cancelar</button>
            </>
            :

            ''

          }
        </div>
      </div>
    </div>
  );



  return (
    <>
      <h1 className="my-5 text-center">Get Order</h1>
      <div className="card-columns">
        {cards}
      </div>
    </>
  );
}

export default GetOderPages;
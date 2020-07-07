import React, { useState, useEffect, useCallback } from 'react';

import clienteAxios from '../config/axios';

const GetOrderUserPages = () => {

  const [order, setOrder] = useState([]);

  const GetOrder = useCallback(async () => {
    const res = await clienteAxios.get(`/api/v1/orden/user`, order, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    setOrder(res.data)
  }, []);

  useEffect(() => {
    GetOrder()
  }, [])


  const cards = order.map(a =>
    <div key={a._id} className="my-5 card">
      <div className="card-body">
        <p className="card-title">Cantidad: {a.quantity}</p>
        <p className="card-text">Pagara Con: {a.amountTopay}</p>
        <p className="card-text">Direccion: {a.address}</p>
        <p className="card-text">ID Comida: {a.food}</p>
        <p className="card-text">ID Usuario: {a.user}</p>
        <p className="card-text">Estado: {a.state}</p>
        <div className='d-flex justify-content-around'>
          {a.state === 'Enviado'
            ?
            <>
              
              <button className='btn btn-outline-success'>Puntuar Pedido</button>
              
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
      <h1 className="my-5 text-center">Get User Order</h1>
      <div className="card-columns">
        {cards}
      </div>
    </>
  );
}

export default GetOrderUserPages;
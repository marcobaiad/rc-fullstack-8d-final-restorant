import React, { useState, useEffect, useCallback } from 'react';
import '../Css/GetOrderUserPages.css'
import clienteAxios from '../config/axios';
import { FaStar } from 'react-icons/fa'

const GetOrderUserPages = () => {

  const [order, setOrder] = useState([]);
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

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
        <p className="card-text">Comida: {a.food.title}</p>
        <p className="card-text">Usuario: {a.user.name}</p>
        <p className="card-text">Estado: {a.state}</p>
        <div>
          {a.state === 'Enviado'
            ?
            <>
              <div className='d-flex justify-content-between'>
                <div>
                  <p>Puntuar Servicio</p>
                </div>
                <div className='stars'>
                  {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1

                     return (<label>
                              <input 
                              type="radio"
                               name='rating' 
                               value={ratingValue}
                                onClick={() => setRating(ratingValue)}/>
                               <FaStar 
                               color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                               className='star' 
                               size={25} 
                               onMouseEnter={() => setHover(ratingValue)}
                               onMouseLeave={() => setHover(null)}
                               />
                            </label>)
                  })}
                </div>
              </div>
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
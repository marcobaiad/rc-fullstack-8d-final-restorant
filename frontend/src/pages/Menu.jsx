import React, { useState, useEffect } from 'react';

import clienteAxios from '../config/axios';

const Menu = () => {

	const [menu, setMenu] = useState([]);

	useEffect(() => {
		const consultApi = () => {
			clienteAxios.get('api/v1/comidas/todas')

				.then(response => {
					setMenu(response.data)
				})
				.catch(error => {
					console.log(error)
				})
		}
		consultApi();
	}, []);

	const cards = menu.map(a =>
		<div className="column" >
			<div key={a._id}
				className="card" >
				<img className="card-img-top"
					src={`http://localhost:3001` + a.imageUrl} alt=""
					alt="Card image cap" />
				<div className="card-body" >
					<h4 className="card-title"> {a.title} </h4>
					<p className="card-text" > {a.description} </p>
					<p className="card-text" > $ {a.price} </p>
					<p className="card-text" > {'' + a.enable} </p>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<h1 className="my-5 titulo" > Nuestro Menu de Comidas </h1>
			<div className="card-columns" >
				{cards}
			</div>
		</>
	);
}

export default Menu;
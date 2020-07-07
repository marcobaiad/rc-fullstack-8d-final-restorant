import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/logUser.css'
import clienteAxios from '../config/axios';

const AdmMenu = () => {

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
		<Link to={'edit/' + a._id} >
			<div className=" p-5" >
				<div
					key={a._id}
					className="card" >
					<img
						className="card-img-top"
						src={`http://localhost:3001` + a.imageUrl}
						alt="Card image cap" />
					<div className="card-body" >
						<h4 className="card-title"> {a.title} </h4>
						<p className="card-text" > {a.summary} </p>
						<p className="card-text" > {a.description} </p>
						<p className="card-text" > $ {a.price} </p>
						<p className="card-text" > {'' + a.enable} </p>
					</div>
				</div>
			</div>
		</Link>
	);

	return (
		<>
			<h1 className="my-5 text-center titleAdmFoods" > Menu de Comidas (administrador) </h1>
			<div className="container col col-8" >
				{cards}
			</div>
		</>
	);
}

export default AdmMenu;
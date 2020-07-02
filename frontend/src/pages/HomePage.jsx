import React, { useState, useEffect } from 'react';
import '../Css/homepage.css'
import axios from 'axios';

const HomePages = () => {

  const [platosHome, setPlatosHome] = useState([]);
  const [desayunos, setDesayuno] = useState([]);
  /* const [desayunos, setDesayuno] = useState([]); */

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/v1/comidas')
      setPlatosHome(response.data);
      console.log(response.data);
      
      let desayuno = response.data.filter(DesayunoHome => DesayunoHome.title === "DESAYUNO LIGHT")

      if (desayuno) {
        setDesayuno(desayuno)
      }
      

      /* if (response.data.title === "DESAYUNO") {
        GetDesayunos()
      }

      if (response.data.title === "EMPANADA") {
        GetDesayunos()
      }

      if (response.data.title === "EMPANADA") {
        GetDesayunos()
      }

      if (response.data.title === "EMPANADA") {
        GetDesayunos()
      } */

    })();
  }, []);

  const GetDesayunos = () => {
    console.log("ENTRANDO AL GET DESAYUNO");
    console.log(desayunos);
    
    /* if (desayuno.title.includes("EMPANADAS")) {
      console.log("si hay perro");
      desayuno.map(d =>
        <article key={d._id} className="col-6 col-md-4 col-lg-3 px-0 containers">
          <a href={`plato/` + d._id}>
            <img className="w-100 PlatosHomeimg"
              src={`http://localhost:3001` + d.imageUrl} alt="" />
            <div className="overlay col p-0 text-white text-center">
              <h3 className="mb-0">{d.title}</h3>
              <p className="mb-0">{d.summary}</p>
              <hr className="bg-white" />
              <div className="text">
                {d.description}
              </div>
            </div>
          </a>
        </article>
      ) 
    } */
  }

  const platos = platosHome.map(p =>
    <article key={p._id} className="col-6 col-md-4 col-lg-3 px-0 containers">
      <a href={`plato/` + p._id}>
        <img className="w-100 PlatosHomeimg"
          src={`http://localhost:3001` + p.imageUrl} alt="" />
        <div className="overlay col p-0 text-white text-center">
          <h3 className="mb-0">{p.title}</h3>
          <p className="mb-0">{p.summary}</p>
          <hr className="bg-white" />
          <div className="text">
            {p.description}
          </div>
        </div>
      </a>
    </article>
  )

  return (
    <div className="mw-100">
      <div className="Titulo-Presentacion" id="Menu">
        <div className="col-12 col-md-6 pl-3 pl-md-5 pt-3 pt-md-4 text-white">
          <h1 className="tituloh1"><span className="redcolor">Nuestro</span><br></br>MENU</h1>
          <h2 className="mb-0 text-white">EXCELENTE COMIDA, BEBIDAS & CAFE.</h2>
        </div>
      </div>
      <div className="row justify-content-around flex-nowrap m-0 bg-dark">
        <button className="btn btn-foods px-1 py-2">Todas</button>
        <button onClick={GetDesayunos} className="btn btn-foods px-1 py-2">Desayuno</button>
        <button className="btn btn-foods px-1 py-2">Almuerzo</button>
        <button className="btn btn-foods px-1 py-2">Merienda</button>
        <button className="btn btn-foods px-1 py-2">Cena</button>
        <button className="btn btn-foods px-1 py-2">Tragos</button>
      </div>
      <div className="box-menu row flex-wrap mx-0 mw-100">
        {platos}
      </div>
      <div className="parallaxHOME firstpara row m-0 text-center justify-content-center align-items-center">
        <h3 className="font-parallax">VIVÍ LA EXPERIENCIA, TODO EL DÍA, TODOS LOS DÍAS</h3>
      </div>
      <div className="parallaxHOME secondpara row m-0 justify-content-center align-items-center">
        <h3 className="font-parallax">EXCELENTE MÚSICA</h3>
      </div>
    </div>
  );
}

export default HomePages;
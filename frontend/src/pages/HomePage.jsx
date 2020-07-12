import React, { useState, useEffect } from 'react';
import '../Css/homepage.css'
import axios from 'axios';

const HomePages = () => {

  const [platosHome, setPlatosHome] = useState([]);
  const [renderMomento, setRenderMomento] = useState([]);
  const [desayunos, setDesayunos] = useState([]);
  const [almuerzos, setAlmuerzos] = useState([]);
  const [tragos, setTragos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/v1/comidas')
      setPlatosHome(response.data);
      setRenderMomento(response.data);
      
      let desayuno = response.data.filter(DesayunoHome => DesayunoHome.category === "Desayuno");
      let almuerzo = response.data.filter(AlmuerzoHome => AlmuerzoHome.category === "Almuerzo");
      let tragos = response.data.filter(TragosHome => TragosHome.category === "Tragos");

      if (desayuno) {
        setDesayunos(desayuno);
      }

      if (almuerzo) {
        setAlmuerzos(almuerzo);
      }

      if (tragos) {
        setTragos(tragos);
      }

    })();
  }, []);


  const GetTodas = () => {
    setRenderMomento(platosHome);
  }

  const GetDesayunos = () => {
    setRenderMomento(desayunos);    
  }

  const GetAlmuerzos = () => {
    setRenderMomento(almuerzos);
  }

  const GetTragos = () => {
    setRenderMomento(tragos);
  }

  const platos = renderMomento.map(p =>
    <article key={p._id} className="col-6 col-md-4 col-lg-3 px-0 containers">
      <a href={'plato/' + p._id}>
        <img className="w-100 PlatosHomeimg"
          src={`http://localhost:3001` + p.imageUrl} alt="" />
        <div className="overlay col p-0 text-white text-center">
          <h3 className="mb-0">{p.title}</h3>
          {/* <p className="mb-0">{p.summary}</p> */}
          <hr className="bg-white" />
          <div className="text">
            {p.description}
          </div>
        </div>
      </a>
    </article>
  );    

  return (
    <div className="mw-100">
      <div className="Titulo-Presentacion" id="Menu">
        <div className="pl-3 pl-md-5 pt-3 pt-md-4 text-white">
          <h1 className="tituloh1"><span className="redcolor">Nuestro</span><br></br>MENU</h1>
          <h2 className="mb-0 text-white">EXCELENTE COMIDA, BEBIDAS & CAFE.</h2>
        </div>
      </div>
      <div className="row justify-content-around flex-nowrap m-0 bg-dark">
        <button onClick={GetTodas} className="btn btn-foods py-2">Todas</button>
        <button onClick={GetDesayunos} className="btn btn-foods py-2 mx-3 mx-md-0">Desayuno/Merienda</button>
        <button onClick={GetAlmuerzos} className="btn btn-foods py-2 mx-3 mx-md-0">Almuerzo/Cena</button>
        <button onClick={GetTragos} className="btn btn-foods py-2">Tragos</button>
      </div>
      <div className="box-menu row flex-wrap mx-0 mw-100 bg-dark">
        { platos }
      </div>
      <div className="parallaxHOME firstpara row m-0 text-center shadow justify-content-center align-items-center">
        <h3 className="font-parallax">VIVÍ LA EXPERIENCIA, TODO EL DÍA, TODOS LOS DÍAS</h3>
      </div>
      <div className="parallaxHOME secondpara row m-0 text-center shadow justify-content-center align-items-center">
        <h3 className="font-parallax">EXCELENTE MÚSICA</h3>
      </div>
    </div>
  );
}

export default HomePages;